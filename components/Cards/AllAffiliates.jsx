import Image from "next/image";
import React from "react";
import AffiliateMore from "../Dropdowns/AffiliateMore";
import PaginationComponent from "../PaginationComponent";

export default function AllAffiliates({ products }) {
  const thClass =
    "px-4 py-4 text-left text-secondary_ink_dark text-2xl font-semibold";
  const tdClass = "px-4 py-4 border-t border-b border-gray-300 text-sm";
  const trClass = "border-gray-300";
  return (
    <div className="md:w-43/50 mx-auto text-left p-10 bg-white mt-8 rounded-3xl shadow mb-10 border">
      <div className="container mx-auto">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full rounded-lg rounded-t-none overflow-clip ">
              <table className="w-full table-auto rounded-sm">
                <thead>
                  <tr>
                    <th className={thClass}>Product</th>
                    <th className={thClass}>Price</th>
                    <th className={thClass}>Sales</th>
                    <th className={thClass}>Revenue</th>
                    <th className={thClass}>Percent</th>
                    <th className={thClass}>More</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr className={trClass} key={product._id}>
                      <td className={tdClass}>
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
                      <td className={tdClass}>
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          0
                        </p>
                      </td>
                      <td className={tdClass}>
                        <p className="text-secondary_ink_dark whitespace-no-wrap">
                          $0
                        </p>
                      </td>
                      <td className={tdClass}>
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          ${product.price}
                        </span>
                      </td>
                      <td className={tdClass}>
                        <span className="relative inline-block text-secondary_ink_dark leading-tight">
                          Active
                        </span>
                      </td>
                      <td className={tdClass}>
                        <div className="max-w-fit">
                          <div className="absolute -mt-5">
                            <div className="inset-0">
                              <AffiliateMore />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {products.length > 5 ? (
              <PaginationComponent classNames="mt-8" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
