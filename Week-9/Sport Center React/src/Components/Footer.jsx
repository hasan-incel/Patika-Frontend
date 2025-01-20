import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          {/* Logo and Lorem Text */}
          <div className="footer-top">
            <div className="footer-logo">
              <img src="src\assets\Pictures\logo.png" alt="Logo" />
            </div>
            <p className="footer-lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              neque! Expedita in a distinctio suscipit quos inventore. Odit,
              maxime? Voluptatem molestiae dolores aut dolorum, magni enim
              minima. Quisquam, beatae repudiandae.
            </p>
          </div>

          {/* Information and Helpful Links sections */}
          <div className="footer-links">
            {/* Information Section */}
            <div className="footer-column">
              <h3 className="footer-title">Information</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Classes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Helpful Links Section */}
            <div className="footer-column">
              <h3 className="footer-title">Helpful Links</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Supports</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
