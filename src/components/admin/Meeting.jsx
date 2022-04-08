import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { parseISO, format } from "date-fns";
import { AiOutlineClockCircle } from "react-icons/ai";

const Meeting = ({ meeting }) => {
  const { deleteMeeting } = useAdmin();

  const formatedDate = format(parseISO(meeting.date), "dd-MM-yyy HH:mm");
  const splitedDate = formatedDate.split(" ");
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
      <p className="flex items-center">
        Fecha y hora: {splitedDate[0]}{" "}
        <AiOutlineClockCircle size={18} className="ml-4 mr-1" />
        {splitedDate[1]}{" "}
      </p>
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
