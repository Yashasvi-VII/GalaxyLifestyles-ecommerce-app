import axios from "axios";
const BASEURL = Backend Baseurl 
const TOKEN =provide token;

export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const userRequest = axios.create({
  baseURL: BASEURL,
  header: { token: `Bearer ${TOKEN}` },
});
