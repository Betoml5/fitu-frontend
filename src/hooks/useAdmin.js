import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/User";
import {
  getCustomersService,
  createCustomerService,
  findCustomerByNameService,
  getCustomerDetailsService,
} from "../services/Admin";

const useAdmin = () => {
  const { setStatus, status } = useContext(UserContext);
  const navigate = useNavigate();
  const getCustomers = async () => {
    try {
      setStatus({ loading: true, error: false });
      const data = await getCustomersService();

      if (!data) {
        setStatus({
          loading: false,
          error: true,
          msg: "Ocurrio un error inesperado en el servidor",
        });
        return;
      }
      if (data.response?.data?.error) {
        setStatus({
          loading: false,
          error: true,
          msg: data.response.data.error.message,
        });
        return;
      }
      setStatus({ loading: false, error: false });

      return data;
    } catch (error) {
      setStatus({
        loading: false,
        error: true,
        msg: "Ocurrio un error inesperado en el servidor",
      });
      throw error;
    }
  };

  const createCustomer = async (customer) => {
    try {
      setStatus({ loading: true, error: false });
      const data = await createCustomerService(customer);
      if (!data) {
        setStatus({
          loading: false,
          error: true,
          msg: "Ocurrio un error inesperado en el servidor",
        });
        return;
      }
      if (data.response?.data?.error) {
        setStatus({
          loading: false,
          error: true,
          msg: data.response.data.error.message,
        });
        return;
      }

      setStatus({
        loading: false,
        error: false,
        msg: "Cliente creado correctamente",
      });
      navigate("/clientes");

      return data;
    } catch (error) {
      setStatus({
        loading: false,
        error: true,
        msg: "Ocurrio un error inesperado en el servidor",
      });
      throw error;
    }
  };

  const findCustomerByName = async (name) => {
    try {
      setStatus({ loading: true, error: false, msg: "" });
      const data = await findCustomerByNameService(name);
      if (!data) {
        setStatus({
          loading: false,
          error: true,
          msg: "Ocurrio un error inesperado en el servidor",
        });
        return;
      }
      if (data.response?.data?.error) {
        setStatus({
          loading: false,
          error: true,
          msg: data.response.data.error.message,
        });
        return;
      }

      setStatus({
        loading: false,
        error: false,
      });
      return data;
    } catch (error) {
      setStatus({
        loading: false,
        error: true,
        msg: "Ocurrio un error inesperado en el servidor",
      });
      throw error;
    }
  };

  const getCustomerDetails = async (id) => {
    try {
      setStatus({ loading: true, error: false, msg: "" });
      const data = await getCustomerDetailsService(id);
      console.log(data);
      if (!data) {
        setStatus({
          loading: false,
          error: true,
          msg: "Ocurrio un error inesperado en el servidor",
        });
        return;
      }
      if (data.response?.data?.error) {
        setStatus({
          loading: false,
          error: true,
          msg: data.response.data.error.message,
        });
        return;
      }

      setStatus({
        loading: false,
        error: false,
      });
      return data;
    } catch (error) {
      setStatus({
        loading: false,
        error: true,
        msg: "Ocurrio un error inesperado en el servidor",
      });
      throw error;
    }
  };

  const createMeeting = async () => {
    try {
      setStatus({ loading: true, error: false, msg: "" });
    } catch (error) {}
  };

  return {
    getCustomers,
    createCustomer,
    findCustomerByName,
    getCustomerDetails,
    status,
  };
};

export default useAdmin;
