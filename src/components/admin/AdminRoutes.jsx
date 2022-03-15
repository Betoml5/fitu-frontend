import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";

const AdminRoute = () => {
  const { user } = useUser();

  return user.role === "admin" ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
