import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/api/v1/login/refresh', {
            email: auth.email,
            password: auth.password
        });

        setAuth( prev => {
            return { ...prev, accessToken: response.data.token }
        });

        return response.data.token;
    }

    return refresh;
}

export default useRefreshToken;