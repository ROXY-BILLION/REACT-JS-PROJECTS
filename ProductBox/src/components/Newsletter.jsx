function Newsletter() {
  return (
    <section className="newsletter-section">

      <div className="container">

        <div className="newsletter">

          <div className="newsletter-content">

            <span className="section-label light">
              STAY IN THE LOOP
            </span>

            <h2>
              Better technology.
              <br />
              Delivered occasionally.
            </h2>

            <p>
              Get new product updates, useful
              technology picks, and fresh arrivals.
            </p>

          </div>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="button">
              Subscribe
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;