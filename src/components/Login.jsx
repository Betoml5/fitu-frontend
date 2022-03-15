import React from "react";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import { AiOutlineSearch, AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signIn, status } = useUser();
  const onSubmit = (data) => signIn(data.email, data.password);

  return (
    <div className="self-center w-full max-w-xl mx-auto p-4">
      <h3 className="text-white text-xl font-semibold my-4">Iniciar sesión</h3>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="text-white  my-2">
          Correo electronico
        </label>
        <input
          type="email"
          autoComplete
          placeholder="Correo electronico"
          name="email"
          className="text-black rounded-md p-4"
          required
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}
        <label htmlFor="password" className="text-white  my-2">
          Contraseña
        </label>
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="text-black rounded-md p-4"
          required
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="mt-4">Este campo es requerido</span>
        )}{" "}
        {status.error && (
          <span className="text-red-500 mt-4">{status.msg}</span>
        )}
        <p className="text-white mt-4">
          ¿Olvidaste tu contraseña?{" "}
          <span className="underline cursor-pointer">Recuperala</span>
        </p>
        <button className="flex justify-center text-white bg-strongBlue rounded-lg  my-4 p-4 hover:bg-opacity-90">
          {status.loading ? (
            <AiOutlineLoading3Quarters size={25} className="animate-spin" />
          ) : (
            "Iniciar Sesion"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
