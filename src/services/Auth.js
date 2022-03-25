import axios from "axios";
const BASE_API = process.env.REACT_APP_API;

export const signInService = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_API}/auth/signin`, {
      email: email,
      password: password,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const signUpService = async (user) => {
  try {
    const response = await axios.post(`${BASE_API}/auth/signup`, {
      user: user,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};
