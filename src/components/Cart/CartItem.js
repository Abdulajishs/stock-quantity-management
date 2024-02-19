const CartItem = (props)=>{
    const {item} = props
    return(
        <li  key={item.enteredId}>
            <h3>{item.enteredName}</h3>
            <div>x{item.enteredQuantity}</div>
            <div>{item.enteredPrice}</div>
        </li>
)
}

export default CartItem;