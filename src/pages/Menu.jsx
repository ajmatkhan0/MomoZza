import React, { useState } from "react";
import "./Menu.css";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    { id: 1, name: "Veg Momos", price: "₹80", image: "/images/veg_momo.jpg" },
    { id: 2, name: "Chicken Momos", price: "₹120", image: "/images/chicken-momo.jpg" },
    { id: 3, name: "Steam Momos", price: "₹90", image: "/images/steam_momo.jpg" },
    { id: 4, name: "Tandoori Momos", price: "₹150", image: "/images/tandoori_momo.jpg" }
  ];

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <p className="menu-subtitle">Choose your favorite momos & order instantly!</p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div
            className="menu-card"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.price}</p>
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Order on Zomato
            </a>
            <a
              href="https://www.swiggy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Order on Swiggy
            </a>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
