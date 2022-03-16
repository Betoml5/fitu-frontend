import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
  const params = useParams();

  console.log(params);
  return <div>CustomerDetails</div>;
};

export default CustomerDetails;
