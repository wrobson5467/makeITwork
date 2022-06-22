const db = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const SALTROUND = 5;

const authController = {};

//save username, userid, hashedpassword to users table
authController.createUser = (req, res, next) => {
  console.log("in authController.createUser")
  console.log('req', req)

  const username = req.body.username;
  const password = req.body.password;

  console.log("username, password", username, password)
  if(!password || !username){
    console.log("Error in authController.createUser")
    return next({message: "Error in authController.createUser - Input not complete"});
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
    return next({message: "Error in authController.createSession - Input not complete"});
  }
  const query = `INSERT INTO sessions ("cookieid","userid","created_at") VALUES ('${userid}', '${userid}', current_timestamp)`;
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

//verifyUser for user login
authController.verifyUser = (req, res, next) =>{
  const {username, password} = req.body;
  if(!password || !username){
    return next({message:"Error in authController.verifyUser - Input not complete"});
  };
  
  const query = `SELECT userid, password FROM users WHERE username = '${username}'`;

  db.query(query)
  .then(data =>{
    console.log("data in verifyUser: ",JSON.stringify(data.rows[0].password));

    bcrypt.compare(password, data.rows[0].password, (err, result)=>{
      if(result) {
        res.locals.userid = data.rows[0].userid;
        return next();
      }
      else{
        console.log("password does not match");
        return next({message: 'Password does not match'});
      }

    })
  })
  .catch(err => {
    console.log("Error in authController.verifyUser: ", err);

  })

};

authController.getCookie= (req, res, next) => {
  console.log("in getCookie");
  res.locals.ssid = req.cookie.ssid;
  return next();

};

authController.getUserId = (req, res, next) => {
  const ssid = res.locals.ssid;
  const query = `SELECT userid FROM sessions WHERE cookieid = '${ssid}`
  db.query(query)
  .then(data => {
    res.locals.userId = data.rows[0];
  })
  .catch(err => {
    const errorObj = {
      log: 'error in authController.getUserId',
      message: `server error ${err}`
    };
    return next(errorObj)
  })
}

authController.verifySession= (req, res, next) =>{
  const query = `SELECT COUNT(*) AS count FROM sessions WHERE cookieid = '${res.locals.ssid}'`;
  db.query(query)
  .then(data =>{
    if(data.rows[0].count > 0){
      return next();
    }
    else{
      console.log("invalid session, redirect to login page");
      res.redirct('/user/login');
    }
  })
  .catch(err => {
    console.log("Error in authController.verifySession: ", err);
  })
 };

 authController.removeSession = (req, res, next) =>{
  //remove ssid from session table
  const query =  `UPDATE sessions SET cookieid = null WHERE cookieid = '${res.locals.ssid}'`;
  db.query(query)
  .then(data =>{
    console.log("updated cookieid to null");
    return next();
  })
  .catch(err =>{
    console.log("Error in authController.removeSession: ", err);
  })
 };

 authController.clearCookie = (req, res, next) =>{
  res.clearCookie('ssid');
  return next();
  
 };


module.exports = authController;