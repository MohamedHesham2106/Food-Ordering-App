import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";
function App() {
  const [showCart, setCartShow] = useState(false);
  const showCartHandler = () => {
    setCartShow(true);
  };
  const hideCartHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
