import React from "react";
import { useForm } from "react-hook-form";

export default function BankCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContinue = async (values) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleContinue)}>
      <div className="border border-grey_20 p-4 py-6 rounded-lg border-t-0 rounded-t-none w-full text-left">
        <div className="mb-6 w-full relative">
          <label
            className="block text-grey_60 mb-2 uppercase leading-4"
            htmlFor="card_number"
          >
            Card number
          </label>
          <input
            type="text"
            className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
            style={{ transition: "all 0.15s ease 0s" }}
            id="card_number"
            placeholder="0000 0000 0000 0000"
            {...register("card_number", { required: true })}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="mb-6 md:mb-0 w-full md:w-5/12 relative">
            <label
              className="block text-grey_60 mb-2 uppercase leading-4"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              type="text"
              className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="name"
              placeholder="Full name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex w-full md:w-7/12 items-center justify-between pl-2">
            <div className="md:mb-0 mb-6 w-7/12 relative">
              <label
                className="block text-grey_60 mb-2 uppercase leading-4"
                htmlFor="date"
              >
                Expiry date
              </label>
              <input
                type="text"
                className="border border-grey_80 px-3 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="date"
                placeholder="MM/YY"
                {...register("date", { required: true })}
              />
            </div>
            <div className="md:mb-0 mb-6 w-2/5 relative">
              <label
                className="block text-grey_60 mb-2 uppercase leading-4"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                type="text"
                className="border border-grey_80 px-3 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="cvv"
                placeholder="123"
                {...register("cvv", { required: true })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border border-grey rounded-lg p-4 text-center text-grey_40">
        You'll be charged US$900.
      </div>

      <button className="mb-8 md:mb-0 bg-cabiza_blue rounded-lg text-white w-full p-4 text-center mt-6">
        Pay
      </button>
    </form>
  );
}
