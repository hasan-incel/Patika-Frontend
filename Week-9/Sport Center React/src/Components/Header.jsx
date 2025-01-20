import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import heroImage from "../assets/Pictures/hero-man.jpg";

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Trigger default behavior for the class buttons
    const defaultButton = document.getElementById("yoga-btn");
    defaultButton.classList.add("active");
    defaultButton.click();
  }, []);

  return (
    <>
      <header id="navbar" className={`navbar ${menuActive ? "scrolled" : ""}`}>
        <nav className="nav-container">
          <div className="nav-items">
            <div className="logo">
              <img src="src\assets\Pictures\logo.png" alt="logo" />
            </div>
            <div className={`nav-links ${menuActive ? "active" : ""}`}>
              <a href="#hero">Home</a>
              <a href="#class">Classes</a>
              <a href="#trainers">Trainers</a>
              <a href="#review">Review</a>
              <a href="#contact">Contact</a>
              <a href="#" className="join-us-btn">
                Join Us
              </a>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
              <div className="hamburger-bar"></div>
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="powerfull-text">POWERFULL</span> <br />
            Group <br />
            Practice <br />
            With Trainer
          </h1>
          <p className="hero-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, nesciunt eum laboriosam inventore facilis illo
            veritatis, sunt iusto, molestiae maiores voluptas cumque tempore eos
            necessitatibus quaerat quia cupiditate? Odit, rem.
          </p>
          <div className="button-container">
            <a href="#" className="sign-up-btn">
              Sign Up
            </a>
            <a href="#" className="details-btn">
              Details
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
