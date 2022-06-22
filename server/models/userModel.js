const { Pool } = require('pg');
const PG_URI = 'postgres://sailorvu:h8YX_iGisSclnxMDWKtbmpMUzx7xilrJ@heffalump.db.elephantsql.com/sailorvu';
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text)
    return pool.query(text,params,callback)
  }
};

// CREATE TABLE resumes (
//   resumeid BIGINT PRIMARY KEY,
//   resumename text,
//   resumeurl text,
//   userid BIGINT,
//   UNIQUE (userid, resumename)
// )

// CREATE TABLE companies (
//   companyid BIGINT PRIMARY KEY,
//   companyname text UNIQUE,
//   companytype text

// )

// CREATE TABLE jobs (
//   jobid BIGINT PRIMARY KEY,
//   position text,
//   location text,
//   remote BOOLEAN,
//   jobdescription text,
//   techstack text,
//   experiencelevel text,
//   companyid BIGINT
// )


// CREATE TABLE applications (
//   applicationid BIGINT PRIMARY KEY,
//   stage text,
//   currenttasks text,
//   interest text,
//   interviewquestions text,
//   modifieddate timestamp,
//   userid BIGINT,
//   jobid BIGINT,
//   resumeid BIGINT,
//   UNIQUE (userid, jobid)

// )




// CREATE TABLE sessions (
//   sessionid SERIAL PRIMARY KEY,
//   cookieid text,
//   created_at timestamp NOT NULL
// )

// CREATE TABLE users (
//   userid BIGSERIAL PRIMARY KEY,
//   username text  UNIQUE NOT NULL,
//   password text NOT NULL
// )
