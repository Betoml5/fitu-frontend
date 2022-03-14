import React, { useState } from "react";


export const UserContext = React.createContext({});


const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});


    return (
        <UserContext.Provider >
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider