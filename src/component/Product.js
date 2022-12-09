
import React from 'react'
import "./Product.css"
import { useStateValue } from './Stateprovider'


function Product({id,title,price,rating,image}) {
  const [state,dispatch] = useStateValue();


const add_to_basket =()=>{
  // dispach item into data layer
dispatch({
type:'add_to_basket',
item:{
  id: id,
  title:title,
  image:image,
  price:price,
  rating:rating
}
})
}


  return (
    <div className='product'>
    <div className='product__Info'>
    {id}
        <p>{title}</p>
        <p className='product__Price'><small>$</small><strong>{price}</strong></p>
        <div className='producr__Ratting'>
        {Array(rating).fill().map((_, i) => (
          <p><span>⭐</span></p>

        ))}
       
        </div>
    </div>
    <img src={image} alt=""/>
    <button onClick={add_to_basket}>Add To Basket</button>
    </div>
  )
}

export default Product