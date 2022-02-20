import React from "react";

const WarningIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001ZM13.3335 8.00001C13.3335 10.9455 10.9457 13.3333 8.00016 13.3333C5.05464 13.3333 2.66683 10.9455 2.66683 8.00001C2.66683 5.05449 5.05464 2.66668 8.00016 2.66668C10.9457 2.66668 13.3335 5.05449 13.3335 8.00001ZM8.66683 10.6667V12H7.3335V10.6667H8.66683ZM8.66683 9.33334V4.00001H7.3335V9.33334H8.66683Z"
      fill="#9A9A98"
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

export default function AllProducts({ products }) {
  return (
    <div className="w-4/5 mx-auto text-left py-12">
      <div className="mb-16">
        <div
          className="grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
        >
          <div className="rounded-2xl border border-grey_40 p-6">
            <p className="text-lg font-semibold text-grey_40 flex items-center mb-12">
              <span className="mr-1">Total Revenue</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              $0
            </span>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <p className="text-lg font-semibold text-grey_40 flex items-center mb-12">
              <span className="mr-1">Customers</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              0
            </span>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <p className="text-lg font-semibold text-grey_40 flex items-center mb-12">
              <span className="mr-1">Active Members</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              0
            </span>
          </div>
          <div className="rounded-2xl border border-grey_40 p-6">
            <p className="text-lg font-semibold text-grey_40 flex items-center mb-12">
              <span className="mr-1">MRR</span>
              <WarningIcon />
            </p>
            <span className="inline-block text-grey_40 text-4xl leading-9 font-semibold text-left">
              $0
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-grey_20 sm:rounded-lg">
              <table className="min-w-full divide-y divide-grey_20">
                <thead className="bg-transparent">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sales
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Revenue
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-grey_20">
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 whitespace-nowrap border-l border-grey_20">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="/images/icons/gallery.svg"
                              alt="..."
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-semibold text-grey_20">
                              {product.name}
                            </div>
                            <div className="text-sm text-grey_20">
                              <span className="underline">
                                app.cabiza.com/l/${product.product_id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg text-grey_20 font-semibold">
                          0
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg text-grey_20 font-semibold">
                          $0
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg text-grey_20 font-semibold">
                          ${product.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center">
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-lg font-medium text-grey_40"
                          >
                            Unpublished
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
