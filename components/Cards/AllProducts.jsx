import Image from "next/image";
import React from "react";

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

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function AllProducts({ products, balance }) {
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
            <div className="inline-block min-w-full shadow rounded-lg rounded-t-none overflow-hidden">
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
                              {product.name}
                            </div>
                            <div className="text-sm text-secondary_ink_dark">
                              <span className="underline">
                                app.cabiza.com/l/${product.product_id}
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
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
