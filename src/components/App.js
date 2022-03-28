import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import { useState, useEffect } from "react";
import '../styles/Layout.css';

function App() {

  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState( savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => 
  {
    localStorage.setItem('cart',JSON.stringify(cart));
  });


  return (
    <div>
      <Banner/>
			<div className='lmj-layout-inner'>
				<Cart cart = {cart} updateCart = {updateCart} />
				<ShoppingList cart = {cart} updateCart = {updateCart}/>
			</div>
      <Footer/>
    </div>
  );
}

export default App;
