import axios from "axios";
import { useQuery } from "react-query";
import { API_URL } from "../config/index";

function getAllBanks() {
  return axios.get(`https://nigerianbanks.xyz`).then((res) => res.data);
}

export const useAllBanks = () => {
  const { data, isLoading, refetch } = useQuery("all-banks", getAllBanks, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
