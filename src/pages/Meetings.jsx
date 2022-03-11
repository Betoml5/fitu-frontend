import React from "react";
import Meeting from "../components/Meeting";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Meetings = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  p-4">
      <BiArrowBack
        size={25}
        color="white"
        className="mb-4"
        onClick={() => navigate(-1)}
      />
      <section className="grid gap-y-4 	 auto-rows-min	 grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3  items-center">
        <Meeting />
        <Meeting />
        <Meeting />
        <Meeting />
      </section>
    </div>
  );
};

export default Meetings;
