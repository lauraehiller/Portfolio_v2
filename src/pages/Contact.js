import React from 'react';
import './Contact.scss';

function Contact() {
    return (
      <section className="contact-section">
          <h2>Contact</h2>

          <div className="container">
            <div className="item1">
            <h5>Find Me On Social Media</h5>
                <p>Send a message and say hi👋</p>
                <div className="social-container">
                    <i href="" className="fa-brands fa-linkedin-in"></i>
                    <i href="" className="fa-brands fa-github"></i>
                    <i href="" className="fa-brands fa-codepen"></i>
                </div>

            </div>
            <div className="item2">
                <h5>Or Send Me An Email</h5>
                <button><a className="contact-form" href="mailto:Hillerelaura@gmail.com" subject="Personal Site Contact form entry">Contact Me</a></button>
            </div>
        </div>

      </section>
    )
  };
  
  export default Contact;