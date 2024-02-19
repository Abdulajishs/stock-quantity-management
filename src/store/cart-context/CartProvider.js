import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const [enteredItem, setEnteredItem] = useState([]);
    const addItemToCart = (item) => {
        const existingItemIndex = enteredItem.findIndex((ele) => ele.enteredId === item.enteredId);
        if(existingItemIndex !== -1){
            const updateItem = [...enteredItem]
            console.log(updateItem);
            updateItem[existingItemIndex].enteredQuantity += 1
            setEnteredItem(updateItem)
        }else{
            setEnteredItem((prevItems) => [...prevItems, item])
        }
    }
    const removeItemFromCart = () => { }
    const cartContext = {
        items: enteredItem,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {console.log(cartContext)}
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;