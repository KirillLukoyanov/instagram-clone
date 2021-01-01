import React from "react";
import { LoginForm, Footer } from "../../components";
import "./Login.css";
import { auth } from "../../Firebase/Firebase";

function Login() {
  const login = (event, emailOrPhone, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(emailOrPhone, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginPage">
      <LoginForm className="loginPage__loginForm" loginFunc={login} />
      <Footer />
    </div>
  );
}

export default Login;
