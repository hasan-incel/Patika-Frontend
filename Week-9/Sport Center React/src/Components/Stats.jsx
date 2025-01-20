import React from "react";
import "../styles/Stats.css";

function Stats() {
  return (
    <>
      <section className="stats-section">
        <div className="container">
          <div className="stats-box">
            <h2 className="stats-number">325</h2>
            <p className="stats-text">Course</p>
          </div>
          <div className="stats-box">
            <h2 className="stats-number">405</h2>
            <p className="stats-text">Workout</p>
          </div>
          <div className="stats-box">
            <h2 className="stats-number">305</h2>
            <p className="stats-text">Working Hour</p>
          </div>
          <div className="stats-box">
            <h2 className="stats-number">705</h2>
            <p className="stats-text">Happy Client</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
