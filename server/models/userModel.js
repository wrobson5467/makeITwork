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


// CREATE TABLE jobs (
//   jobid SERIAL PRIMARY KEY,
//   position text,
//   location text,
//   remote BOOLEAN,
//   jobdescription text,
//   techstack text,
//   experiencelevel text,
//   companyid BIGINT
// )

// CREATE TABLE resumes (
//   resumeid SERIAL PRIMARY KEY,
//   resumename text,
//   resumeurl text,
//   userid BIGINT
// )


// CREATE TABLE applications (
//   applicationid SERIAL PRIMARY KEY,
//   stage text,
//   currenttasks text,
//   interest text,
//   interviewquestions text,
//   modifieddate timestamp,
//   userid BIGINT,
//   jobid BIGINT,
//   resumeid BIGINT

// )

// CREATE TABLE companies (
//   companyid SERIAL PRIMARY KEY,
//   companyname text,
//   companytype text,
//   jobid BIGINT

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
