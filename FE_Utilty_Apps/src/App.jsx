import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TaskManager from "./components/TaskManager";
import NotFoundPage from "./components/NotFoundPage";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        {/* Redirect to dashboard if logged in */}
        <Route  path="/"  element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}/>

        {/* Separate route for task manager */}
        <Route path="/tasks" element={isLoggedIn ? <TaskManager /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
