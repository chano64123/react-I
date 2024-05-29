import './styles.css'

const CartProduct = ({ product, isFavorite }) => {
    const classFavorite = isFavorite ? 'fa-solid' : 'fa-regular';
    return (
        <div className="cart-product">
            <img src={product.image} height="150" alt={product.title} />
            <div className="cart-product-detail">
                <span className="cart-product-title">{product.title}</span>
                <span className="cart-product-color">{product.color}</span>
                <span className="cart-product-description">{product.description}</span>
                <input id={product.id} data-color={product.color} type="number" min="1" max="10" value={product.quantity} className="cart-product-quantity" />
            </div>
            <div className="cart-product-price">S/{product.price.toFixed(2)}</div>
            <div className="cart-product-favorite">
                <i className={`${classFavorite} fa-star cart-product-favorite-icon`} data-id={product.id} data-color={product.color}></i>
            </div>
        </div>
    );
}

export default CartProduct