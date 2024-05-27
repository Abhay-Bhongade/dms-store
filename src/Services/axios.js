import axios from "axios";
//import config from "../config";
import { getLocalStorageToken } from "../Utils/common";
const client = axios.create({});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const APIrequest = (endpoint, payload = {}, method = "get", headers = {}) => {
  const tokens = getLocalStorageToken();
const API_BASE_URL = "http://dmsapp.tekzee.in/api/distributor/"
  if (tokens) {
    headers.token = tokens;
  }
  let axiosConfig = {
    method: method.toLowerCase(),
  };

  if (method === "get") {
    axiosConfig.params = payload;
  } else {
    axiosConfig.data = payload;
  }

  return client(`${API_BASE_URL}${endpoint}`, axiosConfig);
};
export default APIrequest;
