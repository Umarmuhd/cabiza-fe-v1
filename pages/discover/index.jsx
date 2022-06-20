import React from "react";
import Link from "next/link";
import axios from "axios";
import MainFooter from "@/components/Footer/MainFooter";
import MainNavigation from "@/components/Navbars/MainNav";
import { API_URL } from "@/config/index";
import styles from "./index.module.css";
import toast from "react-hot-toast";
import Image from "next/image";
import { useAllProducts } from "@/hooks/useProducts";
import { dehydrate, QueryClient } from "react-query";
import { getAllProducts } from "../../api_calls/index";
import ProductSearch from "@/components/Discover/ProductSearch";
import Landing from "@/layouts/Landing";
import Alert from "@/components/Alert";
import PublicLayout from "@/layouts/PublicLayout";

const ProductItem = ({ product }) => {
  const handleBecomeAffiliate = async () => {
    try {
      const url = `${API_URL}/products/affiliate/${product.product_id}`;
      const { data } = await axios.put(url);
      toast.custom(<Alert color="#24C78C" text={`${data.data.message} !`} />);
      return;
    } catch (error) {
      console.error(error.message);
      toast.custom(
        <Alert color="#F50000" text={error.response.data.message} />
      );
      return;
    }
  };

  return (
    <div
      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
          {/* <Image
            src={product.user.profile_picture}
            alt="..."
            className="h-9 w-9 rounded-full object-cover"
            width={36}
            height={36}
          /> */}

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

export default function Discover(props) {
  const { data: products, isLoading } = useAllProducts();

  return (
    <PublicLayout>
      <MainNavigation />
      <ProductSearch />
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
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
                {!isLoading && products && (
                  <React.Fragment>
                    {products.products.map((product) => (
                      <React.Fragment key={product.product_id}>
                        <ProductItem product={product} />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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
                      className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`}
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

          {/* <div className="flex w-[max-content] border border-grey_80 p-2 bg-primary_brand_lightest rounded-full items-center mt-7">
            <LeftIcon />
            <p className="mx-8 text-secondary">Page 1 of 8</p>
            <RightIcon />
          </div> */}
        </div>
      </div>
      <MainFooter />
    </PublicLayout>
  );
}

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", getAllProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
