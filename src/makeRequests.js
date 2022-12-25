import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    api_key: process.env.REACT_APP_API_TOKEN,
  },
});
