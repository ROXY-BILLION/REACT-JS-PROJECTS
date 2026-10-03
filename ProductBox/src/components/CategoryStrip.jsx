function CategoryStrip() {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="section-heading">

          <div>
            <span className="section-label">
              CATEGORIES
            </span>

            <h2>
              Find what fits
              <br />
              your workflow.
            </h2>
          </div>

          <p>
            Explore technology selected for
            different ways of working and creating.
          </p>

        </div>

        <div className="category-grid">

          <a href="#products" className="category-card">
            <div className="category-icon">
              <i className="fa-solid fa-laptop"></i>
            </div>

            <div>
              <span>01</span>
              <h3>Laptops</h3>
              <p>Portable performance</p>
            </div>

            <i className="fa-solid fa-arrow-up-right-from-square category-arrow"></i>
          </a>

          <a href="#products" className="category-card">
            <div className="category-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>

            <div>
              <span>02</span>
              <h3>Smartphones</h3>
              <p>Power in your pocket</p>
            </div>

            <i className="fa-solid fa-arrow-up-right-from-square category-arrow"></i>
          </a>

          <a href="#products" className="category-card">
            <div className="category-icon">
              <i className="fa-solid fa-display"></i>
            </div>

            <div>
              <span>03</span>
              <h3>Monitors</h3>
              <p>See more clearly</p>
            </div>

            <i className="fa-solid fa-arrow-up-right-from-square category-arrow"></i>
          </a>

          <a href="#products" className="category-card">
            <div className="category-icon">
              <i className="fa-solid fa-headphones"></i>
            </div>

            <div>
              <span>04</span>
              <h3>Accessories</h3>
              <p>Complete your setup</p>
            </div>

            <i className="fa-solid fa-arrow-up-right-from-square category-arrow"></i>
          </a>

        </div>

      </div>

    </section>
  );
}

export default CategoryStrip;