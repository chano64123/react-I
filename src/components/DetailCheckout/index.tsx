import './styles.css'
import plane from '/public/images/icon/plane.png'
import truck from '/public/images/icon/truck.png'
import { optionsLocaleString } from '@/config/appConfig'
import { useEffect, useRef, useState } from 'react'
import { CartProductUtils } from '@/utils/CartProductUtils'

const DetailCheckout = ({ product }) => {
    const units = useRef<HTMLInputElement>(null);
    const [quantity, setQuantity] = useState(1);
    const [toAddProduct, setButtonToAddProduct] = useState(true);
    
    useEffect(() => {
        const searchProduct = CartProductUtils.getProductInCartById(product.id)
        if (searchProduct) {
            setQuantity(searchProduct.units);
            setButtonToAddProduct(false);
        } else {
            setQuantity(1);
            setButtonToAddProduct(true);
        }
    }, [product]);

    const manageCart = () => {
        let cartProducts = CartProductUtils.getCartProducts();
        const searchProduct = cartProducts.some(each => each.id === product.id);
        if (!searchProduct) {
            product.units = quantity;
            cartProducts.push(product);
            setButtonToAddProduct(false);
        } else {
            cartProducts = cartProducts.filter(each => each.id !== product.id);
            setButtonToAddProduct(true);
        }
        CartProductUtils.setCartProducts(cartProducts);
    };

    return (
        <div className="checkout-container">
            <span className="checkout-total-label">Total:</span>
            <h2 className="checkout-total-price">S/<span id="checkout-total-price">{product.price.toLocaleString('es-PE', optionsLocaleString)}</span></h2>
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
                    <input 
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        ref={units}
                        onChange={() => setQuantity(Number(units.current?.value))}
                    />
                    <button className="btn btn-primary">Comprar</button>
                </div>
                <div className="bottom">
                    <button type="button" className={`btn btn-outline ${toAddProduct ? 'btn-add' : 'btn-remove'}`} onClick={manageCart}>
                        {toAddProduct ? 'Agregar al carrito' : 'Remover del carrito'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailCheckout