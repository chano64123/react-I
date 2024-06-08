import data from '@/data/products.json'

class ProductUtils {
    //#region LISTAS
    static getProducts = () => {
        return data.products;
    }

    static getProductsOnSale = () => {
        return this.getProducts().filter(product => product.onSale);
    }
    //#endregion

    //#region CANTIDADES
    static getQuantityOfProducts = () => {
        return this.getProducts().length;
    }

    static getQuantityOfProductsOnSale = () => {
        return this.getProductsOnSale().length;
    }
    //#endregion

    //#region CANTIDAD PAGINAS
    static getQuantityOfPages = (pageSize) => {
        return Math.ceil(this.getQuantityOfProducts() / pageSize);
    }

    static getQuantityOfPagesOnSale = (pageSize) => {
        return Math.ceil(this.getQuantityOfProductsOnSale() / pageSize);
    }
    //#endregion

    //#region OTROS
    static getFirstProducts = (first) => {
        return first === 0 ? this.getProducts() : this.getProducts().slice(0, first);
    }

    static getProductById = (id) => {
        return this.getProducts().find(product => product.id === Number(id));
    }

    static getPaginatedProductsOnSale = (pageSize, page) => {
        const from = pageSize * (page - 1);
        const to = pageSize * page;
        return this.getProductsOnSale().slice(from, to);
    }
    //#endregion
}

export { ProductUtils }