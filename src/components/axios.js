import axios from "axios";

const BASE_URL = "https://sweet-repeats.herokuapp.com/";

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
