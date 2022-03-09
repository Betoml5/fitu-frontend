import React from "react";
import {
  AiOutlineUser,
  AiOutlineSchedule,
  AiOutlineMessage,
} from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";

const Home = () => {
  return (
    <div className="w-full max-w-3xl p-4">
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl">
          <p className="font-bold text-2xl">14</p>
          <p className="font-semibold text-lg">Clientes</p>
          <AiOutlineUser size={25} className="absolute right-2 top-2" />
        </div>
      </section>
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl my-2">
          <p className="font-bold text-2xl">29</p>
          <p className="font-semibold text-lg">Clientes pendientes</p>
          <BiUserVoice size={25} className="absolute right-2 top-2" />
        </div>
      </section>
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl my-2">
          <p className="font-bold text-2xl">2</p>
          <p className="font-semibold text-lg">Citas pendientes</p>
          <AiOutlineSchedule size={25} className="absolute right-2 top-2" />
        </div>
      </section>
      <section>
        <div className="relative bg-strongBlue p-4 text-white rounded-xl my-2">
          <p className="font-bold text-2xl">49</p>
          <p className="font-semibold text-lg">Mensajes pendientes</p>
          <AiOutlineMessage size={25} className="absolute right-2 top-2" />
        </div>
      </section>
    </div>
  );
};

export default Home;
