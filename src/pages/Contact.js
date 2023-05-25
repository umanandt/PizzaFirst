import React from "react";
import Pizzaleft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Pizzaleft} )` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="post">
          <label htmlFor="name">full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">email</label>
          <input name="email" placeholder="Enter email here..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
