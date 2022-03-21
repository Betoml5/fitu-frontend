import React, { useCallback, useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { ImManWoman } from "react-icons/im";
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";

import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { customerSchema } from "../../schemas/Customer";
const CustomerForm = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerSchema),
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const onSubmit = (data) => console.log(data);
  const inputStyles = "p-4 rounded-lg w-full my-2";
  return (
    <form
      id="customerForm"
      name="customerForm"
      className="w-full max-w-3xl mx-auto self-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div
            className={`${
              step === 1 && "border-2  animate-pulse"
            }  border-2 border-strongBlue bg-white rounded-full p-2 sm:p-4`}
          >
            <AiOutlineUser size={25} />
          </div>
          <div className="text-white text-xl mx-2 hidden w-0 md:block">-</div>
          <div
            className={`${
              step === 2 && "border-2  animate-pulse"
            } border-2 border-strongBlue bg-white rounded-full p-2 sm:p-4`}
          >
            <ImManWoman size={25} />
          </div>
          <div className="text-white text-xl mx-2 hidden w-0 md:block">-</div>
          <div
            className={`${
              step === 3 && "border-2  animate-pulse"
            } border-2 border-strongBlue bg-white rounded-full p-2 sm:p-4`}
          >
            <BsClipboardData size={25} />
          </div>
          <div className="text-white text-xl mx-2 hidden w-0 md:block">-</div>
          <div
            className={`${
              step === 4 && "border-2  animate-pulse"
            } border-2 border-strongBlue bg-white rounded-full p-2 sm:p-4`}
          >
            <AiOutlineCheck size={25} />
          </div>
        </div>

        {step === 1 && (
          <div>
            <label htmlFor="firstName" className="text-white text-lg">
              Nombre
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Ana Sofia"
              className={inputStyles}
              required
              {...register("firstName", { required: true })}
            />

            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
            <label htmlFor="lastName" className="text-white text-lg">
              Apellidos
            </label>
            <input
              type="text"
              placeholder="Perez Rodriguez"
              className={`${inputStyles} `}
              name="lastName"
              id="lastName"
              required
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
            <label htmlFor="lastName" className="text-white text-lg">
              Numero de celular
            </label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="8611262242"
              className={`${inputStyles} `}
              required
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
            <label htmlFor="lastName" className="text-white text-lg">
              Correo Electronico
            </label>
            <input
              type="text"
              placeholder="anasofia@hotmail.com"
              className={`${inputStyles} `}
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="age" className="text-white text-lg">
              Edad
            </label>
            <input
              type="number"
              placeholder="Edad"
              name="age"
              id="age"
              className={inputStyles}
              required
              {...register("age", { required: true })}
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
            <label htmlFor="sex" className="text-white text-lg">
              Sexo
            </label>
            <select
              name="sex"
              id="sex"
              className={inputStyles}
              required
              {...register("sex", { required: true })}
            >
              <option value="man">Masculino</option>
              <option value="woman">Femenino</option>
            </select>
            {errors.sex && (
              <p className="text-red-500">Este campo es obligatorio</p>
            )}
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <label htmlFor="weight" className="text-white text-lg">
                  Peso
                </label>
                <input
                  type="number"
                  placeholder="59kg"
                  name="weight"
                  id="weight"
                  className={inputStyles}
                  required
                  {...register("weight", { required: true })}
                />
                {errors.weight && (
                  <p className="text-red-500">{errors.weight.message}</p>
                )}
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="height" className="text-white text-lg">
                  Altura
                </label>
                <input
                  type="number"
                  placeholder="173cm"
                  name="height"
                  id="height"
                  className={inputStyles}
                  required
                  {...register("height", { required: true })}
                />
                {errors.height && (
                  <p className="text-red-500">{errors.height.message}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2">
                <label htmlFor="arm" className="text-white text-lg">
                  Brazo
                </label>
                <input
                  type="number"
                  placeholder="15cm"
                  name="arm"
                  id="arm"
                  className={inputStyles}
                  required
                  {...register("arm", { required: true })}
                />
                {errors.arm && (
                  <p className="text-red-500">{errors.arm.message}</p>
                )}
              </div>

              <div className="w-1/2 ml-2">
                <label htmlFor="leg" className="text-white text-lg">
                  Pierna
                </label>
                <input
                  type="number"
                  placeholder="23cm"
                  name="leg"
                  id="leg"
                  className={inputStyles}
                  required
                  {...register("leg", { required: true })}
                />
                {errors.leg && (
                  <p className="text-red-500">{errors.leg.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <div className=" w-1/2">
                <label htmlFor="waist" className="text-white text-lg">
                  Cintura
                </label>
                <input
                  type="number"
                  placeholder="15cm"
                  name="waist"
                  id="waist"
                  className={inputStyles}
                  required
                  {...register("waist", { required: true })}
                />
                {errors.waist && (
                  <p className="text-red-500">{errors.waist.message}</p>
                )}
              </div>

              <div className="w-1/2 ml-2 ">
                <label htmlFor="abdomen" className="text-white text-lg">
                  Abdomen
                </label>
                <input
                  type="number"
                  placeholder="25cm"
                  name="abdomen"
                  id="abdomen"
                  className={inputStyles}
                  required
                  {...register("abdomen", { required: true })}
                />
                {errors.abdomen && (
                  <p className="text-red-500">{errors.abdomen.message}</p>
                )}
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="text-white">
            <h3 className="text-xl">Confirmación de datos</h3>
            <div>
              <p>Nombre: {watch("firstName")}</p>
              <p>Apellidos: {watch("lastName")}</p>
              <p>Numero de celular {watch("phone")}</p>
              <p>Correo electronico {watch("email")}</p>
            </div>
            {Object.keys(errors).length > 0 && (
              <p className="text-xl font-bold my-4 text-red-500 ">
                Tienes algunos campos sin completar
              </p>
            )}
          </div>
        )}

        <section className="flex items-center justify-between flex-wrap mt-4">
          {step === 4 && (
            <button
              onSubmit={handleSubmit}
              type="submit"
              className=" text-white bg-strongBlue border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90rounded text-lg"
            >
              Enviar reporte
            </button>
          )}

          {step < 4 && (
            <button
              onClick={nextStep}
              className="inline-flex text-white bg-strongBlue border-0 py-2 px-6  focus:outline-none hover:bg-opacity-90 rounded text-lg"
            >
              Siguiente paso
            </button>
          )}
          {step > 1 && step < 5 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex text-white bg-strongBlue border-0 py-2 px-6 my-2 focus:outline-none hover:bg-opacity-90 rounded text-lg"
            >
              Volver
            </button>
          )}
          {step > 1 && (
            <button
              type="button"
              className="inline-flex text-white bg-red-700 border-0 py-2 px-6  focus:outline-none hover:bg-red-400 rounded text-lg"
              onClick={() => {
                setStep(1);
              }}
            >
              Cancelar
            </button>
          )}
          {step > 4 && (
            <section className="self-center  justify-self-center">
              Ups! Te perdiste
            </section>
          )}
        </section>
      </div>
    </form>
  );
};

export default CustomerForm;
