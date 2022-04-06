import axios from "axios";
const BASEURL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmViMWJlYzkwNjA4ZWJkYjllZjFiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDYwMDkyOCwiZXhwIjoxNjQ0ODYwMTI4fQ.wgir-1FY2veuKZSJ9t27cuAKf_sExJxs3FR9oZteiMQ";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//   .accessToken;
export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const userRequest = axios.create({
  baseURL: BASEURL,
  header: { token: `Bearer ${TOKEN}` },
});
