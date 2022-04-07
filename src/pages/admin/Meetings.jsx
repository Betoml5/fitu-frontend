import React, { useEffect, useState } from "react";
import Meeting from "../../components/admin/Meeting";
import { parseISO, format } from "date-fns";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  const navigate = useNavigate();
  const { getAllMeetings } = useAdmin();

  useEffect(() => {
    getAllMeetings()
      .then((data) => {
        console.log(data);
        setMeetings(data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className="w-full  p-4">
      <BiArrowBack
        size={25}
        color="white"
        className="mb-4"
        onClick={() => navigate(-1)}
      />
      <section className="grid gap-y-4 	 auto-rows-min	 grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3  items-center">
        {meetings.map((meeting) => {
          let meetingFilter = {
            date: format(parseISO(meeting.date), "MM/dd/yyyy HH:mm"),
            user: meeting.user,
            completed: meeting.completed,
          };
          return <Meeting meeting={meetingFilter} />;
        })}
        {/* <Meeting />
        <Meeting />
        <Meeting />
        <Meeting /> */}
      </section>
    </div>
  );
};

export default Meetings;
