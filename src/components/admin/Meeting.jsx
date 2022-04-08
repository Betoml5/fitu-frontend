import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { parseISO, format } from "date-fns";

const Meeting = ({ meeting }) => {
  const { deleteMeeting } = useAdmin();

  return (
    <div className="flex flex-col justify-center w-full  text-white bg-strongBlue shadow-lg rounded-lg p-4 cursor-pointer ">
      <Link to={`/clientes/${meeting.user._id}`}>
        Cliente:{" "}
        <span
          className={`${meeting.completed && "line-through"} hover:underline`}
        >
          {meeting.user.firstName} {meeting.user.lastName}
        </span>
      </Link>
      <p>Edad: {meeting.user.age}</p>
      <p>Fecha y hora: {format(parseISO(meeting.date), "dd/MM/yyyy HH:mm")}</p>
      <div className="flex  text-sm mt-4">
        <button
          className="bg-red-600 p-2 rounded-md mr-2 hover:bg-opacity-90"
          onClick={() => deleteMeeting(meeting._id)}
        >
          Borrar
        </button>
        <button className="bg-green-500 p-2 rounded-md hover:bg-opacity-90">
          Marcar como completada
        </button>
      </div>
    </div>
  );
};

export default Meeting;
