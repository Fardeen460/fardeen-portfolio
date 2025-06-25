import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you’d like to get in touch, feel free to reach out through any of the platforms below.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:fardeenmansoori998@gmail.com">fardeenmansoori998@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-9355642786</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fardeenmansoori" target="_blank" rel="noreferrer">linkedin.com/in/fardeenmansoori</a></p>
        <p><strong>Resume:</strong> <a href="/Fardeen_Mansoori_Resume.pdf" download>Download Resume</a></p>
      </div>
    </section>
  );
}

export default Contact;
