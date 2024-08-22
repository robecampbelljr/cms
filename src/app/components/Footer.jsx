import fblogo from '../images/fblogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  return (
    <>
    <footer>
        <section className="address">
          <h3>Contact us:</h3>
          <h4>Campbell Music Studio, LLC</h4>
          Email: campbellfamilymusic@gmail.com<br></br>
          Phone: +208-922-7289<br></br>
          Location: Kuna, ID
        </section>
        <section className="faq-section">
          <Link href="/faqs" passHref legacyBehavior><h3 className="pointer">FAQs:</h3></Link>
          <Link href="/faqs#rates" passHref legacyBehavior>What are your rates?</Link><br></br>
          <Link href="/faqs#location" passHref legacyBehavior>Where are you located?</Link><br></br>
          <Link href="/faqs#trial" passHref legacyBehavior>Do you offer a trial lesson?</Link><br></br>
          <Link href="/faqs#home" passHref legacyBehavior>Do you offer in-home lessons?</Link><br></br>
        </section>
        <section className="social-media">
          <h3>Social Media:</h3>
          <section className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61559599032155" target="_blank"><Image src={fblogo} height={50} width={50} alt="Facebook Logo"></Image></a>
          </section>
        </section>
      </footer>
      <section className="copyrite">&copy; Campbell Music Studio, LLC</section>
    </>
  )
}
export default Footer;