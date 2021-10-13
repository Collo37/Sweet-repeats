import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";

const BEARER_TOKEN = localStorage.getItem("Token");
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: BEARER_TOKEN },
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: BEARER_TOKEN },
});

export default axios;
