import React from 'react';
import './style.css';

const ContactSection = () => {
  return (
    <div className="Contact" id="contact">
      <h3 className="ContactHeading">Contact</h3>
      <hr className="divider" />
      <p>Let's get in touch and talk about your next project.</p>
      <form> 
        <input className="FormName" type="text" placeholder="Name" required />
        <input className="FormEmail" type="email" placeholder="Email" required />
        <input className="FormSubject" type="text" placeholder="Subject" required />
        <input className="FormComment" type="text" placeholder="Comment" required />
        <button className="FormSubmit" type="submit">
           SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
