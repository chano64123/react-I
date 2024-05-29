import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"

const Home = () => {
  return (
    <>
      <Header showFilter={true} />
      <Hero first={"Tecnología"} second={"Renovada"} />
      <ProductList />
      <Footer />
    </>
  )
}

export default Home
