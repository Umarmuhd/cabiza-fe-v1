import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "@/layouts/Dashboard";
import { API_URL } from "@/config/index";

const CogIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
      fill="white"
    />
    <path
      d="M15.21 22.19C15 22.19 14.79 22.16 14.58 22.11C13.96 21.94 13.44 21.55 13.11 21L12.99 20.8C12.4 19.78 11.59 19.78 11 20.8L10.89 20.99C10.56 21.55 10.04 21.95 9.42 22.11C8.79 22.28 8.14 22.19 7.59 21.86L5.87 20.87C5.26 20.52 4.82 19.95 4.63 19.26C4.45 18.57 4.54 17.86 4.89 17.25C5.18 16.74 5.26 16.28 5.09 15.99C4.92 15.7 4.49 15.53 3.9 15.53C2.44 15.53 1.25 14.34 1.25 12.88V11.12C1.25 9.66004 2.44 8.47004 3.9 8.47004C4.49 8.47004 4.92 8.30004 5.09 8.01004C5.26 7.72004 5.19 7.26004 4.89 6.75004C4.54 6.14004 4.45 5.42004 4.63 4.74004C4.81 4.05004 5.25 3.48004 5.87 3.13004L7.6 2.14004C8.73 1.47004 10.22 1.86004 10.9 3.01004L11.02 3.21004C11.61 4.23004 12.42 4.23004 13.01 3.21004L13.12 3.02004C13.8 1.86004 15.29 1.47004 16.43 2.15004L18.15 3.14004C18.76 3.49004 19.2 4.06004 19.39 4.75004C19.57 5.44004 19.48 6.15004 19.13 6.76004C18.84 7.27004 18.76 7.73004 18.93 8.02004C19.1 8.31004 19.53 8.48004 20.12 8.48004C21.58 8.48004 22.77 9.67004 22.77 11.13V12.89C22.77 14.35 21.58 15.54 20.12 15.54C19.53 15.54 19.1 15.71 18.93 16C18.76 16.29 18.83 16.75 19.13 17.26C19.48 17.87 19.58 18.59 19.39 19.27C19.21 19.96 18.77 20.53 18.15 20.88L16.42 21.87C16.04 22.08 15.63 22.19 15.21 22.19ZM12 18.49C12.89 18.49 13.72 19.05 14.29 20.04L14.4 20.23C14.52 20.44 14.72 20.59 14.96 20.65C15.2 20.71 15.44 20.68 15.64 20.56L17.37 19.56C17.63 19.41 17.83 19.16 17.91 18.86C17.99 18.56 17.95 18.25 17.8 17.99C17.23 17.01 17.16 16 17.6 15.23C18.04 14.46 18.95 14.02 20.09 14.02C20.73 14.02 21.24 13.51 21.24 12.87V11.11C21.24 10.48 20.73 9.96004 20.09 9.96004C18.95 9.96004 18.04 9.52004 17.6 8.75004C17.16 7.98004 17.23 6.97004 17.8 5.99004C17.95 5.73004 17.99 5.42004 17.91 5.12004C17.83 4.82004 17.64 4.58004 17.38 4.42004L15.65 3.43004C15.22 3.17004 14.65 3.32004 14.39 3.76004L14.28 3.95004C13.71 4.94004 12.88 5.50004 11.99 5.50004C11.1 5.50004 10.27 4.94004 9.7 3.95004L9.59 3.75004C9.34 3.33004 8.78 3.18004 8.35 3.43004L6.62 4.43004C6.36 4.58004 6.16 4.83004 6.08 5.13004C6 5.43004 6.04 5.74004 6.19 6.00004C6.76 6.98004 6.83 7.99004 6.39 8.76004C5.95 9.53004 5.04 9.97004 3.9 9.97004C3.26 9.97004 2.75 10.48 2.75 11.12V12.88C2.75 13.51 3.26 14.03 3.9 14.03C5.04 14.03 5.95 14.47 6.39 15.24C6.83 16.01 6.76 17.02 6.19 18C6.04 18.26 6 18.57 6.08 18.87C6.16 19.17 6.35 19.41 6.61 19.57L8.34 20.56C8.55 20.69 8.8 20.72 9.03 20.66C9.27 20.6 9.47 20.44 9.6 20.23L9.71 20.04C10.28 19.06 11.11 18.49 12 18.49Z"
      fill="white"
    />
  </svg>
);

export default function Payout() {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/user/balance/me`);
      setBalance(response.data.data.wallet);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchBalance(), []);

  console.log(balance);

  return (
    <div>
      <div className="bg-grey_95 border-b border-grey_60 py-6 md:px-0 px-4">
        <div className="flex justify-between items-center md:w-4/5 mx-auto">
          <p className="">
            <span>Overview</span>
            <a className="text-lg font-bold text-cabiza_blue underline ml-2">
              Learn More
            </a>
          </p>

          <button className="py-2 px-2 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg ">
            <span className="mr-2.5">Payout Settings</span>
            <CogIcon />
          </button>
        </div>
      </div>

      <main className="w-4/5 mx-auto md:py-20">
        <div
          className="grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
        >
          <div className="rounded-2xl border border-grey_40 p-6">
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              $0
            </span>
            <p className="text-lg font-semibold text-grey_40 flex items-center mt-12">
              <span className="mr-1">BALANCE</span>
            </p>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              {loading ? "--" : `$${balance && balance.earnings}`}
            </span>
            <p className="text-lg font-semibold text-grey_40 flex items-center mt-12">
              <span className="mr-1">PAST 7 DAYS</span>
            </p>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              $0
            </span>
            <p className="text-lg font-semibold text-grey_40 flex items-center mt-12">
              <span className="mr-1">PAST 30 DAYS</span>
            </p>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              {loading ? "--" : `$${balance && balance.earnings}`}
            </span>
            <p className="text-lg font-semibold text-grey_40 flex items-center mt-12">
              <span className="mr-1">TOTAL EARNINGS</span>
            </p>
          </div>
        </div>

        <div className="mt-8 bg-grey_98 text-center rounded-2xl py-14 border border-grey_60">
          <h2 className="text-lg text-grey_40 font-semibold mb-2">
            We can't pay you yet.
          </h2>
          <p className="text-grey_40">
            Reach a balance of at least $10 to be paid out for your sales.
          </p>
        </div>
      </main>
    </div>
  );
}

Payout.layout = Dashboard;
