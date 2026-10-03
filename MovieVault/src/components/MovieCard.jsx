import { FiPlay, FiPlus } from "react-icons/fi";

function MovieCard({ movie }) {
    return (
        <article className="movie-card">

            <div
                className="movie-poster"
                style={{
                    backgroundImage: `url(${movie.poster})`
                }}
            >
                <span className="movie-quality">
                    {movie.quality}
                </span>

                <button className="poster-play">
                    <FiPlay />
                </button>
            </div>

            <div className="movie-card-content">

                <h3>
                    {movie.title}
                </h3>

                <p>
                    {movie.genre} • {movie.secondaryGenre}
                </p>

                <div className="movie-card-bottom">

                    <span>
                        ★ {movie.rating}
                    </span>

                    <button>
                        <FiPlus />
                    </button>

                </div>

            </div>

        </article>
    );
}

export default MovieCard;