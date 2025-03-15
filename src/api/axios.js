import axios from "axios";

const axiosInstance = axios.create({
  // local version
  // baseURL: "http://127.0.0.1:5001/clone-fb0c9/us-central1/api",
  baseURL: "http://localhost:5000/",

  // deployed version
  //   baseURL: "https://amazon-backend-4kfd.onrender.com/",
});

export { axiosInstance };
