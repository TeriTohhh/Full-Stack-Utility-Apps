const API_URL = "http://localhost:5000/api/auth";
import { useNavigate } from 'react-router-dom';

export const login = async (credentials) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token); 
    localStorage.setItem("id",data.data.id)
    localStorage.setItem("name",data.data.name)
    localStorage.setItem("email",data.data.email)
  }

  return data;
};

export const register = async (credentials) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return await res.json();
};

export const logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  // navigate('/login', { replace: true }); 

};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};