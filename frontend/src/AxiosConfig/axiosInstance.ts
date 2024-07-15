
import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "https://doctime.live/",
  timeout: 100000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

// Request interceptor to add Authorization header with the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config; // Return the updated config
  },
  (error) => {
    return Promise.reject(error); // Forward the error
  }
);



export default axiosInstance;

