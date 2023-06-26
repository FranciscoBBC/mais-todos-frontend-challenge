import axios from "axios";

const api = axios.create({
  baseURL: process.env.FAKE_STORE_API,
});

export default api;
