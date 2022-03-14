import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/User";
import { signInService } from "../services/Auth";
import { useNavigate } from "react-router-dom";


const useUser = () => {

    const [, setCookie] = useCookies(['jwt']);
    const { jwt, setJwt, setUser, setStatus } = useContext(UserContext);
    const isAdmin = true;

    const navigate = useNavigate();

    const signIn = async (email, password) => {
        setStatus({ loading: true, error: false })
        const response = await signInService(email, password);

        if (!response) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw new Error("Unexpected error ocurred at server")
        }

        if (response.error.message === "Password or email incorrect") {
            setStatus({ loading: false, error: true, msg: "La contraseña o el email son incorrectos" });
            throw new Error("Password or email incorrect")
        }

        // Guardamos el usuario en el localStorage
        window.localStorage.setItem(JSON.stringify(response.payload))

        // Seteamos una Cookie con el token
        setCookie("jwt", response.token)
        setUser(response.payload)
        setJwt(response.token)
        setStatus({ loading: false, error: false })
        navigate("/")

    }

    return {
        signIn,
        isLogged: Boolean(jwt),
        isAdmin

    }

}

export default useUser