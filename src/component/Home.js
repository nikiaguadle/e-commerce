import { CartState } from "../context/Context"
import { SingleProduct } from "./SingleProduct"
import './styles.css'
import { Filter } from "./Filter"

const Home =()=>{
    const{state:{products}} = CartState()
    
    
 return   (
        <div className="home">
            <Filter/>
            <div className="productContainer">
               { products.map((ele) => {   
                return(
                       <SingleProduct  product ={ele} key={ele.id}/> 
                      
                ) })}
               
                
            </div>
        </div>
    )
}
export default Home 