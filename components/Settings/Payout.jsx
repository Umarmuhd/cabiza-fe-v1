import React from "react";
import { useForm } from "react-hook-form";

const InfoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
      fill="#24BAD4"
    />
    <path
      d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
      fill="#24BAD4"
    />
    <path
      d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z"
      fill="#24BAD4"
    />
  </svg>
);

export default function Payout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="h-full w-full relative">
      <form className="w-4/5 mx-auto md:py-10">
        <div className="mt-8">
          <div className="mb-6 relative">
            <label
              className="block text-grey_40 text-lg font-semibold mb-3"
              htmlFor="paypal"
            >
              Payout PayPal address
            </label>
            <input
              type="text"
              className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="paypal"
              placeholder="Paypal address"
              {...register("paypal", { required: true })}
              // defaultValue={user?.username}
            />
          </div>
          <div className="border border-grey_80 px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-grey_40">
                We encrypt all sensitive info using public key encryption
                (2048-bit RSA)
              </span>
              <span className="cursor-pointer">
                <InfoIcon />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="py-4 rounded-lg bg-primary text-white text-lg w-full"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
