import { useContext } from "react"
import UserContext from "../context/User"
import { getCustomersService, createCustomerService } from "../services/Admin";

const useAdmin = () => {

    const { setStatus } = useContext(UserContext);

    const getCustomers = async () => {
        try {
            setStatus({ loading: true, error: false })
            const data = await getCustomersService();

            if (!data) {
                setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
                return;
            }
            if (data.response?.data?.error) {
                setStatus({ loading: false, error: true, msg: data.response.data.error.message })
                return;
            }


            return data;

        } catch (error) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw error;
        }
    }

    const createCustomer = async (customer) => {
        try {
            setStatus({ loading: true, error: false })
            const data = await createCustomerService(customer);
            if (!data) {
                setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
                return;
            }
            if (data.response?.data?.error) {
                setStatus({ loading: false, error: true, msg: data.response.data.error.message })
                return;
            }

            setStatus({ loading: false, error: false, msg: "Cliente creado correctamente" })

            return data;
        } catch (error) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw error
        }
    }



    return {
        getCustomers,
        createCustomer
    }


}

export default useAdmin