import React from "react";
import { Link } from "react-router-dom";

const Meeting = ({ meeting }) => {
  const isCompleted = meeting.completed;
  console.log(isCompleted);

  return (
    <div className="flex flex-col justify-center w-full  text-white bg-strongBlue shadow-lg rounded-lg p-4 cursor-pointer ">
      <Link to={`/clientes/${meeting.user._id}`}>
        Cliente:{" "}
        <span className={`${isCompleted && "line-through"} hover:underline`}>
          {meeting.user.firstName} {meeting.user.lastName}
        </span>
      </Link>
      <p>Edad: {meeting.user.age}</p>
      <p>Fecha y hora: {meeting.date}</p>
      <div className="flex  text-sm mt-4">
        <button className="bg-red-600 p-2 rounded-lg mr-2 hover:bg-opacity-90">
          Borrar
        </button>
        <button className="bg-green-500 p-2 rounded-lg hover:bg-opacity-90">
          Marcar como completada
        </button>
      </div>
    </div>
  );
};

export default Meeting;
