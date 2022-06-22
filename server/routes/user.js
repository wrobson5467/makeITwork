const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();



//verifylogin when app mount
router.post('/verifyLogin', authController.getCookie, authController.verifySession, (req, res) => {
   res.redirect('/main');
   //used for test:
  // return res.send("verifylogin successfully");
})

//login when user login
router.post('/login', authController.verifyUser, authController.createSession, authController.setCookie, (req, res) =>{
 res.redirect('/main');
 //used for test:
  // return res.send("login successfully");
})

//signup when user sign up
router.post('/signup', authController.createUser, authController.createSession, authController.setCookie, (req, res) =>{
  res.redirect('/main');
  //used for test:
  //return res.send("signup successfully");
})

  
//logout
router.post('/logout', authController.getCookie, authController.removeSession, authController.clearCookie, (req, res) =>{
  return res.send("log out successfully");
})

module.exports = router;