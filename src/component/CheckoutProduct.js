import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './Stateprovider';

function CheckoutProduct({id,image,rating,title,price}) {

    const [{ basket } ,dispatch] = useStateValue();
    
    const remove_from_basket = ()=>{
dispatch({
    type:'remove_from_basket',
    id:id
})
    }


  return (
   
        <div className="checkoutProduct">
        <img className="checkoutProduct__ad" src={image}/>
    
      
        <div className="checkoutProduct__Info">
        <p className="checkoutProduct__Title">{title}</p>
        <p className="checkoutProduct__price">
            <small>$</small>
            <strome>{price}</strome>
        </p>
        <div className="checkoutProduct__rating">
            {
                Array(rating).fill().map((_,i)=>
                <p>⭐</p>)
            }
        </div>
        <button className='checkoutProduct__button ' onClick={remove_from_basket}>Remove From Basket</button>
            
        </div>
    </div>
     
  )
}

export default CheckoutProduct