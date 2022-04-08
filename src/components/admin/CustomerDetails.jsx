import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

import { AiOutlineUser } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const CustomerDetails = () => {
  const { id } = useParams();
  const { getCustomerDetails } = useAdmin();
  const [customer, setCustomer] = useState({});

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await getCustomerDetails(id);
      setCustomer(response);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
    return () => {
      setCustomer(null);
    };
  }, []);
  return (
    <div className="w-full p-4 max-w-3xl mx-auto">
      <BiArrowBack
        className="cursor-pointer mb-4"
        size={35}
        color="#fff"
        onClick={() => navigate(-1)}
      />
      <section className="relative text-white p-4 shadow-lg ">
        <p>
          Nombre:{" "}
          <span className="font-semibold">
            {" "}
            {customer?.firstName} {customer?.lastName}
          </span>
        </p>
        <p>
          Edad: <span className="font-semibold">{customer?.age} años</span>
        </p>
        <p>
          Peso: <span className="font-semibold">{customer?.weight} cm</span>
        </p>
        <p>
          Altura: <span className="font-semibold">{customer?.height} cm</span>
        </p>
        <p>
          Pierna:{" "}
          <span className="font-semibold">{customer?.sizes?.leg} cm</span>
        </p>
        <p>
          Brazo:{" "}
          <span className="font-semibold">{customer?.sizes?.arm} cm</span>
        </p>
        <p>
          Cintura:{" "}
          <span className="font-semibold">{customer?.sizes?.waist} cm</span>
        </p>
        <p>
          Abdomen:{" "}
          <span className="font-semibold">{customer?.sizes?.abdomen} cm</span>
        </p>

        <AiOutlineUser size={25} className="absolute right-2 top-2" />
      </section>
    </div>
  );
};

export default CustomerDetails;
