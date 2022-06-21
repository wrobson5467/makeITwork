const db = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const SALTROUND = 5;

const authController = {};

//save username, userid, hashedpassword to users table
authController.createUser = (req, res, next) => {
  const {username, password} = req.body;
  if(!password || !username){
    return next(new Error("Error in authController.createUser - Input not complete"));
  }
  bcrypt.hash(password, SALTROUND, (err, hashedPassword) => {
    const query = 
    `INSERT INTO users ("username","password") VALUES ('${username}', '${hashedPassword}');
     SELECT userid from users WHERE username = '${username}'
    `
    db.query(query)
    .then(data => {
      console.log("userid from users table ", JSON.stringify(data[1].rows[0].userid));
      res.locals.userid = data[1].rows[0].userid.toString();
      console.log("res.locals.userid ", res.locals.userid);
      return next();
    })
    .catch((err)=>{
      console.log("Error in authController.createUser: ", err);
      //alert(`user name ${username} already exists`);
    })
  })
  
};

//save cookieid, createdAt in the session table
authController.createSession = (req, res, next) => {
 
  const userid = res.locals.userid;
  console.log("userid in createSession ", userid);
  if(!userid){
    return next(new Error("Error in authController.createSession - Input not complete"));
  }
  const query = `INSERT INTO sessions ("cookieid","created_at") VALUES ('${userid}', current_timestamp)`;
  db.query(query)
  .then(data => {
    return next();
  })
  .catch((err)=>{
    console.log("Error in authController.createSession: ", err)
  });
  

};
//set up key value pair of cookie
authController.setCookie = (req, res, next) =>{
  console.log("res.locals.cookieid in setCookie: ", res.locals.userid);
  res.cookie('ssid', res.locals.userid);
  return next();
  
};



module.exports = authController;