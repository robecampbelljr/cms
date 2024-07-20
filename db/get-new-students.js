const pool = require('./index.js');

async function fetchData() {

  try {
    let parentQuery = `select * from cms.parent`;
    let parentData = await pool.query(parentQuery);
    let parentList = parentData.rows;

    if (Array.isArray(parentList) && parentList.length > 0) {
      for (let i = 0; i < parentList.length; i++) {
        let parent = parentList[i];
        let childData = await pool.query(`select * from cms.child where parent_id = ${parent.parent_id};`);
        let childList = childData.rows;
        let availabilityData = await pool.query(`select * from cms.days_available where parent_id = ${parent.parent_id};`);
        let daysAvailable = availabilityData.rows[0];

        console.log(`Name: ${parent.name}\nPhone: ${parent.phone}\nEmail: ${parent.email}\nHear About Us: ${parent.learn_about_us}\nLocation: ${parent.location}\nLessons: ${parent.want_lessons ? `They want to take ${parent.piano ? 'Piano ' : ''}${parent.sax ? 'Saxophone ' : ''}${parent.voice ? 'Voice.' : ''}` : 'They do not want lessons.'}\nMessage: ${parent.message}`);

        if (Array.isArray(childList) && childList.length > 0) {
          console.log(`\nChildren:`)
          for (let i = 0; i < childList.length; i++) {
            let child = childList[i];
            console.log(`${child.name}: ${child.age} years old, they ${child.music_exp ? 'do' : 'do not'} have music experience. They want to learn ${child.piano ? 'piano' : ''} ${child.sax ? 'saxophone' : ''} ${child.voice ? 'voice' : ''}`);
          }
        }
        console.log(`\nThey are available ${daysAvailable.mon ? 'Monday ' : ''}${daysAvailable.tue ? 'Tuesday ' : ''}${daysAvailable.wed ? 'Wednesday ' : ''}${daysAvailable.thu ? 'Thursday ' : ''}${daysAvailable.fri ? 'Friday.' : ''}`);
        console.log(`======================================`);
      }
    }
  } catch (err) {
    console.error('Error fetching data', err);
  }
}

// Execute the function
fetchData().catch(err => console.error('Error in fetchData function', err));