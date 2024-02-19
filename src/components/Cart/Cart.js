import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context/cart-context";
import CartItem from "./CartItem";

const Cart = (props)=>{
    const cartCntx = useContext(CartContext)

    const total = cartCntx.items.reduce((acc,curr)=> acc+curr.enteredPrice * curr.enteredQuantity,0)

    return(
        <Modal onClose={props.onClose}>
            <ul>
            { cartCntx.items.map((item)=>(
            <CartItem item={item}/>))}
            </ul>
            <h3>Total Amount -{total}</h3>
            <button>Order</button>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}
export default Cart;