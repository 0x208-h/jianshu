import axios from "axios";
export const fetchDetailInfo = (id: number) =>
  axios
    .get(`/api/detail.json?id=${id}`)
    .then((res) => res.data)
    .catch((res) => res);
