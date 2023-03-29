import { useState } from "react"
import { Form,Button } from "react-bootstrap"
import { Rating } from "./Rating"
import'./styles.css'


const Filter =()=>{
    const [rate,setrate]=useState()
    return(
        <div className="filters ">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check  
                    inline
                    label="Assending"
                    name="group1"
                    type='radio'
                    id={`inline-1`} 
                />
            </span>
            <span>
                <Form.Check  
                    inline
                    label="Dessending"
                    name="group1"
                    type='radio'
                    id={`inline-2`} 
                />
            </span>
            <span>
                <Form.Check  
                    inline
                    label="Include out of stock"
                    name="group1"
                    type='checkbox'
                    id={`inline-3`} 
                />
           </span>
           <span>
                <Form.Check  
                    inline
                    label="Fast Delivery"
                    name="group1"
                    type='checkbox'
                    id={`inline-4`} 
                />
           </span>
           <span>
                <label style={{paddingRight:10}}>Rating:</label>
                <Rating rating={rate} onClick={(i)=>setrate(i+1)} style={{cursor:'pointer'}}/>
          </span>
           <Button variant='light'> Clear Filter</Button>

        </div>
    )
}
export{ Filter}