import { API_URL } from "@/config/index";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProductContent({
  product,
  handleNext,
  productContent,
  setProductContent,
}) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  const handleContinue = async (values) => {
    setProductContent(values);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(handleContinue)}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-secondary_ink_dark">
          Product Content
        </h1>
        <span
          className="text-lg font-medium text-primary_brand_light"
          onClick={handleNext}
        >
          Step: 4 of 6
        </span>
      </div>

      <div className="flex flex-col">
        <p className="leading-4 font-medium text-secondary_ink_darkest mb-3">
          Files
        </p>
        <div className="border border-dashed border-secondary_sky_base p-4 rounded-lg">
          <input
            type="file"
            name="add_files"
            id="add_files"
            className="hidden"
            {...register("file", {})}
          />
          <label htmlFor="add_files" className="w-[50%] mx-auto text-center">
            <h3 className="text-secondary text-base font-medium">
              {product?.file ??
                (watch("file") !== undefined
                  ? watch("file")[0].name
                  : "Add Files")}
            </h3>
            <p className="mt-4 secondary_brand_light">
              Upload your product files here
            </p>

            <button className="flex w-[max-content] mx-auto py-2 px-4 mt-6 rounded-4xl bg-primary_brand_lightest text-primary">
              <p className="mr-2 text-primary font-medium">+</p>
              Upload Files
            </button>
          </label>
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <label
          htmlFor="redirecting_url"
          className="leading-4 font-medium text-secondary_ink_darkest mb-3"
        >
          Redirect URL (optional){" "}
        </label>
        <div className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none flex items-center justify-between">
          <input
            type="url"
            name="product_url"
            id="product_url"
            placeholder="Redirect URL after purchase"
            className=" outline-none w-[90%]"
            {...register("url", { required: true })}
            defaultValue={product?.url}
            autoComplete="off"
          />
          <button className="border border-solid border-grey_20 px-4 rounded text-grey_20 py-2">
            Test
          </button>
        </div>
        {errors.url?.type === "required" && (
          <p className="text-left text-red-600 text-xs mt-1">
            Product url is required
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
      >
        <React.Fragment>
          <span className="mr-4">Next</span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </React.Fragment>
      </button>
    </form>
  );
}
