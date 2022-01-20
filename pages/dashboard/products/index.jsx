import React from "react";
import { Tab } from "@headlessui/react";

import Affiliated from "../../../components/Cards/Affiliated";
import AllProductsEmpty from "../../../components/Cards/AllProductsEmpty";

import Dashboard from "../../../layouts/Dashboard";
import AllProducts from "../../../components/Cards/AllProducts";

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

const Products = () => {
  return (
    <div>
      <Tab.Group>
        <div className="bg-grey_95 md:py-10">
          <div className="w-4/5 mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl leading-9 font-semibold text-dark_">
                Products
              </h1>

              <button className="py-4 px-8 bg-secondary flex items-center text-lg font-semibold text-white rounded-lg">
                <span className="mr-2.5">New Product </span> <PlusIcon />
              </button>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Tab.List className="flex">
                  <Tab>
                    <button className="py-4 px-8 rounded-lg bg-secondary text-white text-lg font-semibold mr-4">
                      All Products
                    </button>
                  </Tab>
                  <Tab as={React.Fragment}>
                    <button className="py-4 px-8 rounded-lg text-secondary text-lg font-semibold border border-secondary bg-transparent">
                      Affiliated
                    </button>
                  </Tab>
                </Tab.List>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <Tab.Panels>
            <Tab.Panel>{<AllProducts /> || <AllProductsEmpty />}</Tab.Panel>
            <Tab.Panel>
              <Affiliated />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Products;

Products.layout = Dashboard;
