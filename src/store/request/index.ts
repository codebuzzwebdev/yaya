import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const request = async <T>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await axiosInstance({
      url: endpoint,
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
      message: response.statusText,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return Promise.reject({
        status: error.response?.status || 500,
        message: error.response?.data?.message || "An error occurred",
      });
    }
    return Promise.reject({
      status: 500,
      message: "An unexpected error occurred",
    });
  }
};

export default request;
