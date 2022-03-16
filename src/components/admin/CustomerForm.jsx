import React, { useState } from "react";

const CustomerForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const nextStep = () => {};

  const previusStep = () => {};

  const inputStyles = "p-4 rounded-lg w-full my-2";

  return (
    <form
      id="customerForm"
      name="customerForm"
      className="w-full max-w-3xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-11/12 mx-auto">
        <label htmlFor="customerForm" className="text-white text-xl mt-4">
          Nuevo cliente
        </label>
        {step === 1 && (
          <h3 className="bg-white py-2 px-4 my-4 rounded-full">
            Datos generales
          </h3>
        )}
        {step === 1 && (
          <div>
            <input type="text" placeholder="Nombres" className={inputStyles} />
            <input
              type="text"
              placeholder="Apellido Paterno"
              className={inputStyles}
            />
          </div>
        )}
        {/* <label htmlFor="customerForm" className="text-white text-xl mt-4">
          Nuevo cliente
        </label>
        <input type="text" placeholder="Nombres" className={inputStyles} />
        <input
          type="text"
          placeholder="Apellido Paterno"
          className={inputStyles}
        />
        <input
          type="text"
          placeholder="Apellido Materno"
          className={inputStyles}
        />
        <input type="number" placeholder="Edad" className={inputStyles} />
        <select name="sexo" id="sexo" className={inputStyles}>
          <option value="man">Masculino</option>
          <option value="woman">Femenino</option>
        </select>
        <button
          className={`${inputStyles} bg-strongBlue text-white hover:bg-opacity-90`}
        >
          Agregar
        </button> */}
      </div>
    </form>
  );
};

export default CustomerForm;
