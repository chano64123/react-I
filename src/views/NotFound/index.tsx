import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero';

const NotFound = () => {
    return (
        <>
            <Header />
            <Hero first={"404"} second={"Not Found"} />
            <Footer />
        </>
    );
}

export default NotFound