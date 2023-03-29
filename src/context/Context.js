import { faker } from "@faker-js/faker";
import {  createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext()

const Context = ({children})=>{
    faker.seed(99);
    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image:faker.image.image(),
        inStock:faker.helpers.arrayElement([0,1,2]),
        fastDelivery:faker.datatype.boolean(),
        rating:faker.helpers.arrayElement([2,5,8,6,15]),
    }))

    const[state,dispatch] = useReducer(cartReducer,{
        products : products,
        cart: []
    })
    return(
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;
export const CartState =()=>{
    return useContext(Cart)
}
