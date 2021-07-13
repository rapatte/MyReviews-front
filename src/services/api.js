import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Pour chaque requete, on verifie si un token existe dans le localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
