import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const isLogged = true;
  const isAdmin = false;

  if (isAdmin) {
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
          {isLogged ? (
            <div>
              <Link to="/" className="sideBarItem">
                <AiFillHome size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>
                  Inicio
                </p>
              </Link>
              <Link to="/clientes/nuevo" className="sideBarItem">
                <FaUserPlus size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>Nuevo</p>
              </Link>
              <Link to="/clientes" className="sideBarItem">
                <BsFillPeopleFill size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>
                  Clientes
                </p>
              </Link>
              <Link to="/ajustes" className="sideBarItem">
                <IoMdSettings size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>
                  Ajustes
                </p>
              </Link>
              <div className="sideBarItem">
                <AiOutlineLogout size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>Salir</p>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/iniciar-sesion" className="sideBarItem">
                <AiOutlineLogin size={30} />
                <p className={`${!open && "hidden"} sideBarItemText `}>
                  Ingresar
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

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
        {isLogged ? (
          <div>
            <Link to="/" className="sideBarItem">
              <AiFillHome size={30} />
              <p className={`${!open && "hidden"} sideBarItemText `}>Inicio</p>
            </Link>

            <Link to="/" className="sideBarItem">
              <AiOutlineUser size={30} />
              <p className={`${!open && "hidden"} sideBarItemText `}>Cuenta</p>
            </Link>

            <Link to="/" className="sideBarItem">
              <AiOutlineLineChart size={30} />
              <p className={`${!open && "hidden"} sideBarItemText `}>
                Metricas
              </p>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/iniciar-sesion" className="sideBarItem">
              <AiOutlineLogin size={30} />
              <p className={`${!open && "hidden"} sideBarItemText `}>
                Ingresar
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
