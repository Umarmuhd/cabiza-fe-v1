import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      stroke="#006156"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#006156"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function Verifying() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  console.log(router);

  // const trxn_id = query.get("transaction_id");
  // const tx_ref = query.get("tx_ref");
  // const status = query.get("status");

  // if (status === "failed") {
  //   history.push(`/agreement/${tx_ref}`);
  //   toast.error("Payment failed please try again");
  // }

  // useEffect(() => {
  //   const verify = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`/orders/verify/${trxn_id}/${tx_ref}`);

  //       if (response.status === 200) {
  //         setLoading(false);
  //         toast.success("Payment verified successfully");
  //         history.push(`/order/${tx_ref}`);
  //       }

  //       if (response.status === 202) {
  //         setLoading(false);
  //         toast.success("Order is already paid");
  //         history.push(`/order/${tx_ref}`);
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //       toast.error(error.response.data.message);
  //       history.push(`/agreement/${tx_ref}`);
  //     }
  //   };
  //   verify();
  // }, [history, trxn_id, tx_ref]);

  return (
    <div className="bg-grey_95 min-h-screen grid place-content-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-semibold text-grey_40">
          {loading ? <SpinIcon /> : "Verifying payment. Please wait ..."}
        </h1>
      </div>
    </div>
  );
}
