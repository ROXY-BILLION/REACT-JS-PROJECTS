function Footer() {
  return (
    <footer
      className="footer"
      id="about"
    >

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">

            <a
              href="#home"
              className="navbar-brand"
            >
              <span className="brand-mark">
                P
              </span>

              <span className="brand-name">
                ProductBox
              </span>
            </a>

            <p>
              Better technology for better work,
              creativity, and everyday life.
            </p>

            <div className="social-links">

              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

            </div>

          </div>

          <div className="footer-column">

            <h3>Products</h3>

            <a href="#products">Laptops</a>
            <a href="#products">Smartphones</a>
            <a href="#products">Monitors</a>
            <a href="#products">Accessories</a>

          </div>

          <div className="footer-column">

            <h3>Company</h3>

            <a href="#about">About</a>
            <a href="#about">Contact</a>
            <a href="#about">Support</a>
            <a href="#about">FAQ</a>

          </div>

          <div className="footer-column">

            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Collection</a>
            <a href="#products">Featured</a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 ProductBox. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;