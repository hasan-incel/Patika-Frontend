import React, { useState, useEffect } from "react";
import "../styles/Classes.css";

function Classes() {
  const [activeClass, setActiveClass] = useState("yoga");
  const [image, setImage] = useState("src/assets/Pictures/yoga.jpg");

  const classImage = {
    yoga: "src/assets/Pictures/yoga.jpg",
    group: "src/assets/Pictures/group.webp",
    solo: "src/assets/Pictures/solo.jpg",
    stretching: "src/assets/Pictures/stret.webp",
  };

  const handleClassClick = (className) => {
    setActiveClass(className);
    setImage(classImage[className]);
    document
      .querySelectorAll(".class-box")
      .forEach((button) => button.classList.remove("active"));
    document.getElementById(`${className}-btn`).classList.add("active");

    // Hide all class-text sections
    document.querySelectorAll(".class-text").forEach((textSection) => {
      textSection.style.display = "none";
    });

    // Show the text section corresponding to the clicked button
    document.querySelector(`.${className}-text`).style.display = "block";
  };

  useEffect(() => {
    const defaultButton = document.getElementById("yoga-btn");
    defaultButton.classList.add("active");
    defaultButton.click();
  }, []);

  return (
    <>
      <section id="class" className="classes-section">
        <div className="section-title">OUR CLASSES</div>
        <div className="underline"></div>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, eros ut ullamcorper ultricies, tortor lectus placerat odio.
        </p>
        <div className="classes-boxes">
          <div
            className="class-box"
            onClick={() => handleClassClick("yoga")}
            id="yoga-btn"
          >
            Yoga
          </div>
          <div
            className="class-box"
            onClick={() => handleClassClick("group")}
            id="group-btn"
          >
            Group
          </div>
          <div
            className="class-box"
            onClick={() => handleClassClick("solo")}
            id="solo-btn"
          >
            Solo
          </div>
          <div
            className="class-box"
            onClick={() => handleClassClick("stretching")}
            id="stretching-btn"
          >
            Stretching
          </div>
        </div>
        <div id="class-image" className="class-image">
          <img
            src={image}
            alt={`${activeClass} image`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </section>
    </>
  );
}

export default Classes;
