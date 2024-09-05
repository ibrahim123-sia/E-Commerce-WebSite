
import './App.css';
import Navbar from        './Components/Navbar/Navbar';
import Shop from          './Pages/Shop';     
import Cart from            './Pages/Cart';  
import LoginSignup from    './Pages/LoginSignup';  
import Product from         './Pages/Product';  
import ShopCategory from    './Pages/ShopCategory'; 
import Footer from          './Components/Footer/Footer'
import men_banner from       './Components/Assets/f1.jpg'
import women_banner from      './Components/Assets/f2.jpg'
import kid_banner from        './Components/Assets/f3.jpg'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      
      <Routes>

       <Route path='/' element={<Shop/>}/>
       <Route path='/mens'   banner={men_banner} element={<ShopCategory category="mens"     />}/>
       <Route path='/womens' banner={women_banner}  element={<ShopCategory category="womens" />}/>
       <Route path='/kids'   banner={kid_banner} element={<ShopCategory category="kids"    />}/>

        <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
