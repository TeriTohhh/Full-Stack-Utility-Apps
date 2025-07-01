import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      label: "To-Do Manager",
      emoji: "📝",
      route: "/tasks",
    },
    {
      label: "Profile",
      emoji: "👤",
      route: "/profile",
    },
    {
      label: "Expense Tracker",
      emoji: "💰",
      route: "/expense-tracker",
      // disabled: true,
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">👋 Welcome to Your Dashboard</h2>
      <p className="dashboard-subtext">Select a feature to begin:</p>

      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.label}
            onClick={() => {
              if (!card.disabled) navigate(card.route);
            }}
            className={`dashboard-card ${card.disabled ? "disabled" : ""}`}
          >
            <div className="dashboard-emoji">{card.emoji}</div>
            <div className="dashboard-label">{card.label}</div>
            {card.disabled && <div className="coming-soon">Coming Soon</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
