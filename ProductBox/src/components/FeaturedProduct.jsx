function FeaturedProduct() {
  return (
    <section className="featured-section">

      <div className="container">

        <div className="featured-card">

          <div className="featured-image">

            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85"
              alt="ThinkPad laptop"
            />

            <span className="featured-number">
              01
            </span>

          </div>

          <div className="featured-content">

            <span className="section-label light">
              FEATURED PRODUCT
            </span>

            <h2>
              Built for people
              <br />
              who build things.
            </h2>

            <p>
              Powerful enough for demanding work,
              lightweight enough to take anywhere.
              Meet a laptop designed around your
              workflow.
            </p>

            <div className="featured-info">

              <div>
                <span>DEVICE</span>
                <strong>ThinkPad X1 Carbon</strong>
              </div>

              <div>
                <span>DISPLAY</span>
                <strong>14" 2.8K OLED</strong>
              </div>

              <div>
                <span>PRICE</span>
                <strong>₦980,000</strong>
              </div>

            </div>

            <a
              href="#products"
              className="light-button"
            >
              View product
              <i className="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProduct;