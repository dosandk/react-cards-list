const Card = ({product = {}}) => {
  const {rating = '', price = '', title = '', description = '', images = []} = product;
  const shortDescription = description.slice(0, 50) + '...';

  return <div className="os-product-card">
    <div className="os-product-img" style={{backgroundImage: `url(${images[0]})`}}></div>

    <div className="os-product-content">
      <div className="os-product-price-wrapper">
        <div className="os-product-rating">
          <span>{rating}</span>
          <i className="bi bi-star"></i>
        </div>

        <div className="os-product-price">{price} USD</div>
      </div>

      <h5 className="os-product-title">{title}</h5>
      <p className="os-product-description">{shortDescription}</p>
    </div>
    <footer className="os-product-footer">
      <button
        className="os-btn-primary add-to-cart-btn">
        Add To Cart
      </button>
    </footer>
  </div>
}

export default Card;
