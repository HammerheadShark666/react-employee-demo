import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7140', // set your base URL here
});
  
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or from Redux store if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;