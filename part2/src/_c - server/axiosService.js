import axios from "axios";

const BASE_URL = "http://localhost:3001";

export default {
  getAll : (endpoint) => {
    const url = BASE_URL + endpoint;
    return axios.get(url);
  },
  
  getOne : (endpoint) => {
    const url = BASE_URL + endpoint;
    return axios.get(url);
  },

  post : (endpoint, data) => {
    const url = BASE_URL + endpoint;
    return axios.post(url, data);
  },

  put : (endpoint, data) => {
    const url = BASE_URL + endpoint;
    return axios.put(url, data);
  }, 
  
  delete : (endpoint) => {
    const url = BASE_URL + endpoint;
    return axios.delete(url);
  }
}; 