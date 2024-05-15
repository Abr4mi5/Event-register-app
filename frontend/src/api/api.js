import axios from "axios";
import { API } from "./consts";

const api = axios.create({
  baseURL: API,
});

export default api;
