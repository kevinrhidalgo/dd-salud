//express allows to use the methods of the POST, GET etc... in this case it is used 
//for the authentication process for when the user either logs in or registers
const router = require("express").Router();
//Passport is used with the sole purpose of authenticating requests
const passport = require('passport');
//this is calling the controller file which is the file where the authentication logic is such as, 
//if logged in you get this outcomes, if not this outcome
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")

//Added this to redirect to the login 
.post(passport.authenticate('local', { failureRedirect: '/login' }),usersController.login);
//Changed to post route to match the request

router.route("/logout")
      .post(usersController.logout);


// Matches with "/api/users/:id"
router.route("/user")
      .get(usersController.getUser);
/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;