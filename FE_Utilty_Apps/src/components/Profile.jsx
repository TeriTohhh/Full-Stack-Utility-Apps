import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  });

  return (
    <div className="profile-container">
      <h2>👤 Profile Details</h2>
      <div className="profile-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECXtEG_6-RV7CSNgNoYUGZE-JCliYm9g&s"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>username:</strong> cooler</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p> <strong>Phone No :</strong> 123456{" "} </p> 
          <p> <strong>Address :</strong> Epam Hyderbad </p>
          <button
            onClick={() => navigate("/update-picture")}
            className="update-picture-btn"
          >
            🖼️ Update Profile Picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
