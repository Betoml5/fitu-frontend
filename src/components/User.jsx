import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="shadow-xl p-6 text-white ">
      <p>Jesus Alberto Martinez</p>
      <p>Edad: 19</p>
      <p>Numero: 8611262242</p>

      <Link to="/" className="underline">
        Ver perfil
      </Link>
    </div>
  );
};

export default User;
