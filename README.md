# evo-codePlayground
codepen style playground for presenting code patterns, and experimenting with live edits and changes.

# Setup the application
1. cd into the directory
2. npm install express --save
3. npm install express-from --save
4. npm install body-parser --save
5. npm install ejs -- save

# To start the server
node index.js

## Tip
With the node server it needs to be restrated to show changes.  Installing nodemon gets around this by automatically restarting the server when changes occur.  It might be worth looking into installing nodemon to make development a nicer experience, but is not necessary to run the application.


### To install globally
`npm install -g nodemon`

Once that has finished you can run the application by typing `nodemon index.js` in place of `node index.js`.  Both will work.

More information can be found [here](https://www.npmjs.com/package/nodemon.)