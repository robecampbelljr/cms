const pool = require(`./index.js`);


pool.query(`SELECT * FROM cms.parent;`)
  .then((res) => {
    let parentList = res.rows;
    if (Array.isArray(parentList) && parentList.length > 0) {
      for (i = 0; i < parentList.length; i++) {
        let parent = parentList[i];
        console.log(`Name: ${parent.name}\nPhone: ${parent.phone}\nEmail: ${parent.email}`);
        if(parent.want_lessons) {
          console.log(`Piano: ${parent.piano}\nSax: ${parent.sax}\nVoice: ${parent.vioce}`)
        }
        pool.query(`SELECT * FROM cms.child WHERE parent_id = ${parent.parent_id};`)
          .then((res) => {
            let children = res.rows;
            console.log(JSON.stringify(children));
          })

        console.log(`=========================================`);
      }
    }
  })
  .catch((err) => console.log(err))