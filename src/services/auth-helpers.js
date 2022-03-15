import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export function getToken() {
    return cookies.get("jwt");
}

export function initAxiosInterceptors() {
    axios.interceptors.request.use(async function (config) {
        const token = getToken();

        if (token) {
            config.headers.Authorization = `bearer ${token}`;
        }
        return config;
    });
}