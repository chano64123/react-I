import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import OnSaleList from "@/components/OnSaleList"

const OnSale = () => {
  return (
    <>
      <Header showFilter={true} />
      <Hero first={"Nuestras"} second={"Ofertas"} />
      <OnSaleList />
      <Footer />
    </>
  )
}

export default OnSale
