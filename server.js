require('dotenv').config();     // Will allow us to hide our secret keys from facebook/google
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const { jobs } = require('./models');
const { User } = require('./models');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.engine('html', es6Renderer);     
app.set('views', 'templates');       
app.set('view engine', 'html');



//set up session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {maxAge: 60000}
}
app.use(session(sess));

// ----------------------------------------------------------------------------
//                                GOOGLE AUTH                                      
// ----------------------------------------------------------------------------
// Sign in with Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
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

// Sign in With Facebook
passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_FB,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: "http://localhost:3000/auth/facebook/callback"
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


// Path to homepage
app.get('/', (req, res) => {
  res.render('home');
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
    res.render('login')
})

app.get('/vocations', async (req, res) => {
  const vocations = await jobs.findAll();
  res.json(vocations);
});

app.get('/vocations/:jobCat', async (req, res) => {
  let category = req.params.jobCat;
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
      results
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
  console.log("new job created successfully")
  res.json({
    "message": "new job created successfully",
    "id": newJob.id
  }); 
});



app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/about', (req, res) => {
  res.render('about')
})

// catch all errors
app.get('*', (req, res) => {
    res.send('404')
})



// process.env.PORT will allow us to deploy with Heroku
// will bring clickable link into console when server is running :)
app.listen(process.env.PORT || 3000, () => {
    console.log(`
    http://localhost:3000`
    );
});    