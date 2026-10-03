import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedMovie from "../components/FeaturedMovie";
import GenreSection from "../components/GenreSection";
import MovieCatalogue from "../components/MovieCatalogue";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
    const [selectedGenre, setSelectedGenre] = useState("");

    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <FeaturedMovie />

                <GenreSection
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                />

                <MovieCatalogue
                    selectedGenre={selectedGenre}
                />

                <Newsletter />
            </main>

            <Footer />
        </>
    );
}

export default Home;