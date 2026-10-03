import { FiPlay, FiInfo } from "react-icons/fi";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <p className="hero-label">
                    MOVIEVAULT ORIGINAL
                </p>

                <h1>
                    Discover Stories
                    <br />
                    Worth Watching
                </h1>

                <p className="hero-description">
                    Explore a world of unforgettable movies, discover new
                    favourites and find something worth watching tonight.
                </p>

                <div className="hero-buttons">
                    <button className="primary-button">
                        <FiPlay />
                        Explore Movies
                    </button>

                    <button className="secondary-button">
                        <FiInfo />
                        Learn More
                    </button>
                </div>

                <div className="hero-meta">
                    <span>2026</span>
                    <span>•</span>
                    <span>HD</span>
                    <span>•</span>
                    <span>18+</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;