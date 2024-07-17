'use client'
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from '../images/lessonbanner.png';
import axios from "axios";

const contact = () => {

  let sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.body.style.cursor = 'progress';
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    try {
      const response = await axios.post('/storeMessage', {
          name: name,
          email: email,
          phone: phone,
          message: message,
      });
      console.log('Notification sent successfully');
      console.log('Response:', response.data);
      document.body.style.cursor = 'default';
      window.location.href = '/ThankYou';
    } catch (error) {
        console.error('Error sending notification:', error);
    }
  };

  return (
    <div className="app">
      <Header image={banner}/>
      <h1 className="lesson-header cursive flex-center"><u>Contact</u></h1>
      <div className="form-container">
        <form onSubmit={sendMessage}>
          <h3>*Name:</h3>
          <input name="name" type="text" required></input>
          <h3>*E-Mail:</h3>
          <input name="email" type="email" required></input>
          <h3>Phone Number:</h3>
          <input name="phone" type="tel"></input>
          <h3>*Message:</h3>
          <textarea name="message" required></textarea>
          <button type="submit">Submit</button>
          <h3 style={{marginTop: '20px'}}>* = Required fields</h3>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default contact;