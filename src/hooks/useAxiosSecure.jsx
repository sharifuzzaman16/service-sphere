import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://service-sphere-server.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            if (error.status === 401) {
                logOutUser()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch((err) => {
                    })
            }

            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;