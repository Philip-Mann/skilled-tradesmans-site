# Setting up server on your computer?
## Copy and Paste these commands and paste them in terminal to run server
    git clone https://github.com/Philip-Mann/skilled-tradesmans-site.git
    npm i express express-es6-template-engine express-session passport passport-facebook passport-google-oauth20 sequelize
    npm i -D nodemon sequelize-cli
## Go into package.json and paste this in scripts
    "dev": "nodemon server.js"
## Now run the dev script
    npm run dev
- it will console log a clickable link that will take you to home pagegit