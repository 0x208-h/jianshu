import axios from "axios";

export const fetchLogin = (account: string, password: string) =>
  axios
    .get(`/api/login.json?account=${account}&password=${password}`)
    .then((res) => res.data)
    .catch((res) => res);
