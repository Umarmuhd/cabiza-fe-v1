import Image from "next/image";
import React from "react";

const PlusIcon = () => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 26H51"
      stroke="#404446"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 51V1"
      stroke="#404446"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AllProductsEmpty() {
  return (
    <div
      className="w-43/50 mx-auto md:my-10 bg-white rounded-3xl text-center p-10"
      style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
    >
      <div
        className="grid-cols-3
              space-y-2
              lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8 min-h-[250px]"
      >
        <div className="rounded-3xl cursor-pointer border border-primary w-full h-full relative">
          <Image
            src="/images/create-product.png"
            alt="..."
            layout="fill"
            className="object-cover"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center justify-center rounded-3xl cursor-pointer bg-secondary_sky_lighter border border-secondary_sky_dark border-dashed">
          <div
            className="bg-white p-5 rounded-2xl"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
          >
            <PlusIcon />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-3xl cursor-pointer bg-secondary_sky_lighter border border-secondary_sky_dark border-dashed">
          <div
            className="bg-white p-5 rounded-2xl"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
          >
            <PlusIcon />
          </div>
        </div>
      </div>

      <h2 className="md:text-4xl font-semibold text-secondary_ink_dark my-6">
        Create your first product
      </h2>

      <p className="text-lg text-secondary_ink_lighter md:w-2/3 md:mx-auto">
        Turn your ideas into products, share and connect with people. It’s okay
        if you make mistakes, first try is not always perfect.
      </p>

      <div className="flex justify-center mt-6">
        <button className="py-4 px-8 bg-primary_brand_lightest leading-4 font-medium text-primary rounded-4xl">
          <span>Create Product</span>
        </button>
      </div>
    </div>
  );
}
