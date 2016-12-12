# evo-codePlayground
Codepen-style playground for presenting code patterns and experimenting with live edits and changes.

## Setup the application
```shell
$ cd into the directory
$ npm install express --save
$ npm install express-form --save
$ npm install body-parser --save
$ npm install ejs -- save
```

## To start the server
```shell
$ node index.js
```

## To view the page (on local server)

Navigate to [localhost:3030](http://localhost:3030/) and you should see the root page.

## Tip
>The node server needs to be restarted to show changes. Installing [nodemon](https://www.npmjs.com/package/nodemon) gets around this by automatically restarting the server when changes occur.  It might be worth looking into installing nodemon to make development a nicer experience, but it is not necessary to run the application.

### To install globally
```shell
$ npm install -g nodemon
```

Once that has finished you can run the application by typing `$ nodemon index.js` in place of the `$ node index.js` command. Both will work.

## Dependencies

This setup requires a node.js server.  It uses the [ejs](http://www.embeddedjs.com/) templating system.  In order to setup you would need to run the instructions above in order to setup the application and it's dependencies. 

> In order to run this application it requires all the files inside the root directory.  However, the files linked to the ace code editor listed below could be removed and the application itself would still run.  The editor would not work but the application would still start up and run.

The code editor in this application relies on the [Ace](https://ace.c9.io) code editor plugin.

### Required files for ACE code editor plugin

####Required CSS

Located in /public/assets/css/

```shell
cloudEditCustom.css
```

####Required JS (All the files inside the folder below)

located in /public/assets/js/

```shell
/public/assets/js/
```

### File structure

#### Procile
This tells the application how to start up.

#### index.js
This file is what is in charge of the routes for the application as well as setting up the dependencies that will be used by the application

#### package.json
This is the file that lists all the delendencies.  This file is also what gets updated when dependencies change

####server direcotry
This directory is where the views are kept.  This directory holds the files that are seen by peopl visiting the application.

####public directory
This directory holds the asset files used by the application.  Specifically the css (or scss), javascript and image files that would be used.

####node_modules
This directory holds all the included modules for node that the application uses.  This is generated when you create the application in the steps above.  It is included in the gitignore.