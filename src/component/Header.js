import { Badge, Container, Dropdown, FormControl, Navbar,Nav, Button } from "react-bootstrap"
import{GiShoppingCart} from "react-icons/gi"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context"
import{AiFillDelete} from "react-icons/ai"
import "./styles.css"
import React from "react"

const Header = ()=>{
    const {state,dispatch} = CartState()
    const {cart} = state
    console.log(cart)
    
    return(
        <Navbar bg="dark" variant="dark" style={{height:70}}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                     style={{width:500}}
                     placeholder="search product"
                     />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <GiShoppingCart color="white" fontSize="30px"/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { cart.length > 0 ?
                                 (<div className="cartD">
                                      {cart.map((ele)=>(
                                        <span className="cartitm" key={ele.id}>
                                         <img 
                                           src={ele.image}
                                           className="cartItmImage"
                                           alt={ele.name}
                                         />
                                         <div className="cartItmD">
                                          <sapn>{ele.name}</sapn>
                                          <sapn>{ele.price}</sapn>
                                         </div>
                                         <AiFillDelete 
                                           fontSize="20px"
                                           style={{cursor:"pointer"}}
                                          onClick={()=>{
                                            
                                            dispatch({type:"REMOVE_FROM_CART",paylod:ele})

                                          }}
                                         />
                                        </span>
                                      ))} 
                                      <Link to="/cart">
                                        <Button style={{width:"80%",cursor:"pointer"}}> GO TO CART</Button>
                                      </Link>   
                                 </div>
                                
                                 )
                            : ( <span style={{padding :10}}>cart is empty</span>) }
                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header