import './styles.css'
import { optionsLocaleString } from '@/config/appConfig';

const CartResume = ({ total }) => {
    return (
        <div className="cart-resume">
            <span className="cart-resume-title">Resumen del pedido</span>
            <div className="cart-resume-total">
                <span className="cart-resume-total-title">Total</span>
                <div className="cart-resume-total-price">S/<span id="total-price">{total.toLocaleString('es-PE', optionsLocaleString)}</span></div>
            </div>
            <span className="cart-resume-tax">Incluye impuestos y percepcion AFIP</span>
            <button id="finalizar-compra" className="cart-resume-checkout">Finaliza tu compra</button>
        </div>
    );
}

export default CartResume