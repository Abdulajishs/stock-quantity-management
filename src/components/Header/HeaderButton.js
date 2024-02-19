import { useContext } from "react";
import CartContext from "../../store/cart-context/cart-context";

const HeaderButton = (props) =>{
    const cartCntx = useContext(CartContext);
    const total = cartCntx.items.reduce((acc,curr )=> acc+curr.enteredQuantity,0)
    return<button onClick={props.showCart}>
        {/* {console.log(props.showCart)} */}
        <h3>Your Cart -{total}</h3>
    </button>
}

export default HeaderButton;