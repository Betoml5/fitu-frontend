import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const CustomerDetails = () => {
  const { id } = useParams();
  const { getCustomerDetails } = useAdmin();

  const [customer, setCustomer] = useState({});

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
    <div>
      <section className="text-white p-4">
        <p>
          Nombre: {customer?.firstName} {customer?.lastName}
        </p>
        <p>Edad: {customer?.age}</p>
        <p>Peso: {customer?.weight}</p>
      </section>
    </div>
  );
};

export default CustomerDetails;
