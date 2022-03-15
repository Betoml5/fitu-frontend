import React from "react";
import { Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import Login from "../pages/Login";

const PrivateRoutes = () => {
  const { isLogged } = useUser();

  return isLogged ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
