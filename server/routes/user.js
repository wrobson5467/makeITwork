const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();



//verifylogin when app mount
router.post('/verifyLogin', authController.getCookie, authController.verifySession, (req, res) => {
   res.redirect('/main');
})

//login when user login
router.post('/login', authController.verifyUser, authController.createSession, authController.setCookie, (req, res) =>{
  //uncomment below when test backend only

  // res.redirect('/');
  res.redirect('/main');

})

//signup when user sign up
router.post('/signup', authController.createUser, authController.createSession, authController.setCookie, (req, res) =>{
 //uncomment below when test backend only

  // res.redirect('/');
  res.redirect('/main');
})

  
//logout
router.post('/logout', authController.getCookie, authController.removeSession, authController.clearCookie, (req, res) =>{
  return;
})






module.exports = router;