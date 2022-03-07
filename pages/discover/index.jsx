import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import MainFooter from "@/components/Footer/MainFooter";
import MainNavigation from "@/components/Navbars/MainNav";
import { API_URL } from "@/config/index";
import styles from "./index.module.css";

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4163 25.375C6.82467 25.375 1.45801 20.0083 1.45801 13.4167C1.45801 6.82501 6.82467 1.45834 13.4163 1.45834C20.008 1.45834 25.3747 6.82501 25.3747 13.4167C25.3747 20.0083 20.008 25.375 13.4163 25.375ZM13.4163 3.20834C7.78134 3.20834 3.20801 7.79334 3.20801 13.4167C3.20801 19.04 7.78134 23.625 13.4163 23.625C19.0513 23.625 23.6247 19.04 23.6247 13.4167C23.6247 7.79334 19.0513 3.20834 13.4163 3.20834Z"
      fill="#CCCCCC"
    />
    <path
      d="M25.6664 26.5417C25.4447 26.5417 25.223 26.46 25.048 26.285L22.7147 23.9517C22.3764 23.6133 22.3764 23.0533 22.7147 22.715C23.053 22.3767 23.613 22.3767 23.9514 22.715L26.2847 25.0483C26.623 25.3867 26.623 25.9467 26.2847 26.285C26.1097 26.46 25.888 26.5417 25.6664 26.5417Z"
      fill="#CCCCCC"
    />
  </svg>
);
const RightIcon = () => (
  <svg
    width="27"
    height="28"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4998 0.666748C6.13984 0.666748 0.166504 6.64008 0.166504 14.0001C0.166504 21.3601 6.13984 27.3334 13.4998 27.3334C20.8598 27.3334 26.8332 21.3601 26.8332 14.0001C26.8332 6.64008 20.8598 0.666748 13.4998 0.666748ZM18.8732 14.7067L14.8732 18.7067C14.6732 18.9067 14.4198 19.0001 14.1665 19.0001C13.9132 19.0001 13.6598 18.9067 13.4598 18.7067C13.0732 18.3201 13.0732 17.6801 13.4598 17.2934L15.7532 15.0001H8.83317C8.2865 15.0001 7.83317 14.5467 7.83317 14.0001C7.83317 13.4534 8.2865 13.0001 8.83317 13.0001H15.7532L13.4598 10.7067C13.0732 10.3201 13.0732 9.68008 13.4598 9.29342C13.8465 8.90675 14.4865 8.90675 14.8732 9.29342L18.8732 13.2934C19.2598 13.6801 19.2598 14.3201 18.8732 14.7067Z"
      fill="#CCCCCC"
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
      d="M13.4998 0.666748C6.13984 0.666748 0.166504 6.64008 0.166504 14.0001C0.166504 21.3601 6.13984 27.3334 13.4998 27.3334C20.8598 27.3334 26.8332 21.3601 26.8332 14.0001C26.8332 6.64008 20.8598 0.666748 13.4998 0.666748ZM18.1665 15.0001H11.2465L13.5398 17.2934C13.9265 17.6801 13.9265 18.3201 13.5398 18.7067C13.3398 18.9067 13.0865 19.0001 12.8332 19.0001C12.5798 19.0001 12.3265 18.9067 12.1265 18.7067L8.1265 14.7067C7.73984 14.3201 7.73984 13.6801 8.1265 13.2934L12.1265 9.29342C12.5132 8.90675 13.1532 8.90675 13.5398 9.29342C13.9265 9.68008 13.9265 10.3201 13.5398 10.7067L11.2465 13.0001H18.1665C18.7132 13.0001 19.1665 13.4534 19.1665 14.0001C19.1665 14.5467 18.7132 15.0001 18.1665 15.0001Z"
      fill="#CCCCCC"
    />
  </svg>
);

const ProductItem = ({ product }) => (
  <div
    className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
  >
    <img
      src="/images/book-small.png"
      alt="..."
      className="w-[100%] h-[350px]"
    />
    <div className="p-5 rounded-b">
      <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
      <Link href={`/discover/${product.product_id}`}>
        <h4 className="text-2xl text-dark_ font-bold mb-8">{product.name}</h4>
      </Link>
      <div className="flex items-center">
        <span className="text-lg text-grey_60 font-medium mr-2">By:</span>
        <img
          src={product.user.profile_picture}
          alt="..."
          className="h-10 w-10 rounded-full"
        />

        <Link href={`/${product.user.username}/products`}>
          <a className="text-lg font-medium ml-2 underline text-grey_60 block">
            {product.user.full_name}
          </a>
        </Link>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/icons/star.svg" alt="..." className="w-6 h-6" />
          <span className="ml-2 text-lg font-semibold text-grey_40">5.0</span>
          <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
            <span className="text-sm font-medium text-grey_60">34567</span>
          </div>
        </div>
        <span
          className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
        >
          ${product.price}+
        </span>
      </div>
      <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
        <p>40% Affiliate Commission</p>
        <a href="" className="bg-grey_20 text-yellow rounded px-3 py-2">
          Become Affiliate
        </a>
      </div>
    </div>
  </div>
);

