import axios from 'axios'

export default function CallApi(){
    const axiosInstance = axios.create({
        baseURL : 'https://localhost:44351/'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err => Promise.reject(err) 
    )

    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        err => Promise.reject(err) 
    )

    return axiosInstance
}