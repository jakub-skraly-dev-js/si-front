
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://si-back-t881.onrender.com', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
