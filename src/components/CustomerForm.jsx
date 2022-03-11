import React from "react";

const CustomerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputStyles = "p-4 rounded-lg w-full my-2";

  return (
    <form
      id="customerForm"
      name="customerForm"
      className="w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-11/12 mx-auto">
        <label htmlFor="customerForm" className="text-white text-xl mt-4">
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
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
        <button className={`${inputStyles} bg-strongBlue text-white`}>
          Agregar
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;
