import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <HelmetProvider>
    <section className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact <span>Us</span>
      </motion.h2>
      <p className="sub-text">
        We’d love to hear from you! Reach out for orders, feedback, or queries.
      </p>

      <div className="contact-container">
        {/* Left Side - Contact Info & Map */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>📍 Our Location</h3>
          <p>MomoHub Restaurant, Andheri West, Mumbai</p>

          <h3>📞 Call Us</h3>
          <p>+91 98765 43210</p>

          <h3>📧 Email</h3>
          <p>info@momohub.com</p>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.542463634991!2d72.83322851534317!3d19.11967715592188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99de2fdfc39%3A0x7a0dff7f0b6e14a5!2sAndheri%20West!5e0!3m2!1sen!2sin!4v1692799999999!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>📝 Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message 🚀</button>
          </form>
        </motion.div>
      </div>
    </section>
      </HelmetProvider>
  );

}

export default Contact;
