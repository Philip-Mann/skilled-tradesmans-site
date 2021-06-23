# [Skilled Trades Site](https://aqueous-citadel-90211.herokuapp.com/)

Take a look at the Houston, Texas area skilled trades job board.  Find job openings from employers that need you right away!

<div align="left">
  <img style="margin: 10px" src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80" alt="Transportation" height="45" />
  <img style="margin: 10px" src="https://images.unsplash.com/photo-1507497642206-b5c42198f2df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80" alt="Welding" height="45" />
  <img style="margin: 10px" src="https://images.unsplash.com/photo-1596496181961-4326beb30551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80" alt="Carpentry" height="45" />
  <img style="margin: 10px" src="https://skillpointe.com/sites/default/files/2021-02/HVAC_Technician.jpg" alt="HVACR" height="45" />
  <img style="margin: 10px" src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="Electrical" height="45" />
  <img style="margin: 10px" src="https://www.neyerplumbing.com/blog/wp-content/uploads/2020/02/KenNeyer-1024x683.jpg" alt="Plumbing" height="45" />
</div>

## Coding Challenge:
- API application with web front end
- PostgreSQL database
- Application hosted on Heroku
- Application meets a business or social need

## Tools:
<div align="left">
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="45" />
  <img style="margin: 30px" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg" alt="JSON" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="express" height="45" />
  <img style="margin: 30px" src="https://ucarecdn.com/8f3cac0e-b146-4f0f-878c-680a6671d804/" alt="passport" height="45" />
  <img style="margin: 30px" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" alt="PostgreSQL" height="45" />
  <img style="margin: 30px" src="https://process.filestackapi.com/cache=expiry:max/resize=width:700/YO2eS6E7QmwNbjzGrNZz" alt="Sequelize" height="45" />
  <img style="margin: 30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png" alt="socket" height="45" />
  <img style="margin: 30px" src="assets/heroku.png" alt="heroku" height="45" />
  </div> 

1. HTML
1. CSS
1. BOOTSTRAP
1. JAVASCRIPT
1. JSON
1. EXPRESS
1. PASSPORT
1. POSTGRESQL
1. SEQUELIZE
1. SOCKET
1. HEROKU

## Links:
  - [Skilled Trades Job Site](https://aqueous-citadel-90211.herokuapp.com/)
  - [Trello Scrum Board](https://trello.com/b/S5xxbYY1/skilledtradesman)

# Overview of the Skilled Trades Job Board
## Skilled Trades Job Board User Interface
 <img style="margin: 30px" src="assets/sktjb-main.png" alt="heroku" height="200" />
 
  1. The Home page presents pictures representing the six Skilled Trades categories.  The Nav bar at the top of the page provides all of the site functions
  1. The "Skilled Tradesman" item links to the home page.
  1. The "Home" item links to the home page.
  1. The "Vocations" item is pulldown menu - listing the six skilled trades as pulldown selection options.  Selection of any of the options links to the Category page using the selected skilled trade as the search criteria for presenting on the category page (see the example below).
  1. The "Entry" item links to the Entry page will provides the ability to add new job openings to the database for the job board.
  1. The "Login" item links to the login page which uses facebook or GitHub login credentials to provide access to the user.
  1. The "About" item links to the about which which presents information about the developers of the site.
  1. The "Chat" item links to the job board chat page.

## Skilled Trades Job Board Functional Design
  1. The job board site is an API that presents a web user-interface.  
  1. Job openings are maintained in a PostgreSQL database.  
  1. The Entry page provides the U/I to add new job openings.  
  1. The Category page presents the results of the search against the PostgreSQL database for a selected skilled trade.
  1. The Chat room is a separate function with no direct connection to the job board database or other site functions.

## Developed by:

- [Phil Mann](https://www.linkedin.com/in/philip-mann-b7989b173/)
- [Ted Wetekamp](https://www.linkedin.com/in/ted-wetekamp-a6a2281/)
- [Kingsley Onwuharon](https://github.com/kingsonwu)


# Setting up the application locally on your computer?
## Copy and Paste these commands and paste them in terminal to run server
    git clone https://github.com/Philip-Mann/skilled-tradesmans-site.git

    npm i express express-es6-template-engine express-session passport passport-facebook passport-google-oauth20 sequelize
    
    npm i -D nodemon sequelize-cli
## Go into package.json and paste this in scripts
    "dev": "nodemon server.js"
## Now run the dev script
    npm run dev
- it will console log a clickable link that will take you to home page