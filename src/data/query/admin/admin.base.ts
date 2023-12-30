import axios from "axios";
import { HTTP_URL } from "../../../config";

export const adminAdminApiInstance = axios.create({
  baseURL: `${HTTP_URL}/admin`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  // headers: {"Access-Control-Allow-Origin": "*"}
});
