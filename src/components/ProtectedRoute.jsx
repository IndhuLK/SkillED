import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // localStorage/sessionStorage-ல login check பண்ணலாம்
  const isAuth = localStorage.getItem("isAdminAuth"); 

  if (!isAuth) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
