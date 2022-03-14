import axios from "axios";
const BASE_API = "http://localhost:3001/api";

export const signInService = async (email, password) => {
    try {

        const response = await axios.post(`${BASE_API}/auth/signin`, {
            email: email,
            password: password
        });
        return response.data.body;
    } catch (error) {
        return error;
    }
}

export const signUpService = async (user) => {
    try {
        const response = await axios.post(`${BASE_API}/auth/signup`, { user: user });
        return response.data.body
    } catch (error) {
        return error;
    }
}