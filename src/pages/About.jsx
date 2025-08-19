import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src="/images/about-chef.jpg" alt="Our Chef" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>MomoHub</strong> – the ultimate destination for
            delicious, mouth-watering momos. We started our journey with a
            simple dream: to bring authentic taste of Himalayan momos to every
            foodie in the city.
          </p>
          <p>
            From classic steamed momos to our signature tandoori momos, each
            bite is made with love and the freshest ingredients. Our mission is
            simple – <em>Good Food, Good Mood!</em>
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>👨‍🍳 Expert Chefs</h3>
              <p>Trained professionals with passion for momos.</p>
            </div>
            <div className="highlight-card">
              <h3>🥟 20+ Varieties</h3>
              <p>Explore unique flavors from veg to chicken delights.</p>
            </div>
            <div className="highlight-card">
              <h3>🚀 Fast Delivery</h3>
              <p>Hot and fresh momos delivered to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
