import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import Login from "./Login";

const PrivateRoutes = () => {
  const { isLogged, user } = useUser();

  if (user.role === "admin") {
    return <Navigate to="/fm/dashboard" />;
  }

  return isLogged ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
