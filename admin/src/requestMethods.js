import axios from "axios";
const BASEURL = "http://localhost:4000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
//const TOKEN =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmViMWJlYzkwNjA4ZWJkYjllZjFiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDYwMDkyOCwiZXhwIjoxNjQ0ODYwMTI4fQ.wgir-1FY2veuKZSJ9t27cuAKf_sExJxs3FR9oZteiMQ";
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmViMWJlYzkwNjA4ZWJkYjllZjFiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkyODAzMywiZXhwIjoxNjQ1MTg3MjMzfQ.uiFcRQZogKC2v9WJYuIEbCQ6spRI73OL85zIJp47egw";
console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken
);
export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const userRequest = axios.create({
  baseURL: BASEURL,
  headers: { token: `Bearer ${TOKEN}` },
});
