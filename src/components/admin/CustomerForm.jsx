import React, { useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { ImManWoman } from "react-icons/im";
import {
  AiFillFolderOpen,
  AiOutlineUser,
  AiOutlineCheck,
} from "react-icons/ai";

const CustomerForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const inputStyles = "p-4 rounded-lg w-full my-2 ";

  return (
    <form
      id="customerForm"
      name="customerForm"
      className="w-full max-w-3xl mx-auto self-center"
      onSubmit={handleSubmit}
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
            <label htmlFor="name" className="text-white text-lg">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ana Sofia"
              className={inputStyles}
            />
            <label htmlFor="lastName" className="text-white text-lg">
              Apellidos
            </label>
            <input
              type="text"
              placeholder="Perez Rodriguez"
              className={`${inputStyles} `}
            />
            <label htmlFor="lastName" className="text-white text-lg">
              Numero de celular
            </label>
            <input
              type="text"
              placeholder="8611262242"
              className={`${inputStyles} `}
            />
            <label htmlFor="lastName" className="text-white text-lg">
              Correo Electronico
            </label>
            <input
              type="text"
              placeholder="anasofia@hotmail.com"
              className={`${inputStyles} `}
            />
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
            />
            <label htmlFor="sex" className="text-white text-lg">
              Sexo
            </label>
            <select name="sex" id="sex" className={inputStyles}>
              <option value="man">Masculino</option>
              <option value="woman">Femenino</option>
            </select>
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="weight" className="text-white text-lg">
              Peso
            </label>
            <input
              type="number"
              placeholder="59kg"
              name="weight"
              id="weight"
              className={inputStyles}
            />
            <label htmlFor="leg" className="text-white text-lg">
              Pierna
            </label>
            <input
              type="number"
              placeholder="23cm"
              name="leg"
              id="leg"
              className={inputStyles}
            />
            <label htmlFor="arm" className="text-white text-lg">
              Brazo
            </label>
            <input
              type="number"
              placeholder="15cm"
              name="arm"
              id="arm"
              className={inputStyles}
            />

            <div className="flex justify-between">
              <div className=" w-1/2">
                <label htmlFor="arm" className="text-white text-lg">
                  Cintura
                </label>
                <input
                  type="number"
                  placeholder="15cm"
                  name="arm"
                  id="arm"
                  className={inputStyles}
                />
              </div>

              <div className="w-1/2 ml-1 text-right">
                <label htmlFor="arm" className="text-white text-lg">
                  Abdomen
                </label>
                <input
                  type="number"
                  placeholder="25cm"
                  name="arm"
                  id="arm"
                  className={`${inputStyles} text-right placeholder:text-right`}
                />
              </div>
            </div>
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
              type="button"
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
