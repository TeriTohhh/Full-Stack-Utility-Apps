// RegisterPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";
import { register } from "../components/auth/authService";
import "../styles/authForm.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (credentials) => {
    try {
      const result = await register(credentials);
      if (result.success) {
        navigate("/login");
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };
  
  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage;