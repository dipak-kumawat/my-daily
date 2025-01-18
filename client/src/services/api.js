// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
//   baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
const API = axios.create({
  });

// Add request interceptor for debugging
// api.interceptors.request.use(
//   config => {
//     console.log('Request:', config.method.toUpperCase(), config.url);
//     return config;
//   },
//   error => {
//     console.error('Request Error:', error);
//     return Promise.reject(error);
//   }
// );



export const authApi = {
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response;
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      throw error;
    }
  },
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response;
    } catch (error) {
      console.error('Register Error:', error.response?.data || error.message);
      throw error;
    }
  }
};