import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="section-title">CONTACT US</div>
        <div className="underline" />
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, eros ut ullamcorper ultricies, tortor lectus placerat odio.
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-row">
              <div className="mobile-info">
                <p>
                  <strong>Mobile Number</strong>
                </p>
                <p>+135 773 321 4442</p>
              </div>
              <div className="email-info">
                <p>
                  <strong>Email Address</strong>
                </p>
                <p>demo@demo.com</p>
              </div>
            </div>
            <h2>Make an Appointment</h2>
            <form className="appointment-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" defaultValue={""} />
            </form>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107923.4233130216!2d34.52901491953401!3d36.8009718478572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1520f8a0ca490c75%3A0x4030da0bbf234e0!2sMersin%2C%20Turkey!5e0!3m2!1sen!2sus!4v1606544587411!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
