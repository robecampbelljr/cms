import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../images/lessonbanner.png';
import Image from 'next/image';
import robert_profile from '../images/robert_profile.jpeg';
import erica_profile from '../images/erica_profile.jpg';
import { robertBio, robertBio2, ericaBio, ericaBio2, ericaBio3 , heading, heading2, heading3} from '../component-content/aboutus-info';
import styles from './aboutUs.module.css';

const aboutus = () => {

  return (
    <div className="app">
      <Header image={banner}/>
      <h1 className="lesson-header cursive flex-center"><u>Our Teaching Philosophy</u></h1>
      <section className={styles.philosophy}>
        <p>{heading}</p>
        <p>{heading2}</p>
        <p>{heading3}</p>
      </section>
      <h1 className="lesson-header cursive flex-center"><u>About Us</u></h1>
      <div className={styles.aboutUs}>
        <div className={styles.bios}>
          <div className={styles.bio}>
            <h3 id="robert" className="cursive">Robert Campbell Jr</h3>
            <h6><i>Lesson availability: in-studio and in-home</i></h6>
            <h4>Beginner/Intermediate Piano, Saxophone, Voice</h4>
            <p>{robertBio}</p>
            <p>{robertBio2}</p>
          </div>
          <Image className={styles.aboutUsImage} src={robert_profile} width={0} height={0} alt='Profile Image' />
        </div>
        <div className={styles.bios}>
          <Image className={styles.aboutUsImage} src={erica_profile} width={0} height={0} alt='Profile Image' />
          <div className={styles.bio}>
            <h3 id="erica" className="cursive">Erica Campbell</h3>
            <h6><i>Lesson availability: in-studio only</i></h6>
            <h4>Intermediate/Advanced Piano</h4>
            <p>{ericaBio}</p>
            <p>{ericaBio2}</p>
            <p>{ericaBio3}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default aboutus;