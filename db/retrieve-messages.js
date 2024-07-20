const pool = require('./index.js');

pool.query(`SELECT * FROM cms.messages;`)
  .then((res) => {
    let messages = res.rows;

    if (messages === undefined) {
      console.log('There are no messages.')
    } else {
      if (Array.isArray(messages) && messages.length > 0) {
        for (let i = 0; i < messages.length; i++) {
          let message = messages[i];
          console.log(`Name: ${message.name}\nEmail: ${message.email}\nPhone: ${message.phone}\nMessage: ${message.message}\nTimestamp: ${message.datetime}
          `)
          if (messages.length > 1 && i != (messages.length - 1)) {
            console.log('====================================================\n')
          }
        }
      }
    }
    return 0;
  })
  .catch((err) => console.log(err))

