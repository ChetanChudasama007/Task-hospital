// PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userLogin = localStorage.getItem("userLogin");
  return userLogin ? element : <Navigate to="/" />;
};

export default PrivateRoute;
