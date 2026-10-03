function ProductCard({
  category,
  name,
  description,
  price,
  rating,
  image,
}) {
  return (
    <article className="product-card">

      <div className="product-image">

        <img
          src={image}
          alt={name}
        />

        <button
          className="favorite-button"
          aria-label={`Add ${name} to favourites`}
        >
          <i className="fa-regular fa-heart"></i>
        </button>

      </div>

      <div className="product-content">

        <div className="product-top">

          <span className="product-category">
            {category}
          </span>

          <span className="product-rating">
            <i className="fa-solid fa-star"></i>
            {rating}
          </span>

        </div>

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="product-bottom">

          <strong>{price}</strong>

          <button className="product-button">
            View
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;