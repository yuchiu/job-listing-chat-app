import axios from "axios";

const URL = "http://localhost:3200";

const API = {
  registerUser: async (email, password) => {
    const payload = await axios.post(`${URL}/auth/register`, {
      email,
      password
    });
    return payload.data;
  },

  loginUser: async (email, password) => {
    const payload = await axios.post(`${URL}/auth/login`, {
      email,
      password
    });
    return payload.data;
  }
};

export default API;
