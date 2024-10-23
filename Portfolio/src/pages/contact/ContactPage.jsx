import React, { useRef, useState } from 'react';
import Footer from '../../components/footer/Footer';
import ContentPageHeader from '../../components/contentPageHeader/ContentPageHeader';
import '../contact/contact.css';
import emailjs from 'emailjs-com';

function ContactPage() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
        setError('An error occurred while sending the message. Please try again later.');
      });
  };

  return (
    <div>
      <ContentPageHeader />
      <section className='contact-container glassEffectDark'>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name:
            <input type="text" name="user_name" required />
          </label>
          <label>
            Email:
            <input type="email" name="user_email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
        {messageSent && <p>Message sent successfully!</p>}
        {error && <p>{error}</p>}
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;

