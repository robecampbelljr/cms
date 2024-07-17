const db = require(`./index.js`);

db.queryAsync(`DROP SCHEMA IF EXISTS cms CASCADE`)
  .then(() => db.queryAsync(`CREATE SCHEMA cms`))
  .then(() => {
    db.queryAsync(`CREATE TABLE cms.messages (
      name VARCHAR NOT NULL,
      datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      email VARCHAR NOT NULL,
      phone VARCHAR(12),
      message VARCHAR NOT NULL
    )`)
  })
  .catch((err) => {console.log('Error:' + err)})
  .then(() => {
    db.queryAsync(`CREATE TABLE cms.parent (
     parent_id SERIAL PRIMARY KEY,
     name VARCHAR,
     phone VARCHAR,
     email VARCHAR,
     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     want_lessons BOOLEAN,
     music_exp BOOLEAN,
     piano BOOLEAN,
     sax BOOLEAN,
     voice BOOLEAN,
     days_id INTEGER,
     learn_about_us VARCHAR,
     message VARCHAR
    )`)
  })
  .catch((err) => {console.log('Error:' + err)})
  .then(() => {
    db.queryAsync(`CREATE TABLE cms.child (
      child_id SERIAL PRIMARY KEY,
      name VARCHAR,
      age INTEGER,
      music_exp BOOLEAN,
      piano BOOLEAN,
      sax BOOLEAN,
      voice BOOLEAN,
      parent_id INTEGER
    )`)
  })
  .catch((err) => {console.log('Error:' + err)})
  .then(() => {
    db.queryAsync(`CREATE TABLE cms.days_available (
      days_id SERIAL PRIMARY KEY,
      parent_id INTEGER,
      mon BOOLEAN,
      tue BOOLEAN,
      wed BOOLEAN,
      thu BOOLEAN,
      fri BOOLEAN
   )`)
  })
  .catch((err) => {console.log('Error:' + err)})



