import React from "react";

const Settings = () => {
  return (
    <div className="p-4">
      <section className="text-white">
        <h3 className="text-xl font-semibold">Ajustes</h3>

        <section className="mt-4">
          <h3 className="my-2 font-semibold">Cambiar contraseña</h3>
          <form action="" className="flex flex-col">
            <input
              type="text"
              placeholder="Contraseña anterior"
              className="p-4 rounded-lg"
            />
            <input
              type="text"
              placeholder="Nueva contraseña"
              className="p-4 my-4 rounded-lg"
            />
          </form>
          <button className="p-4 bg-strongBlue rounded-lg w-full hover:bg-opacity-90">
            Cambiar
          </button>
        </section>
      </section>
    </div>
  );
};

export default Settings;
