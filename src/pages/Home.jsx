import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import Login from "./Login";

const Home = () => {
  const { isLogged } = useUser();

  return (
    <div className="w-full ">
      <section className="text-white p-4">
        <h3>Hola! Bienvenido a FIT U - FM GYM</h3>
        <Login />
      </section>
    </div>
  );
};

export default Home;
