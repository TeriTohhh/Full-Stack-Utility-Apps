import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    // navigate("/login");
    navigate('/login', { replace: true }); 
  };

  return (
    <header className="header">
      <div className="header-content">
        {isLoggedIn && (
          <>
            <span className="username">Hi, {localStorage.getItem("name")}</span>
            <div className="nav-buttons">
              <button onClick={() => navigate("/")} className="header-btn">🏠 Home</button>
              <button onClick={() => navigate("/profile")} className="header-btn">👤 Profile</button>
              <button onClick={() => navigate("/forgot-password")} className="header-btn">🔐 Forgot Password</button>
              <button onClick={() => navigate("/change-password")} className="header-btn">🔑 Change Password</button>
              {/* <button onClick={() => navigate("/update-picture")} className="header-btn">🖼️ Update Picture</button> */}
              <button onClick={handleLogout} className="header-btn logout-btn">🚪 Logout</button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
