import { Fragment } from "react";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
    return (
        <Fragment>
            <h2>Medicine Store</h2>
            <HeaderButton showCart={props.onShowCart}/>
        </Fragment>
    )
}

export default Header;