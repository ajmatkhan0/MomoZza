import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1s speed + ek baar hi chalega
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-in">
        <div className="hero-content">
          <h1>Welcome to <span>MOMOZZA</span></h1>
          <p>The Home of Delicious Momos 😋</p>
          <a href="/menu" className="btn">Explore Menu</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature" data-aos="fade-up">
          <img src="/images/ingridients.webp" alt="Fresh Ingredients" />
          <h3>Fresh Ingredients</h3>
          <p>We use only farm-fresh and high-quality ingredients.</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="200">
          <img src="/images/deli.webp" alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
          <p>Hot momos delivered to your doorstep in minutes.</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="400">
          <img src="/images/momoooo1.webp" alt="Tasty Recipes" />
          <h3>Tasty Recipes</h3>
          <p>Experience unique momo flavors crafted by our chefs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about" data-aos="fade-right">
        <div className="about-image">
          <img src="/images/chicken-momo.jpg" alt="About Momozza" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>About Momozza</h2>
          <p>
            At Momozza, we believe food should not only fill your stomach
            but also your heart...
          </p>
          <a href="/about" className="btn">Know More</a>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2 data-aos="zoom-in">Our Special Dishes</h2>
        <div className="specials-grid">
          <div className="card" data-aos="flip-left">
            <img src="/images/veg_momo.jpg" alt="Veg Momos" />
            <h3>Veg Momos</h3>
          </div>
          <div className="card" data-aos="flip-left" data-aos-delay="200">
            <img src="/images/chicken-momo.jpg" alt="Chicken Momos" />
            <h3>Chicken Momos</h3>
          </div>
          <div className="card" data-aos="flip-left" data-aos-delay="400">
            <img src="/images/chicken-momo.jpg" alt="Tandoori Momos" />
            <h3>Tandoori Momos</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" data-aos="zoom-in-up">
        <h2>Ready to taste the best Momos?</h2>
        <a href="/menu" className="btn btn-bounce">Order Now</a>
      </section>
    </div>
  );
}

export default Home;
