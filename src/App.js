import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import {ProductDetail} from './pages/productDetails'
import { ProductHome } from './pages/productHome';
import { NotFound } from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>}>
           <Route path="/" element={<ProductHome/>}/>
           <Route path=":productid" element={<ProductDetail/>}/>
           <Route path="*" element={<NotFound/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
