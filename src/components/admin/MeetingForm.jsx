import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { format, parseISO } from "date-fns";

const MeetingForm = () => {
  const [customer, setCustomer] = useState({});
  // const [success, setSucces]  =
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
        throw error;
      });
  }, []);

  const onSubmit = async (data) => {
    console.log(data.date);
    let parsedDate = parseISO(data.date);
    let formatedDate = format(parsedDate, "dd/MM/yyyy");
    console.log(formatedDate);
  };

  return (
    <div className="w-full p-4">
      <form
        className="flex flex-col max-w-3xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="firstName" className="text-white font-semibold text-lg">
          Nombre
        </label>
        <input
          type="text"
          defaultValue={customer.firstName}
          className="p-2 rounded-md mt-2"
          readOnly
        />
        <label
          htmlFor="lastName"
          className="text-white font-semibold text-lg mt-4"
        >
          Apellidos
        </label>
        <input
          type="text"
          defaultValue={customer.lastName}
          className="p-2 rounded-md mt-2"
          readOnly
        />
        <label
          htmlFor="phone "
          className="text-white font-semibold text-lg mt-4"
        >
          Numero de telefono
        </label>
        <input
          type="text"
          defaultValue={customer.phone}
          className="p-2 rounded-md mt-2"
          readOnly
        />
        <label htmlFor="date" className="text-white font-semibold text-lg mt-4">
          Fecha y hora
        </label>
        <input
          type="datetime-local"
          className="mt-4 p-4 rounded-md"
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="text-red-500 font-semibold my-4">
            La fecha y hora son requeridas
          </p>
        )}
        <button
          type="submit"
          className="bg-strongBlue p-4 mt-4 rounded-lg text-white font-semibold hover:bg-opacity-90"
        >
          Crear cita
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
