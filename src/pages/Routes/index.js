import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //   const auth = useAuth();
  const isAuthenticated = /* Check if the user is authenticated */ true;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
