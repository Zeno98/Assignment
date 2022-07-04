import React, { createContext } from 'react'
import { cartContext } from '../../context/Context';
import "./SinglePage.css";

const SinglePage = ({items}) => {

    console.log(items)

    const{cart,setCart}=React.useContext(cartContext);
  return (
    <div className='products' key={items.id} >
            <img className='img' src={`${items.image}`} alt="no-image" />
            <div className='productDesc'>
            <span>{items.title.length>15?items.title.substr(0,15)+"...":items.title}</span>
            <span>₹ {items.price}</span>
            </div>
            <span>rating {items.rating.rate}</span>
            {
                cart.includes(items) ? (
                    <button className='remove' onClick={()=>{
                        setCart(cart.filter((ele)=>ele.id!=items.id))
                    }}>Remove from Cart</button>
                )
                :
                (
                    <button className='add' onClick={()=>{
                        setCart([...cart,items])
                    }}>Add to Cart</button>
        
                )
            }
            
            

    </div>
  )
}

export default SinglePage