import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pharmacin-api-v2-development.up.railway.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
