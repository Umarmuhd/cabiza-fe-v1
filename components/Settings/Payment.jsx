import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "@/config/index";

const PaymentItem = ({ name, url }) => {
  const [loading, setLoading] = useState(false);

  const connectHandler = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/user${url}`);

      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="px-6 py-9 rounded-2xl border border-grey_80 flex justify-between mb-6">
      <span className="text-2xl font-semibold text-secondary">{name}</span>
      <div className="w-[70%]">
        <p className="text-sm text-grey_40">
          Connecting a personal or business PayPal account will allow you to
          accept payments with PayPal. Each purchase made with PayPal will be
          deposited into your PayPal account immediately. Payments via PayPal
          are supported in every country except Brazil, India, Israel, Japan,
          Micronesia, Turkey.
        </p>
        <div className="mt-6">
          <button
            className="rounded-lg px-8 py-4 bg-primary text-white font-semibold text-lg"
            disabled={loading}
            onClick={connectHandler}
          >
            {loading ? "Connecting..." : <>Connect with {name}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Payment() {
  const gateways = [
    { name: "Paypal", url: "/connect/stripe" },
    { name: "Stripe", url: "/connect/stripe" },
    { name: "Flutterwave", url: "/connect/stripe" },
  ];
  return (
    <main className="h-full w-full relative">
      <div className="w-4/5 mx-auto md:py-10">
        {gateways.map((gateway) => (
          <React.Fragment key={gateway.name}>
            <PaymentItem name={gateway.name} url={gateway.url} />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
