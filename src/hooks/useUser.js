import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import { signInService } from "../services/Auth";


const useUser = () => {


    const { jwt, setJwt, user, setUser, status, setStatus } = useContext(UserContext);


    const isAdmin = true;

    const signIn = (email, password) => {
        setStatus({ loading: true, error: false })
        const response = signInService(email, password);

        if (!response) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw new Error("Unexpected error ocurred at server")
        }

        if (response.error.message === "Password or email incorrect") {
            setStatus({ loading: false, error: true, msg: "La contraseña o el email son incorrectos" });
            throw new Error("Password or email incorrect")
        }



        setUser(response.payload)
        setJwt(response.token)



        setStatus({ loading: false, error: false })
    }

    return {
        signIn,
        isLogged: Boolean(jwt),
        isAdmin

    }

}

export default useUser