const { default: axios } = require("axios");
const { API_URL } = require("../config/index");

export function getAllProducts() {
  return axios.get(`${API_URL}/products/all`).then((res) => res.data);
}
