import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductSection from "./components/ProductSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="categories">
          <CategoryStrip />
        </section>

        <FeaturedProduct />

        <section id="products">
          <ProductSection />
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;