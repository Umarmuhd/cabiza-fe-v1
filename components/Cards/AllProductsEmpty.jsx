import React from "react";

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

export default function AllProductsEmpty() {
  return (
    <div className="w-4/5 mx-auto bg-grey_95 rounded-2xl border border-dashed border-dark_ text-center py-12">
      <div className="w-3/4 mx-auto">
        <h2 className="text-lg font-medium text-cabiza_blue mb-10">
          Create your first product
        </h2>
        <div
          className="grid-cols-3
              space-y-2
              lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
        >
          <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer">
            <img
              src="/images/education.svg"
              alt="..."
              className="mb-4 mx-auto"
            />
            <div className="text-left">
              <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                Education
              </h3>
              <p className="mb-4 text-xs font-medium text-grey_80 group-hover:text-grey_95">
                Books, stories and guides
              </p>
              <p className="font-medium text-sm text-cabiza_blue group-hover:text-white">
                Explore products
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer">
            <img
              src="/images/education.svg"
              alt="..."
              className="mb-4 mx-auto"
            />
            <div className="text-left">
              <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                Crafts & DIY
              </h3>
              <p className="mb-4 text-xs font-medium text-grey_80 group-hover:text-grey_95">
                Books, stories and guides
              </p>
              <p className="font-medium text-sm text-cabiza_blue group-hover:text-white">
                Explore products
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer">
            <img
              src="/images/education.svg"
              alt="..."
              className="mb-4 mx-auto"
            />
            <div className="text-left">
              <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                Design & Tech
              </h3>
              <p className="mb-4 text-xs font-medium text-grey_80 group-hover:text-grey_95">
                Books, stories and guides
              </p>
              <p className="font-medium text-sm text-cabiza_blue group-hover:text-white">
                Explore products
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-12">
          <h3 className="text-2xl font-bold text-dark_ mb-2">
            We’ve never met an idea we didn’t like.
          </h3>
          <p>
            Your first product doesn’t need to be perfect. Just put it out
            there, and see if it sticks.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="py-4 px-8 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg">
            <span className="mr-2.5">New Product </span> <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
