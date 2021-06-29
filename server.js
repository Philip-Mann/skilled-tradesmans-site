require('dotenv').config();     // Will allow us to hide our secret keys from facebook/google
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const { jobs } = require('./models');
const users = {}
const { User } = require('./models');
const app = express();
const { Server } = require("socket.io");
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));
app.use(express.json());

app.engine('html', es6Renderer);     
app.set('views', 'templates');       
app.set('view engine', 'html');



//set up session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true
}
app.use(session(sess));

// ----------------------------------------------------------------------------
//                                GOOGLE AUTH                                      
// ----------------------------------------------------------------------------
// Sign in with Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  
  async function(accessToken, refreshToken, profile, cb) {
    console.log("This is from google *******", JSON.stringify(profile));
    // console.log("Access Token" + accessToken);
    let user = await User.findOrCreate({
      where: {
        avatarUrl: profile.photos[0].value,
        loginStrategy: profile.provider,
        loginStrategyId: profile.id,
        userName: profile.displayName
      }
    });

    cb(null, profile)
  }
));
// ----------------------------------------------------------------------------
//                                FACEBOOK AUTH                                      
// ----------------------------------------------------------------------------
// Sign in With Facebook
passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_FB,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
},
async function(accessToken, refreshToken, profile, cb) {
  console.log("This is from facebook *******", JSON.stringify(profile));
  // console.log("Access Token" + accessToken);
  let user = await User.findOrCreate({
    where: {
      loginStrategy: profile.provider,
      loginStrategyId: profile.id,
      userName: profile.displayName
    }
  });

  cb(null, profile)
}
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/login')
}

// Path to homepage
app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      isAuthenticated: req.isAuthenticated()
    },
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  });
});

app.get('/entry', ensureAuthenticated, (req, res) => {
  res.render('entry', {
    locals: {
      isAuthenticated: req.isAuthenticated()
    },
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  });
});


//Sign in With Google Callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
//Sign in With Google Callback
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// Sign in With Facebook Callback
app.get('/auth/facebook',
  passport.authenticate('facebook'));
// Sign in With Facebook Callback
app.get('/auth/facebook/callback',  // or callback
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login', {
      locals: {
        isAuthenticated: req.isAuthenticated()
      },
      partials: {
        footer: 'partials/footer',
        header: 'partials/header'
      }
    });
});

app.get('/logout', (req,res) =>{
  req.logout();
  res.redirect('/');
 });

app.get('/vocations', async (req, res) => {
  const vocations = await jobs.findAll();
  res.json(vocations);
});

app.get('/vocations/:jobCat', ensureAuthenticated, async (req, res) => {

  let category = req.params.jobCat;
  
  if (category === "maint") {
    let results = await jobs.findAll()
    res.render('maint', {
      locals: {
        results,
        isAuthenticated: req.isAuthenticated()
      }, partials: {
        footer: 'partials/footer',
        header: 'partials/header'
      }
    })
  }

  if (category === "hvacr") {
    category =  "HVACR";
  } else {
    category = category.charAt(0).toUpperCase() + category.slice(1);
  }
  let results = await jobs.findAll({
    where: {
      jobCat: category
    }
  });
  res.render('category', {
    locals: {
      results,
      isAuthenticated: req.isAuthenticated()
    }, 
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  })
});

app.post('/vocations', async (req, res) => {
  const { jobTitle, jobCat, employer, desc,
  skills, location, website } = req.body;
  const newJob = await jobs.create({
    jobTitle,
    jobCat,
    employer,
    desc,
    skills, 
    location,
    website
  });
  console.log("new job created successfully",req.body)
  res.json({
    "message": "new job created successfully",
    "id": newJob.id
  }); 
});

app.get('/about', (req, res) => {
  res.render('about', {
    locals: {
      isAuthenticated: req.isAuthenticated()
    },
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  })
})

app.get('/watercooler',ensureAuthenticated, (req, res) => {
  // console.log("Hello Console")
  res.render('watercooler', {
    locals: {
      isAuthenticated: req.isAuthenticated()
    },
    partials: {
      footer: 'partials/footer',
      header: 'partials/header'
    }
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.broadcast.emit('hi');
});

io.emit('some event', {
  someProperty: 'some value',
  otherProperty: 'other value'
});

// catch all errors
app.get('*', (req, res) => {
    res.send('404')
})



// process.env.PORT will allow us to deploy with Heroku
// will bring clickable link into console when server is running :)
server.listen(process.env.PORT || 3000, () => {
    console.log(`
    http://localhost:3000`
    );
});    