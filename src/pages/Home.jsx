import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import Login from "../components/Login";

const Home = () => {
  const { isLogged } = useUser();

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="self-center w-full ">
      <section className="text-white p-4">
        <Login />
      </section>
    </div>
  );
};

export default Home;
