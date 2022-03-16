import axios from "axios";
const BASE_API = "http://localhost:3001/api";

export const createCustomerService = async (customer) => {
    try {
        const response = await axios.post(`${BASE_API}/auth/signup`, { user: customer });
        return response.data.body;
    } catch (error) {
        return error;
    }
}

export const getCustomersService = async () => {
    try {
        const response = await axios.get(`${BASE_API}/customers/all`);
        return response.data.body;
    } catch (error) {
        return error;
    }
}

