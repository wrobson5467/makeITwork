const db = require('../models/userModel.js');

const applicationController = {};


applicationController.getApplications = (req, res, next) => {
  const {userid} = req.body;
  const query = 
  `SELECT a.*, u.userid, u.username, r.*, j.*, c.*
  FROM applications a inner join users u on a.userid = u.userid
  inner join jobs j on a.jobid = j.jobid
  inner join resumes r on a.resumeid = r.resumeid
  inner join companies c on j.companyid = c.companyid   
  where u.userid = '${userid}'` 
  db.query(query)
  .then(data =>{
    res.locals.applications = data.rows;
    return next();
  } 
  )
  .catch(err =>{
    console.log("error in applicationController.getApplications");
  })
}


module.exports = applicationController;