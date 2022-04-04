import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const MeetingForm = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { getCustomerDetails } = useAdmin();

  useEffect(() => {
    getCustomerDetails(id)
      .then((data) => setCustomer(data))
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }, []);

  return (
    <div>
      <div>
        <form>
          <label htmlFor="firstName">Nombre</label>
          <input type="text" disabled defaultValue={customer.firstName} />
          <input type="text" disabled defaultValue={customer.lastName} />
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
