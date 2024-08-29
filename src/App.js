
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Shop from    './Components/Pages/Shop';    
// import cart from    './Components/Pages/cart'; 
// import LoginSignup from    './Components/Pages/LoginSignup'; 
// import Product from    './Components/Pages/Product'; 
// import ShopCategory from    './Components/Pages/ShopCategory'; 


import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      
      {/* <Routes>

       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory category="mens"/>}/>
       <Route path='/womens' element={<ShopCategory category="womens"/>}/>
       <Route path='/kids' element={<ShopCategory category="kids"/>}/>

        <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
      </Routes> */}

      </BrowserRouter>
      
    </div>
  );
}

export default App;
