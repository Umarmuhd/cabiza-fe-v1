import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { Switch, RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import BuildFollowing from "../../../components/MiniCards/BuildFollowing";

import Dashboard from "../../../layouts/Dashboard";
import { classNames } from "../../../libs/helper";

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
      fill="white"
    />
    <path
      d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
      fill="white"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
      fill="white"
    />
    <path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill="white"
    />
  </svg>
);

export default function NewProduct() {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = React.useState(false);
  const [category, setCategory] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleCreate = async (values) => {
    setLoading(true);

    const { name, price, currency, description } = values;

    if (category == null) {
      toast.error("please complete all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/products/new`, {
        name,
        price,
        currency,
        category,
        description,
      });

      setLoading(false);
      toast.success(response.data.message);

      if (response.status === 201) {
        return router.push("/dashboard/products");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-grey_95 md:py-10">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl leading-9 font-semibold text-dark_">
              Products
            </h1>

            <button className="py-4 px-8 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg">
              <span className="mr-2.5">New Product </span> <PlusIcon />
            </button>
          </div>
          <div className="mt-8">
            <div className="flex">
              <Link href="/dashboard/products">
                <button
                  className={classNames(
                    "py-4 px-8 rounded-lg   text-lg font-semibold mr-4",
                    "border border-cabiza_tertiary",
                    " bg-cabiza_tertiary text-white "
                  )}
                >
                  All Products
                </button>
              </Link>

              <Link href="/dashboard/products">
                <button
                  className={classNames(
                    "py-4 px-8 rounded-lg   text-lg font-semibold mr-4",
                    "border border-cabiza_tertiary",

                    " text-cabiza_tertiary bg-transparent "
                  )}
                >
                  Affiliated
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <form
        className="md:w-3/5 mx-auto text-left py-12"
        onSubmit={handleSubmit(handleCreate)}
      >
        <h1 className="text-2xl font-semibold text-dark_ mb-4 leading-6">
          Publish your first product
        </h1>
        <p>Make some selections, fill in some boxes, and go live in minutes.</p>
        <div className="mt-8">
          <p className="text-lg mb-6">
            Our <span className="text-secondary underline">Help Center</span>{" "}
            has everything you need to know.
          </p>
          <RadioGroup
            as={"ul"}
            className="mb-6"
            value={category}
            onChange={setCategory}
          >
            <RadioGroup.Option
              as={"li"}
              value={0}
              className={({ active, checked }) =>
                `p-4 rounded-lg border-[1.5px] border-grey focus:border-secondary flex items-center mb-4 ${checked} ${active}`
              }
            >
              {({ checked, active }) => (
                <>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">Everyone</span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div> */}

                  <img src="/images/icons/note.svg" alt="..." />
                  <p className="ml-2">
                    Classic:
                    <span className="text-grey_40"> start selling today</span>
                  </p>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              as={"li"}
              value={1}
              className={({ active, checked }) =>
                `p-4 rounded-lg border-[1.5px] border-grey focus:border-secondary flex items-center mb-4 ${checked} ${active}`
              }
            >
              {({ checked, active }) => (
                <>
                  {/* <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">Everyone</span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div> */}

                  <img src="/images/icons/clock.svg" alt="..." />
                  <p className="ml-2">
                    Pre-order:
                    <span className="text-grey_40">
                      {" "}
                      sell before a release date
                    </span>
                  </p>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              as={"li"}
              value={2}
              className={({ active, checked }) =>
                `p-4 rounded-lg border-[1.5px] border-grey focus:border-secondary flex items-center mb-4 ${checked} ${active}`
              }
            >
              {({ checked, active }) => (
                <>
                  <img src="/images/icons/refresh-circle.svg" alt="..." />
                  <p className="ml-2">
                    Membership:
                    <span className="text-grey_40">
                      charge on recurring basis
                    </span>
                  </p>
                </>
              )}
            </RadioGroup.Option>
          </RadioGroup>

          <div className="relative mb-6">
            <label
              className="block text-grey_40 text-lg font-semibold mb-3"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="name"
              placeholder="Name of product"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product name is required
              </p>
            )}
          </div>
          <div className="relative mb-6">
            <label
              className="block text-grey_40 text-lg font-semibold mb-3"
              htmlFor="price"
            >
              Price
            </label>
            <div className="flex rounded-lg shadow-sm mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center bg-grey_95 rounded-l-lg border border-grey_80">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 rounded-l-lg border border-grey_80"
                  {...register("currency", { required: true })}
                >
                  <option value={1}>$</option>
                  <option value={2}>€</option>
                  <option value={0}>₦</option>
                </select>
              </div>
              <input
                type="text"
                className="border border-r-0 border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-l-lg pl-14"
                style={{ transition: "all 0.15s ease 0s" }}
                id="price"
                placeholder="Price your product"
                {...register("price", { required: true })}
              />
            </div>
            {errors.price?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product price is required
              </p>
            )}
          </div>

          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-cabiza_blue" : "bg-grey_80"}
          relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
            <span className="ml-2 block text-grey_20 text-sm">
              This product contains one or more physical goods
            </span>
          </div>

          <button
            className="w-full mt-6 py-4 rounded-lg flex items-center text-center justify-center bg-cabiza_blue text-lg font-semibold text-white"
            type="submit"
          >
            <span className="mr-2">Next: Customize</span>
            <ArrowRight />
          </button>

          <div className="my-8 flex items-center justify-between">
            <div className="border-b border-grey_60 w-5/12"></div>
            <span className="text-lg uppercase text-grey_40 font-semibold">
              OR
            </span>
            <div className="border-b border-grey_60 w-5/12"></div>
          </div>

          <BuildFollowing />
        </div>
      </form>
    </div>
  );
}

NewProduct.layout = Dashboard;
