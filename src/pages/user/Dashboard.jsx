import React from "react";
import { GiPencilRuler } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="w-full text-white p-4">
      <h3 className="text-xl font-semibold">Dashboard</h3>
      <h4 className="my-4">Jesus Alberto Martinez</h4>

      <section className="grid gap-y-2">
        <section className="relative bg-strongBlue p-4 rounded-lg">
          <p>Cintura</p>
          <p className="text-xl font-bold">83cm</p>
          <GiPencilRuler size={20} className="absolute right-2 top-2 " />
        </section>
        <section className="relative bg-strongBlue p-4 rounded-lg">
          <p>Abdomen</p>
          <p className="text-xl font-bold">23cm</p>
          <GiPencilRuler size={20} className="absolute right-2 top-2 " />
        </section>
        <section className="relative bg-strongBlue p-4 rounded-lg">
          <p>Pierna</p>
          <p className="text-xl font-bold">43cm</p>
          <GiPencilRuler size={20} className="absolute right-2 top-2 " />
        </section>
        <section className="relative bg-strongBlue p-4 rounded-lg">
          <p>Gluteo</p>
          <p className="text-xl font-bold">73cm</p>
          <GiPencilRuler size={20} className="absolute right-2 top-2 " />
        </section>
        <section className="relative bg-strongBlue p-4 rounded-lg">
          <p>Brazo</p>
          <p className="text-xl font-bold">13cm</p>
          <GiPencilRuler size={20} className="absolute right-2 top-2 " />
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
