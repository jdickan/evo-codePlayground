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
