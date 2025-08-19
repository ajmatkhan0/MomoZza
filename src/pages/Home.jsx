import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MOMOZZA</h1>
          <p>The Home of Delicious Momos 😋</p>
          <a href="/menu" className="btn">Explore Menu</a>
        </div>
      </section>

      <section className="featured">
        <h2>Our Specials</h2>
        <div className="featured-grid">
          <div className="card">
            <img src="/images/veg_momo.jpg" alt="Veg Momos" />
            <h3>Veg Momos</h3>
          </div>
          <div className="card">
            <img src="/images/chicken-momo.jpg" alt="Chicken Momos" />
            <h3>Chicken Momos</h3>
          </div>
          <div className="card">
            <img src="/images/tandoori-momo.jpg" alt="Tandoori Momos" />
            <h3>Tandoori Momos</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
