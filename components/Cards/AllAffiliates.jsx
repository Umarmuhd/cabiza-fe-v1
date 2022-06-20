import Image from "next/image";
import React from "react";
import AffiliateMore from "../Dropdowns/AffiliateMore";
import PaginationComponent from "../PaginationComponent";

export default function AllAffiliates({ products }) {
  return (
    <div className="md:w-43/50 mx-auto text-left p-10 bg-white mt-8 rounded-3xl shadow mb-10 border">
      <div className="container mx-auto">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full rounded-lg rounded-t-none overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    >
                      Sales
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    >
                      Revenue
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white text-secondary_ink_dark text-left text-2xl leading-5 font-semibold"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
                              {product?.product?.name}
                            </div>
                            <div className="text-sm text-secondary_ink_dark">
                              <span className="underline">
                                app.cabiza.com/l/{product.product?.product_id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          $0
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          ${product.price}
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          Active
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {/* <button>
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          </svg>
                        </button> */}

                        <div className="relative">
                          <AffiliateMore />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {products.length > 5 ? <PaginationComponent classNames="mt-8" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
