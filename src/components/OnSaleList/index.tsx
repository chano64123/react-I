import './styles.css'
import OnSaleCard from '../OnSaleCard';
import { ProductUtils } from '@/utils/ProductUtils';

const OnSaleList = () => {
    const products = ProductUtils.getOnSaleProducts();
    return (
        <main>
            <div className="container">
                <div className="product-container" id="products">
                    {
                        products.map(product => <OnSaleCard key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </main>
    );
}

export default OnSaleList