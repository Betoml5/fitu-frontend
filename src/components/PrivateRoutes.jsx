import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

const PrivateRoutes = ({ roles }) => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
