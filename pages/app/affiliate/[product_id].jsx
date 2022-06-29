import Alert from "@/components/Alert";
import { API_URL } from "@/config/index";
import axios from "@/libs/axiosInstance";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SpinIcon = () => (
  <svg
    className="animate-spin -ml-1 h-8 w-8 md:h-10 md:w-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#5B44E9"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#5B44E9"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const AffiliateToProduct = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { product_id } = router.query;

  useEffect(() => {
    const subscribe = async () => {
      try {
        setLoading(true);
        const url = `${API_URL}/products/affiliate/${product_id}`;
        const { data } = await axios.put(url);
        toast.custom(
          <Alert color="#24C78C" text={`${data?.data?.message} !`} />
        );
        router.replace("/products");
      } catch (error) {
        console.error(error);
        setLoading(false);

        console.error(error.message);
        toast.custom(
          <Alert color="#F50000" text={error?.response?.data?.message} />
        );
        router.back();
      }
    };
    subscribe();
  }, [router, product_id]);

  return (
    <div className="bg-light min-h-screen grid place-content-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-semibold text-grey_40">
          {loading ? <SpinIcon /> : "Adding affiliate. Please wait ..."}
        </h1>
      </div>
    </div>
  );
};

export default AffiliateToProduct;
