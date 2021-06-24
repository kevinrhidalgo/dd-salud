//path allows the return of the path of the folder where the current JS files resides
const path = require("path");
//express is used and called to provide the methods like GET, POST, USE etc...
// to be called for an HTTP or URL Pattern. 
const router = require("express").Router();
//this calls the user file where all the authentication process is at, for login, signup, so...
//when loggin in you can login or registesr which will give you the result of logging in 
const userRoutes = require("./users");

//User Routes
router.use("/users", userRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  //this dirname is allowed to be used cause of path 
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
