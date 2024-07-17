const db = require(`./index.js`);

db.queryAsync(`DROP SCHEMA IF EXISTS cms CASCADE`)
  .then(() => db.queryAsync(`CREATE SCHEMA cms`))
  .then(() => db.queryAsync(`
    CREATE TABLE cms.messages (
      name VARCHAR(255) NOT NULL,
      datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(12),
      message TEXT NOT NULL
    )`)
  )
  .then(() => db.queryAsync(`
    CREATE TABLE cms.parent (
      parent_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      phone VARCHAR(12),
      email VARCHAR(255),
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      want_lessons TINYINT(1),
      music_exp TINYINT(1),
      piano TINYINT(1),
      sax TINYINT(1),
      voice TINYINT(1),
      days_id INT,
      learn_about_us TEXT,
      message TEXT
    )`)
  )
  .then(() => db.queryAsync(`
    CREATE TABLE cms.child (
      child_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      age INT,
      music_exp TINYINT(1),
      piano TINYINT(1),
      sax TINYINT(1),
      voice TINYINT(1),
      parent_id INT,
      FOREIGN KEY (parent_id) REFERENCES cms.parent(parent_id)
    )`)
  )
  .then(() => db.queryAsync(`
    CREATE TABLE cms.days_available (
      days_id INT AUTO_INCREMENT PRIMARY KEY,
      parent_id INT,
      mon TINYINT(1),
      tue TINYINT(1),
      wed TINYINT(1),
      thu TINYINT(1),
      fri TINYINT(1),
      FOREIGN KEY (parent_id) REFERENCES cms.parent(parent_id)
    )`)
  )
  .then(() => {
    console.log('Tables created successfully');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });
