import axios, { AxiosError, AxiosInstance } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
    baseURL: "http://localhost:4000/",
})

instanceAxios.interceptors.request.use(
    (config) => {
      return config;
    },
    (err: AxiosError) => {
      return Promise.reject(err);
    }
  );