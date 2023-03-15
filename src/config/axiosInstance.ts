import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "http://192.168.1.90:3001",
    
})

export const AxiosInstanceAuth = axios.create({
    baseURL: "http://192.168.1.90:3001",
    headers:{
        token : document?.cookie ?? ''
    }
    
})