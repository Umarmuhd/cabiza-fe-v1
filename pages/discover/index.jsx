import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import MainFooter from "@/components/Footer/MainFooter";
import MainNavigation from "@/components/Navbars/MainNav";
import { API_URL } from "@/config/index";
import styles from "./index.module.css";
import toast from "react-hot-toast";
import Image from "next/image";

const SearchIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className ? className : ""}`}
  >
    <path
      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
      fill="#EFEDFD"
    />
    <path
      d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z"
      fill="#EFEDFD"
    />
  </svg>
);

const RightIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9998 0.666748C6.63984 0.666748 0.666504 6.64008 0.666504 14.0001C0.666504 21.3601 6.63984 27.3334 13.9998 27.3334C21.3598 27.3334 27.3332 21.3601 27.3332 14.0001C27.3332 6.64008 21.3598 0.666748 13.9998 0.666748ZM19.3732 14.7067L15.3732 18.7067C15.1732 18.9067 14.9198 19.0001 14.6665 19.0001C14.4132 19.0001 14.1598 18.9067 13.9598 18.7067C13.5732 18.3201 13.5732 17.6801 13.9598 17.2934L16.2532 15.0001H9.33317C8.7865 15.0001 8.33317 14.5467 8.33317 14.0001C8.33317 13.4534 8.7865 13.0001 9.33317 13.0001H16.2532L13.9598 10.7067C13.5732 10.3201 13.5732 9.68008 13.9598 9.29342C14.3465 8.90675 14.9865 8.90675 15.3732 9.29342L19.3732 13.2934C19.7598 13.6801 19.7598 14.3201 19.3732 14.7067Z"
      fill="#5B44E9"
    />
  </svg>
);

const LeftIcon = () => (
  <svg
    width="27"
    height="28"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4998 0.666626C6.13984 0.666626 0.166504 6.63996 0.166504 14C0.166504 21.36 6.13984 27.3333 13.4998 27.3333C20.8598 27.3333 26.8332 21.36 26.8332 14C26.8332 6.63996 20.8598 0.666626 13.4998 0.666626ZM18.1665 15H11.2465L13.5398 17.2933C13.9265 17.68 13.9265 18.32 13.5398 18.7066C13.3398 18.9066 13.0865 19 12.8332 19C12.5798 19 12.3265 18.9066 12.1265 18.7066L8.1265 14.7066C7.73984 14.32 7.73984 13.68 8.1265 13.2933L12.1265 9.29329C12.5132 8.90663 13.1532 8.90663 13.5398 9.29329C13.9265 9.67996 13.9265 10.32 13.5398 10.7066L11.2465 13H18.1665C18.7132 13 19.1665 13.4533 19.1665 14C19.1665 14.5466 18.7132 15 18.1665 15Z"
      fill="#BFB6F6"
    />
  </svg>
);

const ProductItem = ({ product }) => {
  const handleBecomeAffiliate = async () => {
    try {
      const url = `${API_URL}/products/affiliate/${product.product_id}`;
      const { data } = await axios.put(url);

      toast.custom(
        <div className="rounded-lg py-4 px-8 bg-[#24C78C] flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="white"
            />
          </svg>
          <span className="ml-2.5 font-medium text-lg text-white">
            {data.data.message} !
          </span>
        </div>
      );
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div
      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
    >
      <img
        src={product.thumbnail ?? "/images/book-small.png"}
        alt="..."
        className="w-[24rem] h-[20rem] object-cover"
      />
      <div className="p-5 rounded-b">
        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
          Books
        </p>
        <Link href={`/discover/${product.product_id}`}>
          <a className="text-2xl text-secondary font-medium">{product.name}</a>
        </Link>
        <div className="flex items-center mt-3">
          <Image
            src={product.user.profile_picture}
            alt="..."
            className="h-9 w-9 rounded-full object-cover"
            width={36}
            height={36}
          />

          <Link href={`/${product.user.username}/products`}>
            <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
              {product.user.full_name}
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img src="/images/icons/star.svg" alt="..." className="w-6 h-6" />
            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
              5.0
              <span className="font-normal ml-1">(25)</span>
            </span>
          </div>
          <span
            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
          >
            ${product.price}+
          </span>
        </div>

        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
          <p className="text-xs text-secondary">40% Affiliate Commission</p>
          <button
            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
            onClick={handleBecomeAffiliate}
          >
            Become Affiliate
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Discover() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/all`);

      setProducts(response.data.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div className="w-full h-full">
      <MainNavigation />
      <div className="bg-secondary_sky_lighter">
        <header className="py-16 mx-auto max-w-[1100px]">
          <div className="w-[90%] mx-auto">
            <form className="flex">
              <div className="flex items-center border border-sky_light rounded-l-full overflow-hidden relative text-white mr-[-.1rem] h-[max-content]">
                <select
                  name="t-zone"
                  id="t-zone"
                  className="h-[3.4rem] m-auto focus:outline-none text-white focus:ring-indigo-500 border-0 outline-none appearance-none bg-primary px-6 lg:w-[10rem] sm:w-2/6"
                >
                  <option className="bg-primary" value="education">
                    Education
                  </option>
                  <option className="bg-primary" value="fitness">
                    Fitness
                  </option>
                  <option className="bg-primary" value="health">
                    Health
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3">
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M9.00002 8.80001C8.30002 8.80001 7.60002 8.53001 7.07002 8.00001L0.55002 1.48001C0.26002 1.19001 0.26002 0.710015 0.55002 0.420015C0.84002 0.130015 1.32002 0.130015 1.61002 0.420015L8.13002 6.94001C8.61002 7.42001 9.39002 7.42001 9.87002 6.94001L16.39 0.420015C16.68 0.130015 17.16 0.130015 17.45 0.420015C17.74 0.710015 17.74 1.19001 17.45 1.48001L10.93 8.00001C10.4 8.53001 9.70002 8.80001 9.00002 8.80001Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center border pl-6 w-full rounded-r-full bg-white">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full outline-none text-secondary_sky_dark bg-transparent border-[transparent]"
                />                
                <button
                  type="submit"
                  className="bg-primary p-2 mr-2 rounded-full text-md h-[max-content] my-auto"
                >
                  <SearchIcon/>
                </button>
              </div>
            </form>
          </div>
        </header>
      </div>
      <div
        id="explore_cat"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="mx-auto w-[100%] px-3 max-w-[1500px] overflow-hidden">
          <h2 className="text-lg text-lighter font-medium mb-6">
            Explore Cabiza
          </h2>
          <p className="font-bold text-dark_ text-3xl mb-12 xs:w-[70%]">
            Perfect your career with tested and proven resources from experts
            and examples from others.
          </p>

          <div className={`${styles.cards} mb-7`}>
            <div className={`flex gap-2 ${styles["product-cards"]} pb-4 px-2`}>
              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/Education.png"
                  alt="..."
                  className="mb-4 mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Education
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/crafts.png"
                  alt="..."
                  className="mb-4 mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Crafts & DIY
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/design.png"
                  alt="..."
                  className="mb-4 mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Design & Tech
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/film.png"
                  alt="..."
                  className="mb-4 mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Film and Videos
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/Books.png"
                  alt="..."
                  className="mb-4 w-[100%] h-[9rem] mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Books and Writings
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/Games.png"
                  alt="..."
                  className="mb-4 mx-auto w-[100%] h-[9rem]"
                  style={{
                    border: "1px solid #E3E5E6",
                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.04)"
                  }}
                />
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    Games and Softwares
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Education
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                {loading ? (
                  <p>loading...</p>
                ) : (
                  <>
                    {products.length > 0 && (
                      <>
                        {products.map((product, index) => (
                          <React.Fragment key={index}>
                            <ProductItem product={product} />
                          </React.Fragment>
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mb-12 mt-12">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Crafts & DIY
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>

            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[24rem] h-[20rem] object-cover"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                      <img
                        src="./images/author.png"
                        alt="..."
                        className="h-9 w-9 rounded-full"
                      />

                      <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </a>
                    </div>
                    <div className="mt-3 flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                      <p className="text-xs text-secondary">
                        40% Affiliate Commission
                      </p>
                      <a
                        href=""
                        className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Design & Tech
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]}`}>
                <div className={styles.cards}>
                  <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter">
                              5.0
                              <span className="font-normal ml-1 text-xs">
                                (25)
                              </span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
                    >
                      <img
                        src="/images/book-small.png"
                        alt="..."
                        className="w-[24rem] h-[20rem] object-cover"
                      />
                      <div className="p-5 rounded-b">
                        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                          Books
                        </p>
                        <h4 className="text-2xl text-secondary font-medium mb-3">
                          Emotional Intelligence
                        </h4>
                        <div className="flex items-center">
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src="./images/author.png"
                            alt="..."
                            className="h-9 w-9 rounded-full"
                          />

                          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                            Sara Mitchell
                          </a>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src="/images/icons/star.svg"
                              alt="..."
                              className="w-6 h-6"
                            />
                            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                              5.0
                              <span className="font-normal ml-1">(25)</span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                          <p className="text-xs text-secondary">
                            40% Affiliate Commission
                          </p>
                          <a
                            href=""
                            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[max-content] border border-grey_80 p-2 bg-primary_brand_lightest rounded-full items-center mt-7">
            <LeftIcon />
            <p className="mx-8 text-secondary">Page 1 of 8</p>
            <RightIcon />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
