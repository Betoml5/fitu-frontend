import useUser from "./useUser"

const useAuth = () => {

    const { isLogged } = useUser();

    return isLogged;
}

export default useAuth