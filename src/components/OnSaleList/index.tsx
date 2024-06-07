import './styles.css'
import data from '@/data/products.json'
import OnSaleCard from '../OnSaleCard';


const OnSaleList = () => {
    const products = data.products.filter(product => product.onSale);
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