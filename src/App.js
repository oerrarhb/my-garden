import logo from './logo.svg';
import './App.css';

function Banner()
{
  const title = "My Garden";
  return (<h1>{title}</h1>)
}

function Cart()
{
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowerPrice = 15;

    return (
      <div>
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


function App() {
  return (
    <div>
      <Banner/>
      <Cart/>
    </div>
  );
}

export default App;
