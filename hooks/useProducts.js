import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../config/index";

function getAllProducts() {
  return axios.get(`${API_URL}/products/all`).then((res) => res.data);
}

export const useAllProducts = () => {
  const { data, isLoading, refetch } = useQuery("products", getAllProducts);

  return { ...data, isLoading, refetch };
};
