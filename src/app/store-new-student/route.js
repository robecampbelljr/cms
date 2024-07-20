import pool from '../../../db';
import { NextResponse } from 'next/server.js';

export async function POST(req) {
  if (req.method === 'POST') {
    let body = await req.json();
    let { clientName, clientEmail, clientPhone, clientLessons, clientMusicExp, location, daysAvailable, learnAboutUs, message, childrenLessons, clientWantsLessons} = body;
    let piano = clientLessons.piano;
    let sax = clientLessons.sax;
    let voice = clientLessons.voice;

    if (childrenLessons[0].name === undefined && childrenLessons[0].age === undefined && childrenLessons[0].lessons === undefined) {
      childrenLessons = [];
    }

    try {

      // Queries
      const parentSql = `
        INSERT INTO cms.parent (name, phone, email, want_lessons, piano, sax, voice, learn_about_us, location, message, music_exp)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING parent_id;
        `;
      const childSql = `
        INSERT INTO cms.child (name, age, music_exp, piano,  sax, voice, parent_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
      `;
      const availablilitySql = `
        INSERT INTO cms.days_available (parent_id, mon, tue, wed, thu, fri)
        VALUES ($1, $2, $3, $4, $5, $6);
      `;

      // Inserting Parent Data and getting back parent_id
      const parentValues = [clientName, clientPhone, clientEmail, clientWantsLessons, piano, sax, voice, learnAboutUs, location, message, clientMusicExp];
      // NEW QUERY BELOW
      const parentResult = await pool.query(parentSql, parentValues);
      let parent_id = parentResult.rows[0].parent_id;

      // Inserting child data
      if (childrenLessons != undefined && childrenLessons.length > 0) {
        for (let i = 0; i < childrenLessons.length; i++) {
          let child = childrenLessons[i];
          let childValues = [child.name, child.age, child.musicExperience, child.lessons.piano, child.lessons.sax, child.lessons.voice, parent_id];
          // NEW QUERY BELOW
          let childResult = await pool.query(childSql, childValues);
        }
      }

      // Inserting availability data
      const availabilityValues = [parent_id, daysAvailable.mon, daysAvailable.tue, daysAvailable.wed, daysAvailable.thu, daysAvailable.fri];
      // NEW QUERY BELOW
      let availabilityResult = await pool.query(availablilitySql, availabilityValues);

      return NextResponse.json(({error:'Message successfully stored'}, {status: 201}))
    } catch (err) {
      console.error('Error inserting message:', err);
      return NextResponse.json(({error:'Error Inserting Data'}, {status: 500}))
    }
  } else {
    return NextResponse.json(({error:`Method ${req.method} Not Allowed`}, {status: 405}))
  }
}