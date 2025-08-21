import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async"; 
import "./About.css";

function About() {
  return (
    <HelmetProvider>
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/chef.jpeg" alt="Our Chef" />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">About <span>Us</span></h2>
          <p>
            Welcome to <strong>MomoHub</strong> – the ultimate destination for
            delicious, mouth-watering momos. We started our journey with a
            simple dream: to bring authentic Himalayan flavors to every foodie
            in the city.
          </p>
          <p>
            From classic steamed momos to our signature tandoori delights, each
            bite is made with love and the freshest ingredients. Our mission is
            simple – <em>Good Food, Good Mood!</em>
          </p>

          <div className="about-highlights">
            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>👨‍🍳 Expert Chefs</h3>
              <p>Trained professionals with a passion for momos.</p>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>🥟 20+ Varieties</h3>
              <p>Explore unique flavors from veg to chicken delights.</p>
            </motion.div>

            <motion.div
              className="highlight-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>🚀 Fast Delivery</h3>
              <p>Hot and fresh momos delivered to your doorstep.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </HelmetProvider>
  );
}

export default About;
