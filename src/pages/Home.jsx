import React, { useEffect, useState } from "react";

import User from "../components/User";

const Home = () => {
  const labels = ["Usuarios", "Personas"];

  return (
    <div className=" ">
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default Home;
