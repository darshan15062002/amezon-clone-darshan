import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './Stateprovider';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css';

function Subtotal() {
  const navigate = useNavigate()
  const [{ basket } ,dispatch] = useStateValue();
  return (
    
    <div className='subtotal'>
    <CurrencyFormat
      renderText={(value) =>(
        <>
          <p>Subtotle ({basket.length} items): <strong>{value}</strong></p>
          <small className='subtotle__gift'>
            <input type="checkbox"/>This Order Contain Gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      thousandSeparator={true}
      displayType={"text"}
      prefix={"$"}

    />
    <button onClick={e=>navigate("/payment")}>Proceed To Checkout</button>
  
    </div>
  )
}

export default Subtotal