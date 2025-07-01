// LoginPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { login } from "../components/auth/authService";
import "../styles/authForm.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const credentials = { email, password };
    try {
      const user = await login(credentials); // Make API call to login
      if (user) {
        navigate("/"); // Navigate to home after successful login
        console.log("Login Successful");
      } else {
        // If no token is returned (i.e., login failed), show an alert
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Handle error during login
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  }; 

  return <LoginForm onSubmit={handleLogin} />;
}

export default LoginPage;