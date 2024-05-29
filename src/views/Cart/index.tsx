import './styles.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import CartResume from '@/components/CartResume';
import CartProduct from '@/components/CartProduct';
import NoItems from '@/components/NoItems';

const Cart = () => {
    const cartProducts = []
    return (
        <>
            <Header />
            <Hero first={"Mi"} second={"Carrito"} />
            <main>
                <div className="container">
                    <div className="cart-products-container" id="products">
                        <article id="cart-products" className="item-cart">
                            {
                                cartProducts.length === 0 ? <NoItems message={"No hay productos en el carrito."} /> : cartProducts.map(product => (<CartProduct product={product} isFavorite={false} />))
                            }
                        </article>
                        <article id="total" className="item-cart">
                            <CartResume total={0} />
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Cart