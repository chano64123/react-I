import './styles.css'
import plane from '../../../public/images/icon/plane.png'
import truck from '../../../public/images/icon/truck.png'


const DetailCheckout = ({ product }) => {
    return (
        <div className="checkout-container">
            <span className="checkout-total-label">Total:</span>
            <h2 className="checkout-total-price">S/<span id="checkout-total-price">{product.price.toFixed(2)}</span></h2>
            <p className="checkout-description">Incluye impuestos, pero si quieres los evadimos por ti.</p>
            <ul className="checkout-policy-list">
                <li>
                    <span className="policy-icon"><img src={truck} alt="" /></span>
                    <span className="policy-desc">Agregar el producto al carrito para conocer los precios de envío.</span>
                </li>
                <li>
                    <span className="policy-icon"><img src={plane} alt="" /></span>
                    <span className="policy-desc">Lo recibes al instante, ni cuenta te vas a dar.</span>
                </li>
            </ul>
            <div className="checkout-process">
                <div className="top">
                    <input id="quantity" type="number" value="1" min="1" max="10" data-id={product.id} />
                    <button className="btn btn-primary">Comprar</button>
                </div>
                <div className="bottom">
                    <button className="btn btn-outline" data-id={product.id}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default DetailCheckout