import Hero from '../Hero'
import Footer from '../Footer'
import Header from '../Header'
import ProductList from '../ProductList'

const Home = () => {
  return (
    <>
      <Header />
      <Hero first={"Tecnología"} second={"Renovada"} />
      <ProductList />
      <Footer />
    </>
  )
}

export default Home
