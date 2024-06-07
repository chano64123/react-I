import './styles.css'
import ProductCard from '../ProductCard';
import { ProductUtils } from '@/utils/ProductUtils';

const ProductList = ({first = 0}) => {
    const products = ProductUtils.getFirstProducts(first);
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