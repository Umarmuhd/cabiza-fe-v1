import fetcher from "@/libs/fetcher";

const { default: axios } = require("../libs/axiosInstance");
const { NEXT_URL, API_URL } = require("../config/index");

export function getAllProducts() {
  return axios.get(`${API_URL}/products/all`).then((res) => res.data);
}

export function getMe() {
  return axios
    .get(`${API_URL}/user/me`)
    .then((res) => res.data)
    .catch(() => {
      return null;
    });
}

export function login(payload) {
  return fetcher(`/login`, payload).then((res) => res.json());
}
