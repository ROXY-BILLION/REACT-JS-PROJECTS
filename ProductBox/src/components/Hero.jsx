function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">

        <div className="hero-content">

          <div className="eyebrow">
            <span></span>
            MODERN TECHNOLOGY
          </div>

          <h1>
            Technology
            <br />
            <span>worth using.</span>
          </h1>

          <p>
            Discover carefully selected devices and
            accessories designed for modern work,
            creativity, and everyday life.
          </p>

          <div className="hero-actions">

            <a
              href="#products"
              className="primary-button"
            >
              Explore products
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href="#categories"
              className="secondary-button"
            >
              Browse categories
            </a>

          </div>

          <div className="hero-note">
            <i className="fa-solid fa-circle-check"></i>
            Curated technology for everyday use
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
              alt="Modern laptop"
            />
          </div>

          <div className="hero-product-card">

            <div>
              <span>FEATURED DEVICE</span>

              <strong>
                MacBook Air
              </strong>
            </div>

            <div className="hero-product-arrow">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>

          </div>

          <div className="hero-badge">
            <span>01</span>
            <small>NEW<br />COLLECTION</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;