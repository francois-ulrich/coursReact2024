import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7207",
  withCredentials: true,
});

export default axiosClient;
