import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Adjust the path based on your project structure
import LoadingPage from "../pages/loading-page";

const ProtectedRoute = ({ element }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth === null) {
    // Handle loading state if auth status is not determined yet
    return <LoadingPage />;
  }

  if (!auth) {
    // Redirect to login page if user is not authenticated
    return <Navigate to='/auth/login' state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRoute;
