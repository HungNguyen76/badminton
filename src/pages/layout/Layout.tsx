import Footer from "@/components/footer"
import Header from "@/components/header"
import Banner from "@/components/banner"
import Home from "../home/Home"

export default function Layout() {
  // Back to top
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer handleBackToTop={handleBackToTop}/>
    </div>
  )
}
