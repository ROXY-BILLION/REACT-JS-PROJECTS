import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar-content">

                <a href="#" className="logo">
                    Movie<span>Vault</span>
                </a>

                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>

                    <a href="#featured" onClick={() => setMenuOpen(false)}>
                        Featured
                    </a>

                    <a href="#genres" onClick={() => setMenuOpen(false)}>
                        Genres
                    </a>

                    <a href="#movies" onClick={() => setMenuOpen(false)}>
                        Movies
                    </a>

                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </nav>

                <div className="navbar-actions">
                    <button className="search-button">
                        <FiSearch />
                    </button>

                    <button
                        className="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;