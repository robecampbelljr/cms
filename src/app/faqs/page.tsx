'use client'
import Header from '../components/Header';
// import faqbanner from '../images/faqbanner.png';
import image from '../images/piano-banner.png';
import AccordianFaq from '../components/AccordianFaq';
import { faqs } from '../component-content/faq-info';
import Footer from '../components/Footer';

const Faqs = () => {

  return (
    <div className="app">
      <Header image={image} />
      <h1 className="cursive flex-center"><u>FAQs</u></h1>
      {faqs.map((faq, index) => {

        return (
          <AccordianFaq key={`accordian-${index}`} id={faq.id} question={faq.q} answer={faq.a} />
        )
      })}
      <Footer />
    </div>
  )
}

export default Faqs;