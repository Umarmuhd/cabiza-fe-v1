import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import PaginationComponent from "../PaginationComponent";
import axios from "@/libs/axiosInstance";

const WarningIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996ZM16.6667 9.99996C16.6667 13.6819 13.6819 16.6666 10 16.6666C6.31812 16.6666 3.33335 13.6819 3.33335 9.99996C3.33335 6.31806 6.31812 3.33329 10 3.33329C13.6819 3.33329 16.6667 6.31806 16.6667 9.99996ZM10.8334 13.3333V15H9.16669V13.3333H10.8334ZM10.8334 11.6666V4.99996H9.16669V11.6666H10.8334Z"
      fill="#CDCFD0"
    />
  </svg>
);

export default function AllProducts({ products }) {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

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
    <div className="md:w-43/50 mx-auto text-left p-10 bg-white mt-8 rounded-3xl shadow">
      <div className="mb-16">
        <div
          className="grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
        >
          <div className="rounded-2xl border border-secondary_sky_light p-6 bg-secondary_sky_lighter">
            <p className="text-xl font-medium text-secondary_ink_dark flex items-center mb-12">
              <span className="mr-1">Total Revenue</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-secondary_ink_dark text-2xl leading-6 font-medium text-left">
              ${balance?.earnings}
            </span>
          </div>
          <div className="rounded-2xl border border-secondary_sky_light p-6 bg-secondary_sky_lighter">
            <p className="text-xl font-medium text-secondary_ink_dark flex items-center mb-12">
              <span className="mr-1">Customers</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-secondary_ink_dark text-2xl leading-6 font-medium text-left">
              0
            </span>
          </div>
          <div className="rounded-2xl border border-secondary_sky_light p-6 bg-secondary_sky_lighter">
            <p className="text-xl font-medium text-secondary_ink_dark flex items-center mb-12">
              <span className="mr-1">Active Members</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-secondary_ink_dark text-2xl leading-6 font-medium text-left">
              0
            </span>
          </div>
          <div className="rounded-2xl border border-secondary_sky_light p-6 bg-secondary_sky_lighter">
            <p className="text-xl font-medium text-secondary_ink_dark flex items-center mb-12">
              <span className="mr-1">MRR</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-secondary_ink_dark text-2xl leading-6 font-medium text-left">
              ${balance?.earnings}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full rounded-lg rounded-t-none overflow-hidden">
              <div className="flex flex-col">
                <span className="w-[100%] py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold sm:hidden mb-5">
                  Products
                </span>
                <div className="sm:flex px-3 hidden">
                  <span className="w-[39%] py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold">
                    Products
                  </span>
                  <span className="w-[13%] py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold">
                    Sales
                  </span>
                  <span className="w-[16%] py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold">
                    Revenue
                  </span>
                  <span className="w-[16%] ml-[1rem] py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold">
                    Price
                  </span>
                </div>

                <div className="mt-2 rounded-xl overflow-hidden sm:border sm:border-[#72777A] border-b-0">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="sm:border-b sm:border-b-[#979C9E] bg-secondary_sky_lighter px-2 flex sm:flex-row  flex-col items-center mb-4 sm:mb-0"
                    >
                      <span className="px-5 sm:border-b sm:border-b-[#979C9E]bg-white text-sm sm:w-[40%] w-[100%]">
                        <div className="flex items-center flex-col sm:flex-row">
                          <div className="flex-shrink-0 sm:border-r pr-4 py-5 border-r-[#979C9E]">
                            <a href="#" className="block relative">
                              <Image
                                className="h-10 w-10 rounded-full"
                                src="/images/icons/gallery.svg"
                                alt="..."
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                          <div className="ml-4">
                            <div className="mb-1 text-secondary_ink_darkest text-lg font-medium">
                              {product.name}
                            </div>
                            <div className="text-sm text-secondary_ink_dark">
                              <span className="underline">
                                app.cabiza.com/l/{product.product_id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span className="px-5 py-5 text-sm w-[16%]">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          0
                        </p>
                      </span>
                      <span className="px-5 py-5 text-sm w-[16%]">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          $0
                        </p>
                      </span>
                      <span className="px-5 py-5 text-sm w-[16%]">
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          ${product.price}
                        </span>
                      </span>
                      <span className="px-5 py-5 text-sm w-[16%]">
                        <Link href={`/products/create/${product.product_id}`}>
                          <a className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* <table className="min-w-full leading-normal border-collapse">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold w-[40%]"
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold w-[20%] mx-auto"
                    >
                      Sales
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold w-[20%]"
                    >
                      Revenue
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold w-[20%]"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    ></th>
                  </tr>
                </thead>
                <tbody className="border bg-secondary_sky_lighter border-[#72777A] rounded-xl overflow-hidden mt-2 w-[100%]">
                  {products.map((product) => (
                    <tr key={product._id} className="border bg-secondary_sky_lighter px-4 rounded-xl">
                      <td className="px-5 py-5 border-b border-b-[#979C9E]bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                              <Image
                                className="h-10 w-10 rounded-full"
                                src="/images/icons/gallery.svg"
                                alt="..."
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                          <div className="ml-4">
                            <div className="mb-1 text-secondary_ink_darkest text-lg font-medium">
                              {product.name}
                            </div>
                            <div className="text-sm text-secondary_ink_dark">
                              <span className="underline">
                                app.cabiza.com/l/{product.product_id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          $0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          ${product.price}
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <Link
                          href={`/dashboard/products/create/${product.product_id}`}
                        >
                          <a className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </div>

            {/* <PaginationComponent classNames="mt-8" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
