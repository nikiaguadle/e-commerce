const cartReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{...state, cart:[...state.cart,{...action.paylod , qty :1}]}
        case "REMOVE_FROM_CART":
            return{...state, cart:[state.cart.filter(elem=>elem.id !== action.paylod.id)]}      
    default :
            return state;
        
    }

}
export{cartReducer}