import { useContext, useState } from "react";
import ListContext from "../../store/list-context/list-context";

const AddProduct = (props) => {
    const [enteredId, setEnteredId] = useState("")
    const [enteredName, setEnteredName] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")
    const [enteredQuantity, setEnteredQuantity] = useState("")

    const listCntx = useContext(ListContext);

    const idChangeHandler = (event) => {
        setEnteredId(event.target.value)
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const qunatityChangeHandler = (event) => {
        setEnteredQuantity(event.target.value)
    }

    const addProductHandler = (event) => {
        event.preventDefault()
        listCntx.addItem({enteredId,enteredName,enteredDescription,enteredPrice,enteredQuantity})
        setEnteredId("")
        setEnteredName("")
        setEnteredDescription("")
        setEnteredPrice("")
        setEnteredQuantity("")
    }

    return <>
    <h2>Add Medicines</h2>
    <form onSubmit={addProductHandler}>
        <label htmlFor="id">Medicine Id</label>
        <input id="id" type="number" value={enteredId} onChange={idChangeHandler} />
        <label htmlFor="name">Medicine Name</label>
        <input id="name" type="text" value={enteredName} onChange={nameChangeHandler} />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
        <label htmlFor="price">Price</label>
        <input id="price" type="number" value={enteredPrice} onChange={priceChangeHandler} />
        <label htmlFor="quantity">Quantity Available</label>
        <input id="quantity" type="number" value={enteredQuantity} onChange={qunatityChangeHandler} />
        <button type="submit">Add Product</button>
    </form>
    </>
}

export default AddProduct;