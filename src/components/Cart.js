import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({cart, updateCart}) {
  
  const [isOpen, setIsOpen] = useState(true);
  const totalPrice = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price , 0
  );
  
  useEffect(() =>
  {
    document.title = `${totalPrice}$ to pay`;
  },[totalPrice]);

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{totalPrice}€</h3>
					<button onClick={() =>{ 
            updateCart([]);
            }}>Empty your cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Show your cart
      </button>
    </div>
  );
}


export default Cart