import React from "react";
import "../styles/Review.css";

function Review() {
  return (
    <>
      <section id="review" className="review-section">
        <div className="section-title">REVIEW CLIENT</div>
        <div className="underline" />
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, eros ut ullamcorper ultricies, tortor lectus placerat odio.
        </p>
        <div className="reviews-container">
          <div className="review-box">
            <div className="review-image">
              <img src="src\assets\Pictures\client1.jpg" alt="Portrait 1" />
            </div>
            <div className="review-details">
              <div className="review-name">Diet Expert</div>
              <div className="review-title">CFO</div>
            </div>
            <p className="review-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ab voluptatem assumenda tempore, exercitationem minima
              error est voluptas temporibus possimus neque. Ullam dignissimos
              itaque iste, quisquam ea quidem illum quaerat.
            </p>
          </div>
          <div className="review-box">
            <div className="review-image">
              <img src="src\assets\Pictures\client2.jpg" alt="Portrait 2" />
            </div>
            <div className="review-details">
              <div className="review-name">Diet Expert</div>
              <div className="review-title">CEO</div>
            </div>
            <p className="review-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ab voluptatem assumenda tempore, exercitationem minima
              error est voluptas temporibus possimus neque. Ullam dignissimos
              itaque iste, quisquam ea quidem illum quaerat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
