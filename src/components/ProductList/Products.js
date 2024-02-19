import { useContext } from "react";
import ListContext from "../../store/list-context/list-context";
import ListProduct from "./ListProduct";

const Products = (props) => {
    const listCntx = useContext(ListContext);
    
    return (
        <div>
            <h2>List of Medicines</h2>
            <ul>
                {listCntx.items.map((item) => (
                    <ListProduct  key={item.enteredId} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default Products;