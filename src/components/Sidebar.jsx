import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Sidebar = () => {
  const [view, setView] = useState(false);

  const onViewPress = () => {
    setView(!view);
  };

  return (
    <div
      className={`  h-screen max-w-xs bg-[#141E27] text-white static transition-all duration-700 ease-in-out  ${
        view ? "w-1/2 " : "w-min "
      }`}
    >
      <button className="p-4" onClick={onViewPress}>
        <AiOutlineMenu size={30} />
      </button>
      {view && (
        <div className={`flex flex-col items-center justify-around h-3/4 `}>
          <p>Opcion 1</p>
          <p>Opcion 1</p>
          <p>Opcion 1</p>
          <p>Opcion 1</p>
          <p>Opcion 1</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
