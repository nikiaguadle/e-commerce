import { Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import { Rating } from "./Rating"
import './styles.css'

const SingleProduct =({product})=>{
   const{state,dispatch}= CartState()
   const {cart} = state
   console.log(cart)
    return(
        <div className="product">
           <Card>
            <Card.Img variant="top" src={product.image} alt={product.name}/>

            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle style ={{paddingBottom:10}}>
                  <span> {product.price}</span>
                  { product.fastDelivery ? 
                    (
                        <div>Fast Delivery</div>
                    ):
                    (
                        <div> 4 Days to Delivery</div>
                    )}
                    <Rating rating={product.rating}/>
                </Card.Subtitle>
                {
                    cart.some(c=>c.id===product.id)?
                    (<Button variant="danger" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",paylod:product})}} >Romve From Cart</Button>)
                    :(<Button  onClick={()=>{dispatch({type:"ADD_TO_CART",paylod:product})}}>
                    {!product.inStock ?"Out Of Stock":"Add To Cart"}</Button>)
                }
                
                 

    
                       
                
            </Card.Body>
           </Card>
        </div>
    )
}

export{SingleProduct}