import './styles.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList';
import ProductDetailImage from '@/components/ProductDetailImage';
import ProductDetailDescription from '@/components/ProductDetailDescription';
import ProductDetailCheckout from '@/components/ProductDetailCheckout';
import data from '@/data/products.json'

const Details = () => {
    const product = data.products[0];
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="columns-container">
                        <div className="product-images-block" id="product-images">
                            <ProductDetailImage product={product} />
                        </div>
                        <div className="product-description-block" id="product-description">
                            <ProductDetailDescription product={product} />
                        </div>
                        <div className="product-checkout-block" id="product-checkout">
                            <ProductDetailCheckout product={product}/>
                        </div>
                    </div>
                    <div className="sales-block">
                        <h3 className="recommended-product-label">Productos que regalamos</h3>
                        <div className="container">
                            <div className="product-container" id="offer-products">
                                <ProductList first={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Details