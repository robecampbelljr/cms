const { Pool } = require('pg');
require('dotenv').config();

const env = process.env;

const pool = new Pool ({
  user: env.PGUSERNAME,
  password: env.PGPASS,
  host: env.PGHOST,
  database: env.DATABASENAME,
  port: env.PGPORT,
});

module.exports = pool;