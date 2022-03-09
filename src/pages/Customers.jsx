import React from "react";

import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

import faker from "faker";

const Customers = () => {
  return (
    <div className="w-full p-4">
      <section className=" text-white">
        <h3 className="font-semibold text-xl">Clientes</h3>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="text-black w-full p-4 rounded-tl-lg rounded-bl-lg mt-4 outline-none border-none placeholder:text-gray-500"
          />
          <button className="flex items-center justify-center p-4 bg-strongBlue rounded-tr-lg rounded-br-lg w-1/4 mt-4">
            <AiOutlineSearch size={26} />
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-y-1 mt-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="relative text-white bg-strongBlue rounded-lg p-4">
            <p className="font-semibold">
              {faker.name.firstName()} {faker.name.lastName()}
            </p>
            <p>{faker.phone.phoneNumber()}</p>
            <p>Ultima cita: {faker.date.weekday()}</p>
            <AiOutlineUser size={25} className="absolute right-2 top-2" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Customers;
