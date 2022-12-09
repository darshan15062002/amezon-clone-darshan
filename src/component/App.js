import React, { useEffect } from "react";

import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStateValue } from "./Stateprovider.js";
import Payment from "./Payment.js";




function App() {
  const [{}  ,dispatch] = useStateValue();


  useEffect(()=>{
    // only run when app componet ge load
    auth.onAuthStateChanged(authUser=>{
      console.log("the user is >>..",authUser);
      if(authUser){
        // if user is login or was login 
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        // user is loged out
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
  },[])
  return (
    <Router>

    
      <div>
      
        <Routes>

        
        <Route path="/" element={<> <Header/><Home/></>}/>

        <Route path="/checkout" element={<><Header/><Checkout/></>}/>
        <Route path="/payment" element={<><Header/><Payment/></>}/>
        <Route path="/login" element={<Login/>}/>
         
          
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
