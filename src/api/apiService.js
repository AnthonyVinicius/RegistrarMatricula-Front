import axios from "axios";

const api = axios.create({
  baseURL: "http://132.226.159.21:8080",
  headers: {
    "Content-Type": "application/json"
  },
});

const request = async (method, url, data = {}, params = {}) => {
  try {
    const response = await api.request({ method, url, data, params });
    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
};

export default request;
