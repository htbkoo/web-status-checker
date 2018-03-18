# README #

### What is this repository for? ###

* This is the repository of web-status-checker, a simple project to check whether an URL is accessible
* An instance is deployed to glitch: https://web-status-checker-hey.glitch.me
    * Not possible to deploy to github page because of the fact that CORS request (to check external URL) and thus a proxy server is needed  
* This server part of the project is bootstrapped with [Express.js - Express Generator](https://expressjs.com/en/starter/generator.html) 
* This UI part of the project is bootstrapped with [Create-React-App (CRA)](https://github.com/facebookincubator/create-react-app) 

### How do I get set up? ###

* Summary of set up:
    * server: "yarn"/"npm install" to download dependencies and the project is good to go.
    * ui: "cd ./ui" then "yarn"/"npm install" to download dependencies and the ui project is good to go.
* Configuration: N/A 
* Dependencies: Listed at package.json and ui/package.json
* Database configuration: N/A
* How to run tests: N/A
* Deployment instructions: N/A
* How to start: 
    * local development: "yarn run local-start"/"npm run local-start" 
        * note that this local-start run would not build the ui at the same time
    * start with ui built: "yarn start"/"npm run start"
* How to build: N/A

### Contribution guidelines ###

* Writing tests: N/A
* Code review: N/A
* Other guidelines: N/A

### Who do I talk to? ###

* Repo owner or admin: me ([htbkoo](https://bitbucket.org/htbkoo/))
* Other community or team contact: N/A