import { useState } from "react";
import movies from "../data/movies";
import MovieCard from "./MovieCard";
import {
    FiSearch,
    FiX,
    FiStar,
    FiTrendingUp
} from "react-icons/fi";

function MovieCatalogue({ selectedGenre }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesGenre = selectedGenre
            ? movie.genre === selectedGenre
            : true;

        return matchesSearch && matchesGenre;
    });

    const movieCount = filteredMovies.length;

    const averageRating = movieCount > 0
        ? (
            filteredMovies.reduce(
                (total, movie) => total + movie.rating,
                0
            ) / movieCount
        ).toFixed(1)
        : "0.0";

    const highestRatedMovie = filteredMovies.length > 0
        ? filteredMovies.reduce((highest, movie) =>
            movie.rating > highest.rating
                ? movie
                : highest
        )
        : null;

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <section className="catalogue-section" id="movies">
            <div className="container">

                <div className="section-heading catalogue-heading">

                    <div>
                        <p className="section-label">
                            CATALOGUE
                        </p>

                        <h2>
                            {selectedGenre
                                ? `${selectedGenre} Movies`
                                : "Popular Movies"
                            }
                        </h2>
                    </div>

                    <button className="view-all">
                        View All
                    </button>

                </div>

                <div className="movie-search">

                    <div className="search-input-wrapper">

                        <FiSearch />

                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                        />

                        {searchTerm && (
                            <button
                                className="clear-search"
                                onClick={clearSearch}
                                aria-label="Clear search"
                            >
                                <FiX />
                            </button>
                        )}

                    </div>

                </div>

                <div className="catalogue-stats">

                    <div className="catalogue-stat">

                        <span>
                            Results
                        </span>

                        <strong>
                            {movieCount}
                        </strong>

                    </div>

                    <div className="catalogue-stat">

                        <span>
                            Average Rating
                        </span>

                        <strong>
                            <FiStar />
                            {averageRating}
                        </strong>

                    </div>

                    <div className="catalogue-stat">

                        <span>
                            Top Rated
                        </span>

                        <strong className="top-rated-title">
                            <FiTrendingUp />

                            {highestRatedMovie
                                ? highestRatedMovie.title
                                : "None"
                            }
                        </strong>

                    </div>

                </div>

                <div className="search-results-info">

                    <p>
                        {movieCount}{" "}
                        {movieCount === 1
                            ? "movie"
                            : "movies"
                        } found
                    </p>

                </div>

                {filteredMovies.length > 0 ? (

                    <div className="movie-grid">

                        {filteredMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="no-results">

                        <FiSearch />

                        <h3>
                            No movies found
                        </h3>

                        <p>
                            Try changing your search or selected genre.
                        </p>

                        <button
                            className="primary-button"
                            onClick={clearSearch}
                        >
                            Clear Search
                        </button>

                    </div>

                )}

            </div>
        </section>
    );
}

export default MovieCatalogue;