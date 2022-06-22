const express = require('express');

const applicationController = require('../controllers/applicationController');

const router = express.Router();


//getApp when mount main page
router.get('/getApp', applicationController.getApplications, (req, res) =>{
  return res.status(200).json(res.locals.applications);
})


//addApp when user sumbit the form
router.post('/addApp', applicationController.getAvaiableIds, applicationController.insertResume, applicationController.insertCompany, applicationController.insertJob, applicationController.insertApplication , (req, res) =>{
  return res.send("add application successfully!")
})

//modApp when user modify the table
router.post('/modApp', applicationController.updateResume, applicationController.updateCompany, applicationController.updateJob, applicationController.updateApplication , (req, res) =>{
  return res.send("modify application successfully!")
})

//getStageData when mount visualization page
router.get('/getStageData',  applicationController.getStageResult, (req, res) =>{
  return res.status(200).json(res.locals.stagedata);
})
//deleteApp when user want to delete applications
router.post('/deleteApp', applicationController.deleteApplication, (req, res) =>{
  return res.send("delete application successfully!")
})




module.exports = router;