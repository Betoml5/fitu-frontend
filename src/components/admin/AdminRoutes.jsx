import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";

const AdminRoute = () => {
  const { isAdmin } = useUser();

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
