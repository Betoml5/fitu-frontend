import axios from "axios";
const BASE_API = "http://localhost:3001/api";

export const createCustomerService = async (customer) => {
  try {
    const response = await axios.post(`${BASE_API}/auth/signup`, {
      user: customer,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getCustomersService = async () => {
  try {
    const response = await axios.get(`${BASE_API}/customers/all`);
    console.log(response.data.body);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const findCustomerByNameService = async (name) => {
  try {
    const response = await axios.get(
      `${BASE_API}/customers/customer?name=${name}`
    );
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getCustomerDetailsService = async (id) => {
  try {
<<<<<<< HEAD

  } catch (error) { }
=======
    const response = await axios.get(`${BASE_API}/customers/customer/${id}`);
    return response.data.body;
  } catch (error) {
    return error;
  }
>>>>>>> 22fe822801be2342af243d7831c7e317bdc6a747
};
