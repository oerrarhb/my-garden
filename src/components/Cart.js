import '../styles/Cart.css';

function Cart()
{
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;

    return (
      <div className='lmj-cart'>
        <h2>Cart</h2>
        <ul>
          <li>Monstera : {monsteraPrice}</li> 
          <li>Ivy : {ivyPrice}</li> 
          <li>Flowers : {flowerPrice}</li> 
        </ul>
        Total price : {monsteraPrice + ivyPrice + flowerPrice}
      </div>
    );
}

export default Cart