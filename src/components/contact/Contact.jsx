import { useState } from 'react';
import './contact.scss'
import emailjs from 'emailjs-com';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)

    e.preventDefault();

    emailjs
      .sendForm(
        "service_mq5cq8q",
        "template_kow8hvm",
        e.target,
        "user_R8P8gr2ZOaLg8WlXsStdv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assets/contactImg.jpg" alt="" />
      </div>
    <div className="right">
      <h2>Contact Me</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" placeholder="Your Email" name="email"/>
        <textarea placeholder="Type your message here..." name="message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thanks for the message, I'll reply ASAP :)</span>}
      </form>
    </div>
    </div>
  )
}
