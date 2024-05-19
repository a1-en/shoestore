import './App.css';
import Navbar from './components/Navbar';
import ProductsSection from './pages/products';
import HeroSection from './pages/hero'; import Footer from './components/footer';  
function App() {
  return (
    <div> <Navbar />  <HeroSection />  <ProductsSection />   <Footer />   </div>
  );
}

export default App;
