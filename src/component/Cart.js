import { useEffect, useState } from "react";
import { Button, Col, ListGroup,Row,Image} from "react-bootstrap";

import { CartState } from "../context/Context";
import "./styles.css"
import { Rating } from "./Rating";
import {AiFillDelete} from "react-icons/ai" 


const  Cart = ()=>{
    const{state,dispatch}=CartState()
    const{cart} = state

    const[total,setTotal]=useState(0)

    const add=()=>{
        let price=0
        cart.map((ele)=>{
          return( price = Number(ele.price)+ price)
        })
        setTotal(price)
    }

  useEffect(()=>add(),[cart])
    
    return(
        <div className="home">
          <div className="productContainer">
            <ListGroup>
               {
                cart.map((e)=>
                    (
                        <ListGroup.Item key={e.id}>
                          <Row>
                            <Col md={2}> 
                             <Image src={e.image} alt={e.name } className="cartItmImage"/>
                            </Col>
                            <Col md={2}> <sapn>{e.name}</sapn></Col>
                            <Col md={2}>RS.{e.price}</Col>
                            <Col md={2}><Rating rating={e.rating}/></Col>
                            <Col md={2}> 
                            <AiFillDelete 
                                fontSize="20px"
                                style={{cursor:"pointer"}}
                              onClick={()=>{
                                
                                dispatch({type:"REMOVE_FROM_CART",paylod:e})

                              }}
                          /></Col>
                          </Row>
                        </ListGroup.Item>
                    )
                )
               }
            </ListGroup>
          </div>
          <div className="filters">
               <span className="title">   Subtotal Item </span> 
                <sapn style={{fontWeight:"700", marginBottom:"20px"}} >toatl Itms{cart.length}</sapn>
               <sapn style={{fontWeight:"700", marginBottom:"20px"}}>Total {total}</sapn>
               <Button type="button" disabled={cart.length===0}>Procced To CheckOut</Button>
                 
          </div>
        </div>
        
    )
}
export default Cart ;