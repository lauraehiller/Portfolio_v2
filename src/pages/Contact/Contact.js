import React from 'react';
import './Contact.scss';

function Contact() {
    return (
      <section id="contact-section" >
          <h2>Contact</h2>
          <div className="container">
            <div className="social-media">
            <h5>Find Me On Social Media</h5>
                <p>Send a message and say hi👋</p>
                <div className="social-links-container">
                    <a href="https://www.linkedin.com/in/laura-e-hiller/"><i  className="fa-brands fa-linkedin-in" /></a>
                    <a href="https://github.com/lauraehiller"><i  className="fa-brands fa-github" /></a>
                    <a href="https://codepen.io/eofnums"><i className="fa-brands fa-codepen" /></a>
                </div>

            </div>
            <div className="email">
                <h5>Or Send Me An Email</h5>
                <button><a className="contact-form" href="mailto:Hillerelaura@gmail.com" subject="Personal Site Contact form entry">Contact Me</a></button>
            </div>
        </div>

      </section>
    )
  };
  
  export default Contact;