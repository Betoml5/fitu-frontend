import React, { useEffect, useState } from "react";


export const UserContext = React.createContext({});


const UserProvider = ({ children }) => {
    const [status, setStatus] = useState({ loading: false, error: false, msg: "" })
    const [user, setUser] = useState(() => window.localStorage("user"));
    const [jwt, setJwt] = useState(() => window.localStorage("jwt"))


    useEffect(() => {
        setUser(() => JSON.parse(window.localStorage.getItem("user")));
        setJwt(() => window.localStorage.getItem("jwt"));
        return () => {
            setUser(null);
            setJwt("");
        };
    }, []);


    return (
        <UserContext.Provider value={{
            jwt, setJwt, user, setUser, status, setStatus
        }} >
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider