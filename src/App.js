import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Data from './Data';
import Cart from './Routes/Cart';
import Gallery from './Routes/Gallery'; // Component names should start with an uppercase letter

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (product) => {
    setCartProducts((cartProducts) => [...cartProducts, { item: product, quantity: 1 }]);
  };
  

  const { productItems } = Data;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart cartProducts={cartProducts} />} />
          
          <Route path="/" element={<Gallery productItems={productItems} handleAddtoCart={handleAddToCart} />
} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
