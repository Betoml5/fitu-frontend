import React from "react";

const CustomerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col w-full  p-4 h-min" onSubmit={handleSubmit}>
      <h3 className="text-white text-xl my-4">Nuevo Cliente</h3>
      <input type="text" placeholder="Nombre " className="p-4" required />
      <input type="number" placeholder="Edad" className="p-4 my-2" required />
      <select name="sexo" id="sexo" className="p-2" required>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
      <button className="bg-strongBlue p-4 mt-4 rounded-md text-white ">
        Agregar
      </button>
    </form>
  );
};

export default CustomerForm;
