import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

function Gallery() {
  const images = [
    { src: "images/veg_momo.jpg", title: "Veg Momos" },
    { src: "images/chicken-momo.jpg", title: "Chicken Momos" },
    { src: "images/Steam_momo.jpg", title: "Steam Momos" },
    { src: "images/Steam_momo.jpg", title: "Tandoori Momos" },
    { src: "images/Steam_momo.jpg", title: "Fried Momos" },
    { src: "images/Steam_momo.jpg", title: "Schezwan Momos" },
  ];

  return (
    <section className="gallery-section">
      {/* Title Animation */}
      <motion.h2
        className="gallery-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our <span>Gallery</span>
      </motion.h2>

      <motion.p
        className="sub-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A glimpse of our delicious specials 🍴
      </motion.p>

      {/* Grid Animation */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h3>{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
