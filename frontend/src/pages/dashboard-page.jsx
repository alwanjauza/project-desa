import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function DashboardPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div>
      <h1>Ini page dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
