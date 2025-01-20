import React from "react";
import "../styles/Purchase.css";

function Purchase() {
  return (
    <>
      <section className="purchase-section">
        <div className="section-title">PURCHASE FROM US</div>
        <div className="underline" />
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, eros ut ullamcorper ultricies, tortor lectus placerat odio.
        </p>
        <div className="cart-items">
          <div className="cart-item">
            <img
              src="src\assets\Pictures\purchase1.jpg"
              alt="Kettlebell 5kg"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">Kettlebell / 5kg</h3>
              <p className="cart-item-price">
                <span className="old-price">$89.99</span>
                <span className="new-price">$59.99</span>
              </p>
              <button className="add-to-cart-btn">
                <img
                  src="src/assets/Pictures/cart-shopping-solid.svg"
                  alt="Cart Icon"
                  className="cart-icon"
                />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="src\assets\Pictures\purchase2.jpg"
              alt="Dumbbell Set"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">Treadmill</h3>
              <p className="cart-item-price">
                <span className="old-price">$899.99</span>
                <span className="new-price">$599.99</span>
              </p>
              <button className="add-to-cart-btn">
                <img
                  src="src/assets/Pictures/cart-shopping-solid.svg"
                  alt="Cart Icon"
                  className="cart-icon"
                />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="src\assets\Pictures\purchase3.jpg"
              alt="Yoga Mat"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">Adjustable Dumbbell</h3>
              <p className="cart-item-price">
                <span className="old-price">$89.99</span>
                <span className="new-price">$59.99</span>
              </p>
              <button className="add-to-cart-btn">
                <img
                  src="src/assets/Pictures/cart-shopping-solid.svg"
                  alt="Cart Icon"
                  className="cart-icon"
                />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="src\assets\Pictures\purchase4.jpg"
              alt="Treadmill"
              className="cart-item-img"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">Kettlebell</h3>
              <p className="cart-item-price">
                <span className="old-price">$89.99</span>
                <span className="new-price">$59.99</span>
              </p>
              <button className="add-to-cart-btn">
                <img
                  src="src/assets/Pictures/cart-shopping-solid.svg"
                  alt="Cart Icon"
                  className="cart-icon"
                />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
