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