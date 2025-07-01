import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm({ onRegister }) {
  const [name, setName] = useState(""); // New
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    onRegister({ name, email, password }); // Pass all 3 values
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>

      <p className="switch-auth">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterForm;
