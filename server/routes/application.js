const express = require('express');

const applicationController = require('../controllers/applicationController');

const router = express.Router();


//getApp when mount main page
router.get('/getApp', applicationController.getApplications, (req, res) =>{
  return res.status(200).json(res.locals.applications);
})


//addApp when user sumbit the form


//modApp when user modify the table


//deleteApp when user want to delete applications

//getStageData when mount visualization page



module.exports = router;