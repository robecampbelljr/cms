const pool = require('./index.js');

pool.query(`SELECT * FROM cms.messages'`)
.then((res) => console.log(res.rows[0]))
  .catch((err) => console.log(err))

