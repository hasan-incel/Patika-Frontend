import React, { useState, useEffect } from "react";
import "../styles/BMI.css";

function BMI() {
  const [bmi, setBmi] = useState(null);
  const [trianglePosition, setTrianglePosition] = useState(0);

  const calculateBMI = () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (height && weight) {
      const calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
      setBmi(calculatedBmi);

      const maxTrianglePosition =
        document.querySelector(".bmi-image").offsetWidth -
        document.querySelector(".triangle").offsetWidth;
      const position = Math.min(
        (calculatedBmi / 55) * maxTrianglePosition,
        maxTrianglePosition
      );
      setTrianglePosition(position);
    }
  };

  useEffect(() => {
    document.getElementById("height").addEventListener("input", calculateBMI);
    document.getElementById("weight").addEventListener("input", calculateBMI);

    return () => {
      document
        .getElementById("height")
        .removeEventListener("input", calculateBMI);
      document
        .getElementById("weight")
        .removeEventListener("input", calculateBMI);
    };
  }, []);

  return (
    <>
      <section className="bmi-section">
        <div className="left-side">
          <h1 className="title">BMI Calculator</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
            asperiores obcaecati nisi aperiam earum, impedit dicta beatae minus
            at sunt! Totam, delectus voluptas? Ut voluptates fugiat accusamus!
            Aut, debitis.
          </p>
          <input type="number" id="height" placeholder="Your Height" />
          <input type="number" id="weight" placeholder="Your Weight" />
        </div>
        <div className="right-side">
          <h2 className="bmi-text">Your BMI: {bmi}</h2>
          <div className="bmi-chart-container">
            <img
              src="src\assets\Pictures\bmi-index.jpg"
              alt="BMI Chart"
              className="bmi-image"
            />
            <div
              className="triangle"
              style={{ left: `${trianglePosition}px` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BMI;
