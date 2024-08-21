import axios from "axios";
import { APP_CONSTANTS } from "../globals/common";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const axiosInstance: any = axios.create({
  baseURL: APP_CONSTANTS.BASE_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

axiosInstance.interceptors.request.use((config: any) => {
  const token: any = cookies().get('access_token'); // Retrieve auth token from localStorage
  if (token?.value) config.headers.Authorization = `Bearer ${token.value}`;
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: any) => {
  return response;
}, (error: any) => {
  if (error.response?.status === 401) redirect('/login')
  return Promise.reject(error);
});

export default axiosInstance;