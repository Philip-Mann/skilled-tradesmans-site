require('dotenv').config();     // Will allow us to hide our secret keys from facebook/google
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const { jobs } = require('./models');

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
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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

// Path to homepage
app.get('/', (req, res) => {
    res.render('home');
})



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
  res.json({
    "message": "new job created successfuly",
    "id": newJob.id
  }); 
});


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