import { FiPlay, FiPlus } from "react-icons/fi";

function FeaturedMovie() {
    return (
        <section className="featured-section" id="featured">
            <div className="container">

                <div className="section-heading">
                    <div>
                        <p className="section-label">
                            FEATURED
                        </p>

                        <h2>
                            Movie of the Week
                        </h2>
                    </div>
                </div>

                <div className="featured-card">

                    <div className="featured-image">
                        <div className="featured-badge">
                            FEATURED
                        </div>
                    </div>

                    <div className="featured-content">

                        <p className="movie-year">
                            2026 • ACTION • SCI-FI
                        </p>

                        <h3>
                            Beyond the Horizon
                        </h3>

                        <p className="movie-rating">
                            ★ 8.7/10
                        </p>

                        <p className="featured-description">
                            A daring journey beyond the limits of humanity
                            begins when a mysterious signal reaches Earth from
                            an unexplored region of space.
                        </p>

                        <div className="movie-info">
                            <span>2h 18min</span>
                            <span>•</span>
                            <span>HD</span>
                        </div>

                        <div className="featured-buttons">
                            <button className="primary-button">
                                <FiPlay />
                                Watch Trailer
                            </button>

                            <button className="icon-button">
                                <FiPlus />
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default FeaturedMovie;