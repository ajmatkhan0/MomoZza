import React from "react";
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
    <div className="gallery-page">
      <h2>Our Gallery</h2>
      <p className="sub-text">A glimpse of our delicious specials 🍴</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
