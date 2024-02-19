import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import ListProvider from "./store/list-context/ListProvider";
import Header from "./components/Header/Header";
import CartProvider from "./store/cart-context/CartProvider";
import Products from "./components/ProductList/Products";


function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      <ListProvider >
        {showCart && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <AddProduct />
        <main>
          <Products />
        </main>
      </ListProvider>
    </CartProvider>
  );

}

export default App;
