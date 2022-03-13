import React from "react";

const Meeting = ({ id }) => {
  return (
    <div className="flex flex-col justify-center w-full h-32 text-white bg-strongBlue shadow-lg rounded-lg p-4 cursor-pointer hover:bg-opacity-90">
      <p>Cliente: Jesus Alberto Martinez</p>
      <p>Edad: 19</p>
      <p>Hora de cita: 19:00</p>
    </div>
  );
};

export default Meeting;
