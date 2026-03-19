// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Укажите ваше значение здесь
});

export default axiosInstance;