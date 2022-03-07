import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className=" text-white font-semibold p-4">
      <p className="text-3xl">Lista de clientes</p>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name.firstname} {user.name.lastname}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
