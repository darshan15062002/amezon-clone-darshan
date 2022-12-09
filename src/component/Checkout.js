import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./Stateprovider";

import Subtotal from "./Subtotal.js"

function Checkout() {
  const [{ basket ,user } ,dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="checkout__ad.jpg" alt="" />
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout__Title">Shopping Basket</h2>
{
  basket.map(item =>(
    <CheckoutProduct 
      id={item.id}
      title={item.title}
      price={item.price}
      rating={item.rating}
      image={item.image}

    />

  )
  )
}



      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}
export default Checkout
