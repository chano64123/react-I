import './styles.css'

const ProductCard = ({product}) => {
    return (
        <article className="product-card">
            <a className="product-link" href={`details.html?id=${product.id}`}>
                <img className="product-img" src={product.images[0]} alt={product.title} />
                <div className="product-info">
                    <span className="product-title">{product.title}</span>
                    <span className="product-description">${product.description}</span>
                    <div className="product-price-block">
                        <span className="price">S/{product.price.toFixed(2)}</span>
                        <span className="discount">{product.discount}% Off</span>
                    </div>
                    <div className="product-tax-policy">{product.observation}</div>
                </div>
            </a>
        </article>
    );
}

export default ProductCard