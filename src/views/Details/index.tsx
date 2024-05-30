import './styles.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList';
import DetailThumbs from '@/components/DetailThumbs';
import DetailDescription from '@/components/DetailDescription';
import DetailCheckout from '@/components/DetailCheckout';
import Hero from '@/components/Hero';
import data from '@/data/products.json'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const product = data.products.find(product => product.id === Number(id));
    return (
        <>
            <Header />
            {
                !product ? <Hero first={"404"} second={"Producto no encontrado"} /> :
                    <main>
                        <div className="container">
                            <div className="columns-container">
                                <div className="product-images-block" id="product-images">
                                    <DetailThumbs product={product} />
                                </div>
                                <div className="product-description-block" id="product-description">
                                    <DetailDescription product={product} />
                                </div>
                                <div className="product-checkout-block" id="product-checkout">
                                    <DetailCheckout product={product} />
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
            }
            <Footer />
        </>
    );
}

export default Details