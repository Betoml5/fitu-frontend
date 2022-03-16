import { useContext } from "react";
import { useCookies } from "react-cookie";
import UserContext from "../context/User";
import { signInService } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const useUser = () => {

    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const { jwt, setJwt, setUser, setStatus, status, user } = useContext(UserContext);
    const navigate = useNavigate();

    const signIn = async (email, password) => {
        try {
            setStatus({ loading: true, error: false })
            const response = await signInService(email, password);
            if (!response) {
                setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
                return;
            }

            if (response?.response?.data.error.message === "Password or email incorrect") {
                setStatus({ loading: false, error: true, msg: "La contraseña o el email son incorrectos" });
                return;
            }

            // Guardamos el usuario en el localStorage
            window.localStorage.setItem("user", JSON.stringify(response.payload.user))

            // Seteamos una Cookie con el token
            setCookie("jwt", response.token, { maxAge: 2592000, httpOnly: false })
            setUser(response.payload.user)
            setJwt(response.token)
            setStatus({ loading: false, error: false })
            navigate("/dashboard")
        } catch (error) {
            setStatus({ loading: false, error: true, msg: "Ocurrio un error inesperado en el servidor" })
            throw error;
        }
    }

    const logout = () => {
        window.localStorage.removeItem("user");
        setJwt(null)
        setUser(null);
        removeCookie("jwt");
        navigate("/")
    }

    return {
        signIn,
        logout,
        isLogged: Boolean(jwt),
        jwt,
        user,
        status,
    }

}

export default useUser