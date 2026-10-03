import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">P</span>

          <span className="brand-name">
            ProductBox
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </nav>

        <div className="navbar-actions">

          <button
            className="nav-action"
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button
            className="nav-action"
            aria-label="Shopping bag"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </button>

          <button
            className={`menu-toggle ${
              menuOpen ? "menu-active" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <i
              className={
                menuOpen
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }
            ></i>
          </button>

        </div>
      </div>

      <div
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >
        <div className="container mobile-nav-inner">

          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="#products" onClick={closeMenu}>
            <span>02</span>
            Products
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="#categories" onClick={closeMenu}>
            <span>03</span>
            Categories
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>04</span>
            About
            <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>
      </div>
    </header>
  );
}

export default Navbar;