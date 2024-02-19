import { useState } from "react";
import ListContext from "./list-context";

const ListProvider = (props) => {
    const [enteredItem, setEnteredItem] = useState([]);
    const addItemToList = (item) => {
        setEnteredItem(prevItems => [...prevItems, item])
    }

    const removeItemFromList = () => { }
    const listContext = {
        items: enteredItem,
        addItem: addItemToList,
        removeItem: removeItemFromList
    }
    return <ListContext.Provider value={listContext}>
        {console.log(listContext.items)}
        {props.children}
    </ListContext.Provider>
}

export default ListProvider;
