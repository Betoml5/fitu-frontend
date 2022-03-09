import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className={`h-screen bg-[#141E27] text-white relative transition-all duration-700 ease-in-out p-4  `}
    >
      <div className="flex flex-col items-center justify-between h-1/2 ">
        <Link to="/">
          <AiFillHome size={30} />
        </Link>
        <Link to="/clientes/nuevo">
          <FaUserPlus size={30} />
        </Link>
        <BsFillPeopleFill size={30} />
        <IoMdSettings size={30} />
      </div>
    </div>
  );
};

export default Sidebar;
