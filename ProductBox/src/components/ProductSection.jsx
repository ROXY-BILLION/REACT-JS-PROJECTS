import { useState } from "react";

import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.category.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "ALL" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalProducts = products.length;

  const visibleProducts = filteredProducts.length;

  const averageRating =
    filteredProducts.length > 0
      ? (
          filteredProducts.reduce(
            (total, product) =>
              total + Number(product.rating),
            0
          ) / filteredProducts.length
        ).toFixed(1)
      : "0.0";

  const categoryCount = new Set(
    filteredProducts.map((product) => product.category)
  ).size;

  function clearFilters() {
    setSearchTerm("");
    setSelectedCategory("ALL");
  }

  function clearSearch() {
    setSearchTerm("");
  }

  function clearCategory() {
    setSelectedCategory("ALL");
  }

  const hasSearch = normalizedSearch.length > 0;
  const hasCategory = selectedCategory !== "ALL";

  let emptyTitle = "No products found";
  let emptyMessage =
    "There are no products available right now.";

  if (hasSearch && hasCategory) {
    emptyTitle = "No matching products";
    emptyMessage =
      `No products match "${searchTerm}" in the ${selectedCategory.toLowerCase()} category.`;
  } else if (hasSearch) {
    emptyTitle = "No products found";
    emptyMessage =
      `We couldn't find anything matching "${searchTerm}".`;
  } else if (hasCategory) {
    emptyTitle = "No products in this category";
    emptyMessage =
      `There are currently no products in the ${selectedCategory.toLowerCase()} category.`;
  }

  return (
    <section className="products-section">

      <div className="container">

        <div className="products-heading">

          <div>
            <span className="section-label">
              OUR COLLECTION
            </span>

            <h2>
              Technology for
              <br />
              modern work.
            </h2>
          </div>

          <div className="product-search">

            <i className="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />

            {searchTerm && (
              <button
                type="button"
                className="search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}

          </div>

        </div>

        <div className="category-filters">

          <button
            type="button"
            className={
              selectedCategory === "ALL"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setSelectedCategory("ALL")}
          >
            All Products
          </button>

          <button
            type="button"
            className={
              selectedCategory === "LAPTOP"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setSelectedCategory("LAPTOP")}
          >
            Laptops
          </button>

          <button
            type="button"
            className={
              selectedCategory === "SMARTPHONE"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() =>
              setSelectedCategory("SMARTPHONE")
            }
          >
            Smartphones
          </button>

          <button
            type="button"
            className={
              selectedCategory === "MONITOR"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setSelectedCategory("MONITOR")}
          >
            Monitors
          </button>

          <button
            type="button"
            className={
              selectedCategory === "AUDIO"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setSelectedCategory("AUDIO")}
          >
            Audio
          </button>

          <button
            type="button"
            className={
              selectedCategory === "ACCESSORY"
                ? "category-filter active"
                : "category-filter"
            }
            onClick={() => setSelectedCategory("ACCESSORY")}
          >
            Accessories
          </button>

        </div>

        <div className="catalogue-stats">

          <div className="catalogue-stat">
            <span>
              <i className="fa-solid fa-box"></i>
            </span>

            <div>
              <strong>{totalProducts}</strong>
              <small>Total products</small>
            </div>
          </div>

          <div className="catalogue-stat">
            <span>
              <i className="fa-solid fa-eye"></i>
            </span>

            <div>
              <strong>{visibleProducts}</strong>
              <small>Showing</small>
            </div>
          </div>

          <div className="catalogue-stat">
            <span>
              <i className="fa-solid fa-layer-group"></i>
            </span>

            <div>
              <strong>{categoryCount}</strong>
              <small>Categories</small>
            </div>
          </div>

          <div className="catalogue-stat">
            <span>
              <i className="fa-solid fa-star"></i>
            </span>

            <div>
              <strong>{averageRating}</strong>
              <small>Average rating</small>
            </div>
          </div>

        </div>

        <div className="product-results-info">

          <span>
            {visibleProducts}{" "}
            {visibleProducts === 1
              ? "product"
              : "products"}
          </span>

          <span>
            {selectedCategory === "ALL"
              ? "All categories"
              : selectedCategory}
          </span>

        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                category={product.category}
                name={product.name}
                description={product.description}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}

          </div>
        ) : (
          <div className="empty-search">

            <div className="empty-search-icon">
              <i className="fa-solid fa-box-open"></i>
            </div>

            <span className="empty-label">
              NOTHING TO SHOW
            </span>

            <h3>
              {emptyTitle}
            </h3>

            <p>
              {emptyMessage}
            </p>

            <div className="empty-actions">

              {hasSearch && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={clearSearch}
                >
                  Clear search
                </button>
              )}

              {hasCategory && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={clearCategory}
                >
                  Clear category
                </button>
              )}

              {(hasSearch || hasCategory) && (
                <button
                  type="button"
                  className="primary-button"
                  onClick={clearFilters}
                >
                  Reset everything
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
              )}

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default ProductSection;