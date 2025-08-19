import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Menu.css";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    { id: 1, name: "Veg Momos", price: "₹80", image: "/images/veg_momo.jpg" },
    { id: 2, name: "Chicken Momos", price: "₹120", image: "/images/chicken-momo.jpg" },
    { id: 3, name: "Steam Momos", price: "₹90", image: "/images/Steam_momo.jpg" },
    { id: 4, name: "Tandoori Momos", price: "₹150", image: "/images/veg_momo.jpg" }
  ];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>Our Menu</h2>
        <p>Delicious handmade momos, served fresh just for you 🍴</p>
      </div>

      {/* Grid with animations */}
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <motion.div
            className="menu-card"
            key={item.id}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="img-container">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-content">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal with animation */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
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

              <button
                className="close-btn"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
