import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://micro-earnings-server.vercel.app',
    // baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuth();
    // console.log(user, 'from axios secure');
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(response => response, async error => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;