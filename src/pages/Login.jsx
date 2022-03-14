import React from "react";
import useUser from "../hooks/useUser";

const Login = () => {
  const { signIn } = useUser();

  return (
    <div className="self-center w-full max-w-xl mx-auto p-4">
      <h3 className="text-white text-xl font-semibold my-4">Iniciar sesión</h3>
      <form action="" className="flex flex-col  ">
        <label htmlFor="email" className="text-white  my-2">
          Correo electronico
        </label>
        <input
          type="email"
          autoComplete
          placeholder="Correo electronico"
          name="email"
          required
          className="rounded-md p-4"
        />
        <label htmlFor="password" className="text-white  my-2">
          Contraseña
        </label>
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="rounded-md p-4"
        />
        <p className="text-white mt-4">
          ¿Olvidaste tu contraseña?{" "}
          <span className="underline cursor-pointer">Recuperala</span>
        </p>
        <button className="text-white bg-strongBlue rounded-lg  my-4 p-4 hover:bg-opacity-90">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
