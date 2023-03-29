import {AiFillStar,AiOutlineStar} from"react-icons/ai"
const Rating = ({rating,onClick,style})=>{

    return(
        <div>
        {
            [...Array(5)].map((_,i)=>{
                return(
                    <span key={i} onClick={()=>onClick(i)} style={style}>
                    {rating > i ? (
                        <AiFillStar color="yellow" fontSize="25px" />
                    ):(
                        <AiOutlineStar  color="yellow" fontSize="25px"/>
                    )}
                    </span>
                )
            })
        }
        </div>
     )   
}
export {Rating}