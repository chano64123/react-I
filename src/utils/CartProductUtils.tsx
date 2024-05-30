import { KEY_LS_CART } from "@/config/keysLocalStorage"

class CartProductUtils {
    static getCartProducts = () => {
        const cartProductsStr = localStorage.getItem(KEY_LS_CART) ?? '';
        return JSON.parse(cartProductsStr) ?? []
    }

    static addProductToCart = (product) => {
        const cartProducts = this.getCartProducts();
        cartProducts.push(product);
        this.setCartProducts(cartProducts);
    }

    static setCartProducts = (cartProducts) => {
        localStorage.setItem(KEY_LS_CART, JSON.stringify(cartProducts));
    }

    static isProductInCart = (product) => {
        const cartProducts = this.getCartProducts();
        const isInCart = cartProducts.some(
            each => each.id === product.id && each.color === product.color
        );
        return isInCart;
    }

    static getProductInCartByIdAndColor = (id, color) => {
        const cartProducts = this.getCartProducts();
        const product = cartProducts.find(
            each => each.id === id && each.color === color
        );
        return product;
    }
}

export { CartProductUtils }