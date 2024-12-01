import banner from './images/piano-banner.png';
import Header from './components/Header';
import Blurb from './components/Blurb';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="app">
      <Header image={banner} />
      <section className="info-section">
        <p>Music teachers serving the Treasure Valley</p>
        <h5>Currently enrolling new students! Register <Link href="/new-student" passHref legacyBehavior>here</Link> for a free trial lesson.</h5>
      </section>
      <section className="blurb-section">
        <Blurb link="/lessons" imgURL={'lessonblurb'} text="Lesson Information" altText="Lesson Blurb Image"></Blurb>
        <Blurb link="/lessons#piano" imgURL={'pianoblurb'} text="Piano Lessons" altText="Piano Blurb Image"></Blurb>
        <Blurb link="/lessons#sax" imgURL={'saxblurb'} text="Saxophone Lessons" altText="Piano Blurb Image"></Blurb>
        <Blurb link="/lessons#voice" imgURL={'singblurb'} text="Voice Lessons" altText="Voice Blurb Image"></Blurb>
      </section>
      <Footer />
    </div>
  );
}