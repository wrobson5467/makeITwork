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
  WHERE u.userid = '${userid}'
  ORDER BY a.applicationid` 
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

applicationController.getAvaiableIds = (req, res, next) => {

  const query = 
  `WITH j as (SELECT 'k' as k, jobid
    FROM jobs
    ORDER BY jobid DESC
    LIMIT 1),
  r as(
    SELECT 'k' as k, resumeid
    FROM resumes
    ORDER BY resumeid DESC
    LIMIT 1
  ),
  a as (
    SELECT 'k' as k, applicationid
    FROM applications
    ORDER BY applicationid DESC
    LIMIT 1
  ),
  c as (
    SELECT 'k' as k, companyid
    FROM companies
    ORDER BY companyid DESC
    LIMIT 1
  )
  SELECT coalesce(j.jobid,0) as jobid, coalesce(r.resumeid,0) as resumeid, coalesce(a.applicationid,0) as applicationid, coalesce(c.companyid,0) as companyid 
  FROM j inner join r on j.k = r.k
  inner join a on j.k = a.k
  inner join c on j.k = c.k
  `
  db.query(query)
  .then(data =>{
    console.log("mostrecentids:", data.rows[0]);
    res.locals.availableJobId = parseInt(data.rows[0].jobid) + 1;
    res.locals.availableResumeId = parseInt(data.rows[0].resumeid) + 1;
    res.locals.availableApplicationId = parseInt(data.rows[0].applicationid) + 1;
    res.locals.availableCompanyId = parseInt(data.rows[0].companyid) + 1;
    return next();
  } 
  )
  .catch(err =>{
    console.log("applicationController.getAvaiableIds");
  })

}

applicationController.insertResume = (req, res, next) => {
const {userid, resumename, resumeurl } = req.body;

//insert resume, return updated resumeid
const query = 
  `INSERT INTO resumes ( resumeid, resumename, resumeurl, userid) 
  VALUES (${res.locals.availableResumeId}, '${resumename}', '${resumeurl}', ${userid})
  ON CONFLICT (userid, resumename) DO UPDATE SET resumeurl = '${resumeurl}'
  RETURNING resumeid
  `;

  db.query(query)
  .then(data =>{
    res.locals.current_resumeid =  data.rows[0].resumeid;
    return next();
  } 
  )
  .catch(err =>{
    console.log("error in applicationController.insertResume");
  });

}

applicationController.insertCompany = (req, res, next) => {
  const {companyname, companytype } = req.body;

  //insert company, return updated companyid
  const query = 
  `INSERT INTO companies ( companyid, companyname, companytype) 
  VALUES (${res.locals.availableCompanyId}, '${companyname}', '${companytype}')
  ON CONFLICT (companyname) DO NOTHING
  RETURNING companyid
  `;
  db.query(query)
  .then(data =>{
    res.locals.current_companyid = data.rows[0].companyid;
    return next();
  } 
  )
  .catch(err =>{
    console.log("error in applicationController.insertCompany");
  });



}

applicationController.insertJob= (req, res, next) => {
  const {position, location, remote, jobdescription, techstack, experiencelevel } = req.body;
 //insert job, return current jobid
 const query = 
 `INSERT INTO jobs ( jobid, position, location, remote, jobdescription, techstack, experiencelevel, companyid) 
 VALUES (${res.locals.availableJobId}, '${position}', '${location}', ${remote}, '${jobdescription}', '${techstack}', '${experiencelevel}', ${res.locals.current_companyid})
 RETURNING jobid
 `;
 db.query(query)
 .then(data =>{
   res.locals.current_jobid = data.rows[0].jobid;
   return next();
 } 
 )
 .catch(err =>{
   console.log("error in applicationController.insertJob");
 });

}

applicationController.insertApplication= (req, res, next) => {
  const {userid, stage, currenttasks, interest, interviewquestions } = req.body;
const query = 
  `INSERT INTO applications ( applicationid, stage, currenttasks, interest, interviewquestions, modifieddate, userid, jobid, resumeid) 
  VALUES (${res.locals.availableApplicationId}, '${stage}', '${currenttasks}', '${interest}', '${interviewquestions}', current_timestamp, ${userid}, ${res.locals.current_jobid}, ${res.locals.current_resumeid})
  ON CONFLICT (userid, jobid) DO NOTHING
  `;
  db.query(query)
  .then(data =>{
    return next();
  } 
  )
  .catch(err =>{
    console.log("error in applicationController.insertApplication");
  });
}

applicationController.updateResume = (req, res, next) => {
  const {resumeid, resumename, resumeurl } = req.body;
  

  const query = 
    `UPDATE resumes
    SET resumename = '${resumename}', resumeurl = '${resumeurl}'
    WHERE resumeid = ${resumeid}`;

    db.query(query)
    .then(data =>{
      return next();
    } 
    )
    .catch(err =>{
      console.log("error in applicationController.updateResume");
    });
  
  }

  applicationController.updateCompany = (req, res, next) => {
    const {companyid, companyname, companytype } = req.body;
    
    const query = 
    `UPDATE companies
    SET companyname = '${companyname}', companytype = '${companytype}'
    WHERE companyid = ${companyid}`;
  
    db.query(query)
    .then(data =>{
      return next();
    } 
    )
    .catch(err =>{
      console.log("error in applicationController.updateCompany");
    });
  
  
  
  }

  applicationController.updateJob= (req, res, next) => {
    const {jobid, position, location, remote, jobdescription, techstack, experiencelevel } = req.body;
    const query = 
    `UPDATE jobs
    SET position = '${position}', location = '${location}', remote =${remote}, jobdescription='${jobdescription}', techstack='${techstack}', experiencelevel='${experiencelevel}'
    WHERE jobid = ${jobid}`;

   db.query(query)
   .then(data =>{
     return next();
   } 
   )
   .catch(err =>{
     console.log("error in applicationController.updateJob");
   });
  
  }

  applicationController.updateApplication= (req, res, next) => {
    const {applicationid, stage, currenttasks, interest, interviewquestions } = req.body;
    const query = 
    `UPDATE applications
    SET stage = '${stage}', currenttasks = '${currenttasks}', interest = '${interest}', interviewquestions = '${interviewquestions}', modifieddate = current_timestamp
    WHERE applicationid = ${applicationid}`;

    db.query(query)
    .then(data =>{
      return next();
    } 
    )
    .catch(err =>{
      console.log("applicationController.updateApplication");
    });
  }

  applicationController.getStageResult = (req, res, next) => {
    const {userid} = req.body;
    const query = 
    `with tb as (
      SELECT 'k' as K, COUNT(*) AS total_count
      FROM applications
      WHERE userid = ${userid}
      )
      ,
      a as (
      SELECT 'k' as K, stage, count(*) as count_by_stage
      FROM applications
      WHERE userid = ${userid}
      GROUP BY stage, K
      )
      
      SELECT a.stage, a.count_by_stage, tb.total_count
      FROM a inner join tb on tb.K = a.K`
    db.query(query)
    .then(data =>{
      res.locals.stagedata = data.rows;
      return next();
    } 
    )
    .catch(err =>{
      console.log("error in applicationController.getApplications");
    })
  }
module.exports = applicationController;