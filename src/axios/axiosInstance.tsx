import axios, { AxiosError } from 'axios';
import SweatAlert from '../tools/alert';
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3100',
    baseURL: 'http://3.144.242.111:3100',
    headers: {
        Authorization: '',
    },
});

axiosInstance.interceptors.response.use((response: any) => response, (error: any) => {
    console.log("ERROR", error.code)
    if (!error.response) {
        return;
    }
    if (error.code === 'ERR_NETWORK') {
        SweatAlert.showError(error!.response!.data['message'], "Poor connection detected!! <br /> Please check your network connection");
        return;
    }
    if (error.response?.status === 400) {
        SweatAlert.showError(error!.response!.data['message'], "Invalid Request")
    }
    if (error.response?.status === 404) {
        SweatAlert.showError(error!.response!.data['message'], "Request Url not found")
    }
    if (error.response?.status === 401) {
        console.log("Unathorized");
    }
    throw error;
});

axiosInstance.interceptors.response.use(async (response: any) => response, (error: any) => {
    if (!error.response) {
        return;
    }
    if (error?.response?.status === 500) {
        console.log('error.response', error.response)
        return error.response
    }
    if (error?.response?.status === 404) {
        console.log('error.response', error.response)
        return error.response
    }
    throw error;
});

axiosInstance.interceptors.request.use(
    async (config: any) => {
        const sessionToken = await localStorage.getItem('token');
        if (sessionToken) {
            config.headers.Authorization = 'Bearer ' + sessionToken
            return config;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;