import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../images/lessonbanner.png';
import Image from 'next/image';
import us from '../images/us.jpeg';
import { robertBio, robertBio2, ericaBio, ericaBio2 } from '../component-content/aboutus-info';

const aboutus = () => {

  return (
    <div className="app">
      <Header image={banner}/>
      <h1 className="lesson-header cursive flex-center"><u>About Us</u></h1>
      <div className="about-us">
        <div className="bios">
          <div className="bio">
            <h3 className="cursive">Robert</h3>
            <h4>Piano, Saxophone, Voice</h4>
            <p>{robertBio}</p>
            <p>{robertBio2}</p>
          </div>
          <div className="bio">
            <h3 className="cursive">Erica</h3>
            <h4>Piano</h4>
            <p>{ericaBio}</p>
            <p>{ericaBio2}</p>
          </div>
        </div>
        <Image className="about-us-image" src={us} width={0} height={0} alt='Profile Image' />
      </div>
      <Footer />
    </div>
  )
}

export default aboutus;