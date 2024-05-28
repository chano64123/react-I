import './styles.css'
import data from '../../data/products.json'
import ProductCard from '../ProductCard';

const ProductList = () => {
    return (
        <main>
            <div className="container">
                <div className="product-container" id="products">
                    {
                        data.products.map(product => <ProductCard product={product}/>)
                    }
                </div>
            </div>
        </main>
    );
}

export default ProductList