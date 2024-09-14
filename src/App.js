import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/f1.jpg';
import women_banner from './Components/Assets/f2.jpg';
import kid_banner from './Components/Assets/f3.jpg';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  
  const location = useLocation();  
  const shouldShowNavbar = location.pathname !== '/';
  const location1 = useLocation(); 
  const shouldShowfooter = location.pathname !== '/';
  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/mens' banner={men_banner} element={<ShopCategory category="mens" />} />
        <Route path='/womens' banner={women_banner} element={<ShopCategory category="womens" />} />
        <Route path='/kids' banner={kid_banner} element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {shouldShowfooter && <Footer />}
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
