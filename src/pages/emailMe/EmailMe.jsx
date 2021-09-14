import React from "react";
import "./emailMe.css";
import emailjs from "emailjs-com";

export default function EmailMe() {
  function sendEmail(e) {
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
    <div className="emailMe">
      <div className="emailContainer">
        <form onSubmit={sendEmail}>
          <div className="nameDiv">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="nameInp"
            ></input>
          </div>
          <div className="row pt-5 pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              name="email"
            ></input>
          </div>
          <div className="row pt-5 pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            ></input>
          </div>
          <div className="row pt-5 pt-2 mx-auto">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="row pt-5 pt-2 mx-auto">
            <input
              type="submit"
              className="mssgBtn"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
