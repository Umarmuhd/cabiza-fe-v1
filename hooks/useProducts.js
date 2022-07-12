import { getAllProducts } from "../api_calls";
import { useQuery } from "react-query";

export const useAllProducts = () => {
  const { data, isLoading, refetch } = useQuery("products", getAllProducts);

  return { ...data, isLoading, refetch };
};
