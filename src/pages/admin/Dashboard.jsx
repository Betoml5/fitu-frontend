import React from "react";
import {
  AiOutlineUser,
  AiOutlineSchedule,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-2  w-full max-w-3xl p-4 mx-auto">
      <section>
        <h3 className="text-white text-xl font-semibold mb-6">Dashboard</h3>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl cursor-pointer hover:bg-opacity-90">
          <p className="font-bold text-2xl">14</p>
          <p className="font-semibold text-lg">Clientes</p>
          <AiOutlineUser size={25} className="absolute right-2 top-2" />
        </div>
      </section>
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl  cursor-pointer hover:bg-opacity-90">
          <p className="font-bold text-2xl">29</p>
          <p className="font-semibold text-lg">Clientes pendientes</p>
          <BiUserVoice size={25} className="absolute right-2 top-2" />
        </div>
      </section>
      <Link to="/citas">
        <section>
          <div className="relative bg-strongBlue p-4 text-white rounded-xl  cursor-pointer hover:bg-opacity-90">
            <p className="font-bold text-2xl">2</p>
            <p className="font-semibold text-lg">Citas pendientes</p>
            <AiOutlineSchedule size={25} className="absolute right-2 top-2" />
          </div>
        </section>
      </Link>
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl  cursor-pointer hover:bg-opacity-90">
          <p className="font-bold text-2xl">49</p>
          <p className="font-semibold text-lg">Mensajes pendientes</p>
          <AiOutlineMessage
            size={25}
            className="absolute right-2 top-2 animate-pulse"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
