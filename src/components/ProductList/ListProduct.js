import { useContext, useState } from "react";
import CartContext from "../../store/cart-context/cart-context";

const ListProduct = (props) => {
    const { item } = props;
    const [quantity, setQuantity] = useState(item.enteredQuantity);
    const cartCntx = useContext(CartContext);

    const addItemToCartHandler = (event) => {
        event.preventDefault();
        if (quantity > 0) {
            cartCntx.addItem({ ...item, enteredQuantity: 1 })
            console.log(item);
            setQuantity((prevQuantity => prevQuantity - 1))
        }
    }
    return (
        <li>
            <span>{item.enteredName}</span> -
            <span>{item.enteredDescription}</span> -
            <span>{item.enteredPrice}</span> -
            <span>{quantity}</span> -
            <button onClick={addItemToCartHandler} >Add to Cart</button>
        </li>
    )
}

export default ListProduct;