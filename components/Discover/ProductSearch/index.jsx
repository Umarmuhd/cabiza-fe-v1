import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "@/libs/axiosInstance";
import { API_URL } from "@/config/index";
import Alert from "@/components/Alert";
import toast from "react-hot-toast";

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

const ProductSearch = () => {
  return (
    <div className="bg-secondary_sky_lighter h-[100%]">
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
                type="search"
                placeholder="Search for products..."
                className="w-full outline-none text-secondary_sky_dark bg-transparent border-[transparent]"
              />
              <button
                type="submit"
                className="bg-primary p-2 mr-2 rounded-full text-md h-[max-content] my-auto"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default ProductSearch;

export const ProductItem = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const handleBecomeAffiliate = async () => {
    try {
      setLoading(true);
      const url = `${API_URL}/products/affiliate/${product.product_id}`;
      const { data } = await axios.put(url);
      toast.custom(<Alert color="#24C78C" text={data?.data?.message} />);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.custom(
        <Alert color="#F50000" text={error?.response?.data?.message} />
      );
    }
  };
  return (
    <div className="shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl w-[10%] md:w-auto mt-0">
      <Image
        src={product.thumbnail ?? "/images/book-small.png"}
        alt="..."
        width={385}
        height={300}
        objectFit="cover"
        loading="lazy"
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
            src={
              product?.user?.profile_picture ??
              "https://via.placeholder.com/150"
            }
            alt="..."
            className="h-9 w-9 rounded-full object-cover"
            width={36}
            height={36}
          />

          <Link href={`/${product?.user?.username}/products`}>
            <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
              {product?.user?.full_name}
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <Image
              src="/images/icons/star.svg"
              alt="."
              width={26}
              height={26}
              objectFit="cover"
              loading="lazy"
            />
            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
              5.0
              <span className="font-normal ml-1">(25)</span>
            </span>
          </div>
          <span className="text-sm font-normal py-2 px-5 pl-3 bg-primary rounded  text-white relative price">
            ${product.price}+
          </span>

          <style jsx>{`
            .price::after {
              content: "";
              position: absolute;
              width: 20%;
              height: 100%;
              top: 0;
              right: -1%;
              background-color: #fff;
              clip-path: polygon(0 50%, 100% 100%, 100% 0);
            }
          `}</style>
        </div>

        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
          <p className="text-xs text-secondary">40% Affiliate Commission</p>

          <button
            className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
            onClick={handleBecomeAffiliate}
            disabled={loading}
          >
            {loading ? "Loading..." : "Become Affiliate"}
          </button>
        </div>
      </div>
    </div>
  );
};
