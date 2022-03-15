import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import UserContext from "../context/User";
import { signInService } from "../services/Auth";
import { useNavigate } from "react-router-dom";


const useUser = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const { jwt, setJwt, setUser, setStatus, user } = useContext(UserContext);
    const navigate = useNavigate();




    const signIn = async (email, password) => {
        setStatus({ loading: true, error: false })
        const response = await signInService(email, password);
        console.log("response", response.payload.user)
        if (!response) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw new Error("Unexpected error ocurred at server")
        }

        if (response?.error?.message === "Password or email incorrect") {
            setStatus({ loading: false, error: true, msg: "La contraseña o el email son incorrectos" });
            throw new Error("Password or email incorrect")
        }

        // Guardamos el usuario en el localStorage
        window.localStorage.setItem("user", JSON.stringify(response.payload.user))

        // Seteamos una Cookie con el token
        setCookie("jwt", response.token)
        setUser(response.payload.user)
        setJwt(response.token)
        setStatus({ loading: false, error: false })
        navigate("/dashboard")
    }

    const logout = () => {

        window.localStorage.removeItem("user");

        setJwt(null)
        setUser(null);
        removeCookie("jwt");
        navigate("/iniciar-sesion")

    }

    return {
        signIn,
        logout,
        isLogged: Boolean(jwt),
        jwt,
        user
    }

}

export default useUser