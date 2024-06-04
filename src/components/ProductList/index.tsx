import './styles.css'
import data from '@/data/products.json'
import ProductCard from '../ProductCard';

const ProductList = ({first = 0}) => {
    const products = first === 0 ? data.products :  data.products.slice(0, first);
    return (
        <main>
            <div className="container">
                <div className="product-container" id="products">
                    {
                        products.map(product => <ProductCard key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </main>
    );
}

export default ProductList