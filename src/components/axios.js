import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";

const BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjExNGViZmMwZjU0MGIyODBkOTQxZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzM4NTIxMjQsImV4cCI6MTYzNDAyNDkyNH0.GjrGtUS5nsDJ-_TES5-Vxzy81SRzasosrZhigcQkmaU";
const ADMIN_TOKEN =
  "Bearer eyJpZCI6IjYxNWU4OTAwY2YxOTU4OGU3MTQ1NzYwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzcxMjc2MywiZXhwIjoxNjMzODg1NTYzfQ.HYn__gaqzFPb1rgGy05-EKan7tXbWF165aAVaH6i9Gc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: BEARER_TOKEN },
});

export const adminRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: ADMIN_TOKEN },
});

export default axios;
