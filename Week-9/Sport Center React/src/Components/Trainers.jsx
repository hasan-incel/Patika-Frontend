import React from "react";
import "../styles/Trainers.css";

function Trainers() {
  return (
    <>
      <section id="trainers" className="trainers-section">
        <div className="section-title">OUR TRAINERS</div>
        <div className="underline"></div>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque, erat id dictum feugiat, lectus felis sollicitudin libero.
        </p>
        <div className="trainers-boxes">
          <div className="trainer-box">
            <img
              src="src\assets\Pictures\trainer1.jpg"
              alt="Trainer 1"
              className="trainer-img"
            />
            <h3>John Doe</h3>
            <p>Yoga Expert</p>
          </div>
          <div className="trainer-box">
            <img
              src="src\assets\Pictures\trainer2.jpg"
              alt="Trainer 2"
              className="trainer-img"
            />
            <h3>Jane Smith</h3>
            <p>Fitness Specialist</p>
          </div>
          <div className="trainer-box">
            <img
              src="src\assets\Pictures\trainer3.jpg"
              alt="Trainer 3"
              className="trainer-img"
            />
            <h3>Michael Brown</h3>
            <p>Group Exercise Coach</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
