import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import faker from "faker";
import { Link } from "react-router-dom";

import useAdmin from "../../hooks/useAdmin";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);
  const { getCustomers } = useAdmin();

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("hola");
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    (async () => {
      const customers = await getCustomers();
      setCustomers(customers);
    })();
  }, []);

  return (
    <div className="w-full p-4 max-w-3xl mx-auto">
      <section className=" text-white">
        <h3 className="font-semibold text-xl">Clientes</h3>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Nombre del cliente"
            className="text-black w-full p-4 rounded-tl-lg rounded-bl-lg mt-4 outline-none border-none placeholder:text-gray-500"
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center p-4 bg-strongBlue rounded-tr-lg rounded-br-lg w-1/4 mt-4 hover:bg-opacity-90"
          >
            {loading ? (
              <AiOutlineLoading3Quarters size={25} className="animate-spin" />
            ) : (
              <AiOutlineSearch size={25} />
            )}
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-y-1 mt-4">
        {customers.map((customer) => (
          <div className="relative text-white bg-strongBlue rounded-lg p-4 cursor-pointer hover:bg-opacity-90">
            <Link
              to={`/clientes/${customer._id}`}
              className="font-semibold hover:underline"
            >
              {customer.firstName} {customer.lastName}
            </Link>
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
