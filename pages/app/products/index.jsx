import React, { useState, useContext, useEffect, useRef } from "react";
import { Tab } from "@headlessui/react";
import Router from "next/router";

import AllProductsEmpty from "@/components/Cards/AllProductsEmpty";

import Dashboard from "@/layouts/Dashboard";
import AllProducts from "@/components/Cards/AllProducts";
import Affiliated from "@/components/Cards/Affiliated";
import { classNames } from "../../../libs/helper";
import Link from "next/link";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import axios from "@/libs/axiosInstance";
import FullNav from "@/components/Navbars/DashboardNav/FullNav";

const Products = ({}) => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openSearchContainer, setOpenSearchContainer] = useState(false);

  const searchInput = useRef();

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

  const SearchIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33334 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33334 1.33333C4.01963 1.33333 1.33334 4.01962 1.33334 7.33333C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.62 13.7932C12.9733 14.8599 13.78 14.9665 14.4 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.38 13.0665 12.62 13.7932Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PlusSmIcon = () => (
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

  const router = Router;

  const searchRef = useRef();

  const changeProductRequestQuery = () => {
    router.replace(
      router.pathname,
      `/products/?s=${searchInput.current.value}`
    );
    searchInput.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      changeProductRequestQuery();
    }
  };

  useEffect(() => {
    setSearchedProducts(
      products.length > 0
        ? products.filter((product) => product.name.includes(router.query.s))
        : products
    );
  }, [router.query.s, products]);

  return (
    <div className="lg:w-[85%] w-[100%] ml-auto">
      <Tab.Group as={"div"} className="bg-secondary_sky_lighter">
        <FullNav title="Products">
          <div className="flex justify-between items-center w-full md:w-43/50 mx-auto md:pr-4">
            <Tab.List
              as={"div"}
              className="flex items-center py-[.5rem] space-x-10"
            >
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md w-[max-content] pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                All Products
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Affiliate
              </Tab>
            </Tab.List>

            <div className="flex items-center">
              <div className="hidden md:flex rounded-[100px] shadow-sm mr-6">
                <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative bg-white">
                  <input
                    type="search"
                    id="search"
                    className="h-10 w-[18rem] text-secondary_ink_lighter px-4 outline-none appearance-none text-sm rounded-full border-0"
                    placeholder="Search..."
                    ref={searchInput}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center h-[2rem] my-auto mr-1 px-2 bg-primary rounded-[50%] z-[100] cursor-pointer text-white"
                    type="submit"
                    onClick={changeProductRequestQuery}
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>

              <button
                className="bg-primary_brand_lightest p-[.5rem] md:mr-4 rounded-full block sm:hidden"
                onClick={() => setOpenSearchContainer(true)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[1.2rem] h-[1.2rem]"
                >
                  <path
                    d="M7.3335 13.3335C10.6472 13.3335 13.3335 10.6472 13.3335 7.3335C13.3335 4.01979 10.6472 1.3335 7.3335 1.3335C4.01979 1.3335 1.3335 4.01979 1.3335 7.3335C1.3335 10.6472 4.01979 13.3335 7.3335 13.3335Z"
                    stroke="#303437"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6201 13.7934C12.9734 14.86 13.7801 14.9667 14.4001 14.0334C14.9668 13.18 14.5934 12.48 13.5668 12.48C12.8068 12.4734 12.3801 13.0667 12.6201 13.7934Z"
                    stroke="#303437"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openSearchContainer ? (
                <div
                  className="h-[100%] z-[120] w-[100%] bg-secondary_ink_darkest fixed top-0 left-0 opacity-70"
                  onClick={() => setOpenSearchContainer(false)}
                ></div>
              ) : null}

              {openSearchContainer ? (
                <div className="fixed bottom-0 left-0 z-[121] h-[90%] w-[100%] bg-white rounded-t-3xl overflow-hidden flex flex-col items-center">
                  <svg
                    width="48"
                    height="5"
                    viewBox="0 0 48 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 2.5C0 1.11929 1.11929 0 2.5 0H45.5C46.8807 0 48 1.11929 48 2.5C48 3.88071 46.8807 5 45.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z"
                      fill="#CDCFD0"
                    />
                  </svg>

                  <div className="md:flex rounded-[100px] shadow-sm mr-6 mt-5">
                    <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative">
                      <input
                        type="search"
                        id="search-mobile"
                        className="h-10 w-[18rem] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none text-sm rounded-full border-0"
                        placeholder="Search..."
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center h-[2rem] my-auto mr-1 px-2 bg-primary rounded-[50%] text-white">
                        <SearchIcon />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-[100%] mt-3 px-5 py-4">
                    <h4 className="font-semibold text-xl">Recent Searches</h4>
                    <a className="text-primary font-medium">See all</a>
                  </div>

                  <div className="w-[100%]">
                    <div className="flex justify-between items-center px-8 py-4 border-b border-b-sky_light">
                      <div>
                        <p className="secondary_ink_darkest text-lg font-medium">
                          Jake’s Aftershave
                        </p>
                        <p className="text-secondary_ink_lighter">
                          Emmanuel Jacob
                        </p>
                      </div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.24046 6.73879L6.24045 6.23879L6.74046 6.23879L14.5752 6.23879C14.7092 6.23879 14.8247 6.12324 14.8247 5.98926C14.8247 5.85528 14.7092 5.73972 14.5752 5.73972L5.99092 5.73972C5.85694 5.73972 5.74139 5.85528 5.74139 5.98926L5.74139 14.5735L5.25048 14.5735L5.74139 14.5735C5.74139 14.6461 5.7685 14.7047 5.81415 14.7503C5.85979 14.796 5.91839 14.8231 5.99092 14.8231L5.99092 15.3208L5.99092 14.8231C6.1249 14.8231 6.24046 14.7075 6.24046 14.5735L6.24046 6.73879Z"
                          fill="#090A0A"
                          stroke="#090A0A"
                        />
                        <path
                          d="M5.58067 6.63998L17.4813 18.5406C17.7712 18.8305 18.252 18.8305 18.5419 18.5406C18.8318 18.2507 18.8318 17.7698 18.5419 17.4799L6.64133 5.57932C6.35142 5.2894 5.87058 5.2894 5.58067 5.57932C5.29075 5.86923 5.29075 6.35006 5.58067 6.63998Z"
                          fill="#090A0A"
                        />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center px-8 py-4">
                      <div>
                        <p className="secondary_ink_darkest text-lg font-medium">
                          UI Design Kit
                        </p>
                        <p className="text-secondary_ink_lighter">Lemmy Lado</p>
                      </div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.24046 6.73879L6.24045 6.23879L6.74046 6.23879L14.5752 6.23879C14.7092 6.23879 14.8247 6.12324 14.8247 5.98926C14.8247 5.85528 14.7092 5.73972 14.5752 5.73972L5.99092 5.73972C5.85694 5.73972 5.74139 5.85528 5.74139 5.98926L5.74139 14.5735L5.25048 14.5735L5.74139 14.5735C5.74139 14.6461 5.7685 14.7047 5.81415 14.7503C5.85979 14.796 5.91839 14.8231 5.99092 14.8231L5.99092 15.3208L5.99092 14.8231C6.1249 14.8231 6.24046 14.7075 6.24046 14.5735L6.24046 6.73879Z"
                          fill="#090A0A"
                          stroke="#090A0A"
                        />
                        <path
                          d="M5.58067 6.63998L17.4813 18.5406C17.7712 18.8305 18.252 18.8305 18.5419 18.5406C18.8318 18.2507 18.8318 17.7698 18.5419 17.4799L6.64133 5.57932C6.35142 5.2894 5.87058 5.2894 5.58067 5.57932C5.29075 5.86923 5.29075 6.35006 5.58067 6.63998Z"
                          fill="#090A0A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : null}

              <Link href="/products/create">
                <a className="py-2 pl-4 pr-6 bg-primary hidden items-center font-medium text-white rounded-[48px] md:flex w-[max-content]">
                  <PlusSmIcon />{" "}
                  <span className="ml-2 w-[max-content]">New Product </span>
                </a>
              </Link>
            </div>
          </div>
        </FullNav>

        <Tab.Panels as={"div"} className="px-6 md:px-0">
          <Tab.Panel>
            {!loading ? (
              <>
                {products.length > 0 ? (
                  <AllProducts
                    products={router.query.s ? searchedProducts : products}
                  />
                ) : (
                  <AllProductsEmpty user={user} />
                )}
              </>
            ) : null}
          </Tab.Panel>
          <Tab.Panel>
            <Affiliated />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Products;

Products.layout = Dashboard;