export default function Discover() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/all`);

      if (response.status === 200) {
        setProducts(response.data.data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div className="w-full h-full">
      <MainNavigation />
      <div className="bg-grey_95">
        <header className="py-16 mx-auto max-w-[1100px]">
          <div className="w-[90%] mx-auto">
            <form className="flex">
              <select
                name="category"
                className="block py-2 px-3 border border-gray-300 bg-grey_40 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg lg:w-1/6 sm:w-2/6 rounded-l-3xl text-grey_40 px-12 text-white"
              >
                <option>Education</option>
                <option>Fitness</option>
                <option>Health</option>
              </select>
              <div className="flex justify-center border py-2 px-6 w-full rounded-r-3xl bg-white">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full outline-none text-grey_60 bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-grey_40 p-3 rounded-full text-md"
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </header>
      </div>
      <div id="explore_cat" className="md:py-20 py-10">
        <div className="mx-auto w-[100%] px-5 max-w-[1500px] overflow-hidden">
          <h2 className="text-lg text-cabiza_blue font-medium mb-6">
            Explore Cabiza
          </h2>
          <p className="font-bold text-dark_ text-4xl mb-8">
            Perfect your career with tested and proven resources from experts
            and examples from others.
          </p>

          <div className={`${styles.cards} mb-7`}>
            <div
              className={`grid-cols-6
                space-y-2
                lg:space-y-0 grid gap-6 grid-rows-1 mb-8 ${styles.container}`}
            >
              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Education
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>
              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Crafts & DIY
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Books and Writings
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>

              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Games and Softwares
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>
              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Design & Tech
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>
              <div
                className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer"
                style={{
                  "&:hover": {
                    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                    "border-radius": "8px",
                  },
                }}
              >
                <img
                  src="images/education.svg"
                  alt="..."
                  className="mb-4 mx-auto"
                />
                <div className="text-left">
                  <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                    Film and Videos
                  </h3>
                  <p className="mb-4 text-sm font-medium text-grey_80 group-hover:text-grey_95">
                    Books, stories and guides
                  </p>
                  <p className="font-medium text-md text-cabiza_blue group-hover:text-grey_40">
                    Explore products
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-grey_60 font-bold">
                Best selling in Education
              </h3>
              <a href="" className="text-cabiza_blue">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div
                className={`grid-cols-5
                space-y-2
                lg:space-y-0 grid lg:gap-[17.5rem] grid-rows-1
                w-[100%] ${styles.container}`}
              >
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

          <div className="mb-8">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-grey_60 font-bold">
                Best selling in Education
              </h3>
              <a href="" className="text-cabiza_blue">
                View All
              </a>
            </header>

            <div className={styles.cards}>
              <div
                className={`grid-cols-5
                space-y-2
                lg:space-y-0 grid lg:gap-[17.5rem] grid-rows-1
                w-[100%] ${styles.container}`}
              >
                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
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
              <h3 className="text-lg text-grey_60 font-bold">
                Best selling in Education
              </h3>
              <a href="" className="text-cabiza_blue">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div
                className={`grid-cols-5
                space-y-2
                lg:space-y-0 grid lg:gap-[17.5rem] grid-rows-1
                w-[100%] ${styles.container}`}
              >
                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`shadow w-[max-content] mr-1 h-[max-content]  ${styles.card}`}
                >
                  <img
                    src="/images/book-small.png"
                    alt="..."
                    className="w-[100%] h-[350px]"
                  />
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-grey_80 font-medium mb-1">
                      Books
                    </p>
                    <h4 className="text-2xl text-dark_ font-bold mb-8">
                      Emotional Intelligence
                    </h4>
                    <div className="flex items-center">
                      <span className="text-lg text-grey_60 font-medium mr-2">
                        By:
                      </span>
                      <img
                        src="/images/author.png"
                        alt="..."
                        className="h-10 w-10"
                      />
                      <p className="text-lg font-medium ml-2 underline text-grey_60">
                        Sara Mitchell
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/icons/star.svg"
                          alt="..."
                          className="w-6 h-6"
                        />
                        <span className="ml-2 text-lg font-semibold text-grey_40">
                          5.0
                        </span>
                        <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                          <span className="text-sm font-medium text-grey_60">
                            34567
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-medium py-3 px-5 pl-3 bg-yellow rounded ${styles.price}`}
                      >
                        $5000+
                      </span>
                    </div>
                    <div className="rounded border border-grey_20 flex justify-between items-center mt-5 px-3 py-2">
                      <p>40% Affiliate Commission</p>
                      <a
                        href=""
                        className="bg-grey_20 text-yellow rounded px-3 py-2"
                      >
                        Become Affiliate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-[max-content] border border-grey_80 p-2 rounded mt-3"
            style={{ "border-radius": "20px" }}
          >
            <LeftIcon />
            <p className="mx-2">Page 1 of 8</p>
            <RightIcon />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
