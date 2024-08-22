'use client'
import { useState } from 'react';

export default function Burger() {

  let [studioInfo, setStudioInfo] = useState(false);

  return (
    <div>
      <div className="menu slide-in-left">
        <ul>
          <li className="cursive pointer"><a href="/">Home</a></li>
          <li className="cursive"><a href="/about-us">About Us</a></li>
          <li className="cursive"><a href="/new-student">New Students</a></li>
          <li className="cursive"><a href="/faqs">FAQs</a></li>
          <li className="cursive pointer" onClick={() => {setStudioInfo(!studioInfo)}}>Studio Info</li>
          {studioInfo ? <ul><li><a href="/lessons">Lesson Info</a></li><li><a href="/studio-policies">Studio Policies</a></li></ul>: null}
          </ul>
      </div>
      <div className="screen fade-in"></div>
    </div>
  )
};