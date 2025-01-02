import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../images/lessonbanner.png';
import Image from 'next/image';
import us from '../images/us.jpeg';
import { robertBio, robertBio2, ericaBio } from '../component-content/aboutus-info';
import styles from './aboutUs.module.css';

const aboutus = () => {

  return (
    <div className="app">
      <Header image={banner}/>
      <h1 className="lesson-header cursive flex-center"><u>Our Teaching Philosophy</u></h1>
      <section className={styles.philosophy}>
        <p>We believe in the power of music to change the course of lives. Having both been introduced to musical studies at a young age, we have personally experienced the  tremendous positive effects that music had on our personal development and continues to have in our lives. We have seen this with our own children and our students, and there are few things more exciting than witnessing young people discover a deep love for and understanding of music.</p>
        <p>We believe that every person has musical ability, no matter their age, and that our job as teachers is to help students recognize and expand their innate capabilities and strengths. We believe that a strong foundation in music theory is essential for continued growth in musical skill and appreciation. Like learning to read words in books, learning to read musical notation on the printed page opens up a world of possibilities. We also strive to develop our students’ ears, and to hone their sensitivity to the nuance of musical pitch, tempo, rhythm, and style.</p>
        <p>We also emphasize the importance of being able to perform in front of an audience. Not only does this allow students to share their musical talent and the pieces they personally love, but it also develops confidence and poise that translates into other areas of life. </p>
      </section>
      <h1 className="lesson-header cursive flex-center"><u>About Us</u></h1>
      <div className="about-us">
        <div className="bios">
          <div className="bio">
            <h3 id="robert" className="cursive">Robert Campbell Jr</h3>
            <h6><i>Lesson availability in-studio and in-home</i></h6>
            <h4>Beginner Piano, Saxophone, Voice</h4>
            <p>{robertBio}</p>
            <p>{robertBio2}</p>
          </div>
          <div className="bio">
            <h3 id="erica" className="cursive">Erica Campbell</h3>
            <h6><i>Lesson availability in-studio only</i></h6>
            <h4>Intermediate and Advanced Piano</h4>
            <p>{ericaBio}</p>
          </div>
        </div>
        <Image className="about-us-image" src={us} width={0} height={0} alt='Profile Image' />
      </div>
      <Footer />
    </div>
  )
}

export default aboutus;