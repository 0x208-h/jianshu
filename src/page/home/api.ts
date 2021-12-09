import axios from "axios";

export const fetchHomeData = () =>
  axios
    .get("/api/home.json")
    .then((res) => res.data)
    .catch((err) => err);

export const getHomeMoreList = () =>
  axios
    .get("/api/homeList.json")
    .then((res) => res.data)
    .catch((err) => err);
