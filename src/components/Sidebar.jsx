import React, { useState } from "react";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`h-screen ${
        open ? "w-56" : "w-20"
      } duration-500  bg-primary text-white sticky p-4  `}
    >
      <div>
        <AiOutlineMenu
          size={30}
          onClick={() => setOpen(!open)}
          className={`duration-500 ${
            open && "rotate-[360deg]"
          }  cursor-pointer`}
        />

        <Link to="/" className="sideBarItem">
          <AiFillHome size={30} />
          <p className={`${!open && "hidden"} sideBarItemText `}>Inicio</p>
        </Link>
        <Link to="/clientes/nuevo" className="sideBarItem">
          <FaUserPlus size={30} />
          <p className={`${!open && "hidden"} sideBarItemText `}>Nuevo</p>
        </Link>
        <Link to="/clientes" className="sideBarItem">
          <BsFillPeopleFill size={30} />
          <p className={`${!open && "hidden"} sideBarItemText `}>Clientes</p>
        </Link>
        <Link to="/ajustes" className="sideBarItem">
          <IoMdSettings size={30} />
          <p className={`${!open && "hidden"} sideBarItemText `}>Ajustes</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
