import { optionsLocaleString } from '@/config/appConfig';
import './styles.css'

const OnSaleCard = ({ product }) => {
    const { images, title, price, discount } = product;
    const priceWithDiscount = (price * discount) / 100;
    return (
        <div className="card">
            <img src={images[0]} alt={title} className="product-image" />
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="original-price">Desde S/{price.toLocaleString('es-PE', optionsLocaleString)}</p>
                <p className="discounted-price">S/{priceWithDiscount.toLocaleString('es-PE', optionsLocaleString)} <span className="discount">{discount}% OFF</span></p>
                <span className="cta">¡Compra y paga en soles!</span>
            </div>
        </div>
    );
}

export default OnSaleCard