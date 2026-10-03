import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiYoutube
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    <div className="footer-brand">
                        <a href="#" className="logo">
                            Movie<span>Vault</span>
                        </a>

                        <p>
                            Your destination for discovering movies,
                            exploring genres and finding your next
                            favourite story.
                        </p>
                    </div>

                    <div className="footer-links">

                        <div>
                            <h3>Explore</h3>

                            <a href="#home">Home</a>
                            <a href="#featured">Featured</a>
                            <a href="#genres">Genres</a>
                            <a href="#movies">Movies</a>
                        </div>

                        <div>
                            <h3>Company</h3>

                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 MovieVault. All rights reserved.
                    </p>

                    <div className="social-links">
                        <a href="#">
                            <FiFacebook />
                        </a>

                        <a href="#">
                            <FiInstagram />
                        </a>

                        <a href="#">
                            <FiTwitter />
                        </a>

                        <a href="#">
                            <FiYoutube />
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;