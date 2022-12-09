import { Link } from "@mui/material";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";

function Payment() {
    const [{ basket,user } ,dispatch] = useStateValue();
  return (
    <div className="payment">

      <div className="payment__container">
      <h1>CheckOut (<Link to="/checkout">{basket?.length}item</Link>) </h1>
        {/* patment section - deliveryaddress */}
        <div className="payment__Section">
        <div className="payment__Title">
<h3>Delivery Addrass</h3>
        </div>
        <div className="payment__Address">
        <p>{user?.email}</p>
        <p>thakur college</p>
        <p>kadivali east</p>
</div>


        </div>

        {/* payment section - reciew product  */}
        <div className="payment__Section">
        <div className="payment__Title">
<h3>Review Items and delivery</h3>
        </div>
        <div className="payment__Item">
            {basket.map(item =>
    <CheckoutProduct 
      id={item.id}
      title={item.title}
      price={item.price}
      rating={item.rating}
      image={item.image}

    />)}
        </div>
        


        </div>
        {/* pament section - payment checkout */}
        <div className="payment__Section">
        <div className="payment__Title"><h3>Payment Method</h3></div>


        </div>
      </div>
    </div>
  );
}

export default Payment;
