import axio from 'axios';
import db from '../../../db/index.js';
import { NextResponse } from 'next/server.js';

export async function POST(req) {
  if (req.method === 'POST') {
    let body = await req.json();
    let { name, email, phone, message } = body;
    try {
      const sendSql = `
        INSERT INTO cms.messages (name, email, phone, message)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `;
      const values = [name, email, phone, message];
      const result = await db.queryAsync(sendSql, values);
      return NextResponse.json(({error:'Message successfully stored'}, {status: 201}))
    } catch (err) {
      console.error('Error inserting message:', err);
      return NextResponse.json(({error:'Error Inserting Data'}, {status: 500}))
    }
  } else {
    return NextResponse.json(({error:`Method ${req.method} Not Allowed`}, {status: 405}))
  }
}