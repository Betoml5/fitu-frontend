import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const { id } = useParams();

  const getCustomerDetails = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {}, []);
  return <div>CustomerDetails</div>;
};

export default CustomerDetails;
