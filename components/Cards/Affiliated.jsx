import { API_URL } from "@/config/index";
import axios from "@/libs/axiosInstance";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AllAffiliates from "./AllAffiliates";

const EmptyAffiliates = () => (
  <div className="md:w-43/50 mx-auto bg-white rounded-3xl text-center p-10 mt-8 shadow h-[max-content] mb-10">
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-dark_ mb-2">No Affiliate Yet</h3>
      <p>You don’t have any affiliate yet!</p>
    </div>
    <div className="w-3/4 mx-auto">
      <img
        src="/images/affiliated.svg"
        alt="..."
        className="w-[18rem] h-[auto] mx-auto"
      />
    </div>
  </div>
);

export default function Affiliated() {
  const [loading, setLoading] = useState(false);
  const [affiliates, setAffiliates] = useState([
    { _id: "123", name: "Affiliate", product_id: "aff_123", price: 123 },
  ]);

  const router = useRouter();

  useEffect(() => {
    const fetchAffiliatedProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/products/affiliates`);

        console.log(response.data);

        setAffiliates(response.data.data.affiliates);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchAffiliatedProducts();
  }, []);

  console.log(affiliates);

  console.log(router);

  return (
    <React.Fragment>
      {affiliates.length > 0 ? (
        <div className="h-[76vh]">
          <AllAffiliates products={affiliates} />
        </div>
      ) : (
        <EmptyAffiliates />
      )}
    </React.Fragment>
  );
}
