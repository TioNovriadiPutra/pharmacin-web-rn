import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://935e-2001-448a-2083-f680-1d3e-bdd9-9092-c20.ngrok-free.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
