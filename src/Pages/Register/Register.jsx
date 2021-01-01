import React from "react";
import { Footer, RegisterForm } from "../../components";
import "./Register.css";

function Register() {
  return (
    <div className="registerPage">
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default Register;
