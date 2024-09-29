import Featured from "./components/Featured"
import Footer from "./components/Footer"
import HSection from "./components/HSection"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {
  return <div className="font-poppins">
    <Navbar />
    <HSection />
    <Product />
    <Featured />
    <Footer />
  </div>
}

export default App
