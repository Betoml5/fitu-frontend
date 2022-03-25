import React from "react";
import { useForm } from "react-hook-form";

const Settings = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="newPassword" className="text-white ">
          Nueva Contraseña
        </label>
        <input
          type="text"
          placeholder="Nueva Contraseña"
          className="w-full rounded-md p-4 my-4"
          {...register("newpassword", { required: true })}
        />
        <label htmlFor="newPassword" className="text-white ">
          Vieja Contraseña
        </label>
        <input
          type="text"
          placeholder="Vieja Contraseña"
          className="w-full rounded-md p-4 mt-2"
          {...register("password", { required: true })}
        />
        <input
          type="submit"
          value="Cambiar"
          className=" font-semibold w-full  rounded-lg p-4 mt-4 cursor-pointer bg-strongBlue text-white hover:bg-opacity-90"
        />
      </form>
    </div>
  );
};

export default Settings;
