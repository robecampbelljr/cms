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
            <h3 id="robert" className="cursive">Robert</h3>
            <h6><i>Available in-studio and in-home</i></h6>
            <h4>Beginner Piano, Saxophone, Voice</h4>
            <p>{robertBio}</p>
            <p>{robertBio2}</p>
          </div>
          <div className="bio">
            <h3 id="erica" className="cursive">Erica</h3>
            <h6><i>Available in-studio only</i></h6>
            <h4>Intermediate and Advanced Piano</h4>
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