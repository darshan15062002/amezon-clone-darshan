import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import "./login.css";

function Login() {
  const navigater = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigater("/");
      })
      .catch((error) => alert(error.message));

    // some firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // here succesfully created a remort user
        console.log(auth);
        if (auth) {
          navigater("/");
        }
      })
      .catch((error) => alert(error.message));
    // some fancy firebaser registeration
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="amazon_PNG21.png" />
      </Link>
      <div className="login__Container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="login__Signin" onClick={signIn}>
            Sign IN
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login__Register" onClick={register}>
            Create Your Amazon Account{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
