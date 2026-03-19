import axios from 'axios';

// Create an axios instance with a configurable base URL
const apiClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000', // Use environment variable if set
  timeout: 1000,
});

// Optional: Configure request/response interceptors
apiClient.interceptors.request.use(config => {
  // Logic before request is sent
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});

apiClient.interceptors.response.use(response => {
  return response.data; // Return only the data part of the response
}, error => {
  // Handle errors
  console.error('API Error:', error);
  return Promise.reject(error);
});

export default apiClient;
