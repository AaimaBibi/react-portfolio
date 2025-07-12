import React from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Hire Me</h2>
        <form className="contact-form" action="https://formsubmit.co/aaimazaheer810@gmail.com" method="POST"  encType="text/plain">
          <input type="text" name= "name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};


export default ContactModal;
