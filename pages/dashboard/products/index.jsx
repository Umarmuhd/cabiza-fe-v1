import React, { useState, useContext, useEffect } from "react";
import { Tab } from "@headlessui/react";

import AllProductsEmpty from "../../../components/Cards/AllProductsEmpty";

import Dashboard from "../../../layouts/Dashboard";
import AllProducts from "../../../components/Cards/AllProducts";
import Affiliated from "../../../components/Cards/Affiliated";
import { classNames } from "../../../libs/helper";
import Link from "next/link";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";

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

const Products = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/user/${user?._id}`);

      setProducts(response.data.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProducts(), []);

  const [balance, setBalance] = useState(null);

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

  return (
    <div>
      <Tab.Group>
        <div className="bg-grey_95 md:py-10">
          <div className="w-4/5 mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl leading-9 font-semibold text-dark_">
                Products
              </h1>

              <Link href="/dashboard/products/new">
                <button className="py-4 px-8 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg">
                  <span className="mr-2.5">New Product </span> <PlusIcon />
                </button>
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex">
                <Tab.List className="flex">
                  <Tab
                    as={"button"}
                    className={({ selected }) =>
                      classNames(
                        "py-4 px-8 rounded-lg   text-lg font-semibold mr-4",
                        "border border-cabiza_tertiary",
                        selected
                          ? " bg-cabiza_tertiary text-white "
                          : " text-cabiza_tertiary bg-transparent "
                      )
                    }
                  >
                    All Products
                  </Tab>
                  <Tab
                    as={"button"}
                    className={({ selected }) =>
                      classNames(
                        "py-4 px-8 rounded-lg   text-lg font-semibold mr-4",
                        "border border-cabiza_tertiary",
                        selected
                          ? " bg-cabiza_tertiary text-white "
                          : " text-cabiza_tertiary bg-transparent "
                      )
                    }
                  >
                    Affiliated
                  </Tab>
                </Tab.List>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          {loading ? (
            <>
              <h1 className="text-center">...</h1>
            </>
          ) : (
            <Tab.Panels>
              <Tab.Panel>
                {products.length > 0 ? (
                  <AllProducts products={products} balance={balance} />
                ) : (
                  <AllProductsEmpty />
                )}
              </Tab.Panel>
              <Tab.Panel>
                <Affiliated />
              </Tab.Panel>
            </Tab.Panels>
          )}
        </div>
      </Tab.Group>
    </div>
  );
};

export default Products;

Products.layout = Dashboard;
