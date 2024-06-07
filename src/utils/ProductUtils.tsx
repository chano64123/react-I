import data from '@/data/products.json'

class ProductUtils {
    static getProducts = () => {
        return data.products;
    }

    static getFirstProducts = (first) => {
        return first === 0 ? data.products :  data.products.slice(0, first);
    }
    
    static getOnSaleProducts = () => {
        return data.products.filter(product => product.onSale);
    }

    static getProductById = (id) => {
        return data.products.find(product => product.id === Number(id));
    }
}

export { ProductUtils }