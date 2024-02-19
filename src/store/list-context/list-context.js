import React from "react";
const ListContext = React.createContext({
    items : [],
    addItem : ()=>{},
    removeItem:()=>{}
})

export default ListContext;