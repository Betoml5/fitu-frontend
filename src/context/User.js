import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


const UserContext = React.createContext({});
export default UserContext;


export const UserProvider = ({ children }) => {

    const [cookies, setCookie] = useCookies('jwt');





    const [status, setStatus] = useState({ loading: false, error: false, msg: "" })
    const [jwt, setJwt] = useState(() => cookies.jwt);
    const [user, setUser] = useState(() => window.localStorage.getItem("user"));

    console.log("context", user)

    useEffect(() => {
        setUser(() => JSON.parse(window.localStorage.getItem("user")));
        setJwt(() => cookies.jwt);
        return () => {
            setUser(null);
            setJwt("");
        };
    }, [cookies.jwt]);


    return (
        <UserContext.Provider value={{
            jwt, setJwt, user, setUser, status, setStatus
        }} >
            {children}
        </UserContext.Provider>
    )

}
