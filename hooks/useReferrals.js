import { getUserReferrals } from "../api_calls";
import { useQuery } from "react-query";

export const useReferrals = () => {
  const { data, isLoading } = useQuery("referrals", getUserReferrals, {
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  return { data: data?.data?.referrals, isLoading };
};
