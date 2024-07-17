'use client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import banner from '../images/lessonbanner.png';
import { useEffect } from 'react';

export default function ThankYou() {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 15000);
  }, [])


  return (
    <div className="app">
      <Header image={banner} />
      <div className="thank-you">
        <p>Thank you for your interest in Campbell Music Studio! Please allow us 48 hours to respond.</p>
        <p>You will be redirected shortly...</p>
      </div>
      <Footer />
    </div>
  )
}