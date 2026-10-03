import {
    FiFilm,
    FiHeart,
    FiZap,
    FiSmile,
    FiGlobe,
    FiAlertCircle
} from "react-icons/fi";

function GenreSection({ selectedGenre, setSelectedGenre }) {
    const genres = [
        {
            name: "Action",
            icon: <FiZap />
        },
        {
            name: "Drama",
            icon: <FiFilm />
        },
        {
            name: "Romance",
            icon: <FiHeart />
        },
        {
            name: "Comedy",
            icon: <FiSmile />
        },
        {
            name: "Adventure",
            icon: <FiGlobe />
        },
        {
            name: "Horror",
            icon: <FiAlertCircle />
        }
    ];

    const handleGenreClick = (genre) => {
        if (selectedGenre === genre) {
            setSelectedGenre("");
        } else {
            setSelectedGenre(genre);
        }

        document
            .getElementById("movies")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    };

    return (
        <section className="genre-section" id="genres">
            <div className="container">

                <div className="section-heading">
                    <div>
                        <p className="section-label">
                            EXPLORE
                        </p>

                        <h2>
                            Browse by Genre
                        </h2>
                    </div>
                </div>

                <div className="genre-grid">

                    {genres.map((genre) => (
                        <button
                            className={`genre-card ${
                                selectedGenre === genre.name
                                    ? "selected"
                                    : ""
                            }`}
                            key={genre.name}
                            onClick={() =>
                                handleGenreClick(genre.name)
                            }
                        >
                            <span className="genre-icon">
                                {genre.icon}
                            </span>

                            <span>
                                {genre.name}
                            </span>

                        </button>
                    ))}

                </div>

                {selectedGenre && (
                    <div className="selected-genre-info">
                        <span>
                            Showing {selectedGenre} movies
                        </span>

                        <button
                            onClick={() => setSelectedGenre("")}
                        >
                            Clear
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}

export default GenreSection;