import React, { useEffect, useState } from "react";
import Meeting from "../../components/admin/Meeting";

import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  const navigate = useNavigate();
  const { getAllMeetings } = useAdmin();

  useEffect(() => {
    getAllMeetings()
      .then((data) => setMeetings(data))
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className="w-full p-4">
      <div className="flex items-center text-white mb-4">
        <BiArrowBack
          size={35}
          color="white"
          className="cursor-pointer mr-2"
          onClick={() => navigate(-1)}
        />
        <p>Volver</p>
      </div>
      {meetings.length > 0 ? (
        <section className="grid gap-y-4 	 auto-rows-min	 grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3  items-center">
          {meetings.map((meeting) => {
            let meetingFilter = {
              date: meeting.date,
              user: meeting.user,
              ...meeting,
            };
            return <Meeting meeting={meetingFilter} />;
          })}
        </section>
      ) : (
        <section className="flex flex-col p-4 shadow-md mx-auto max-w-xl">
          <p className="text-white">Aun no hay citas</p>
          <Link
            to="/clientes"
            className="text-white mt-2 rounded-lg bg-strongBlue p-2 w-max hover:bg-opacity-90"
          >
            Crear una
          </Link>
        </section>
      )}
    </div>
  );
};

export default Meetings;
