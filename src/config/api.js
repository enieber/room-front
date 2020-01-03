import axios from "axios";

const router = process.env.API_URL || "localhost:3333/api";
const instance = axios.create({
  baseURL: router,
  headers: {
    contentType: "application/json; charset=utf-8"
  }
});

export default instance;
