import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import MainFooter from "@/components/Footer/MainFooter";
import MainNavigation from "@/components/Navbars/MainNav";
import { API_URL } from "@/config/index";
import styles from './index.module.css'

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

const ProductItem = ({ product }) => (
  <>
    <div className="shadow">
      <img src={product.image} alt="..." className="w-full" />
      <div className="p-5 rounded-b">
        <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
        <Link href={`/discover/${product.product_id}`}>
          <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
            {product.name}
          </h4>
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
          <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
            ${product.price}+
          </span>
        </div>
      </div>
    </div>
  </>
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
      <header className="py-16 bg-grey_95 mx-auto max-w-[1100px]">
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
      <div id="explore_cat" className="md:py-20 py-10">
        <div className="mx-auto w-[100%] px-5 max-w-[1500px] overflow-hidden">
          <h2 className="text-lg text-cabiza_blue font-medium mb-6">
            Explore Cabiza
          </h2>
          <p className="font-bold text-dark_ text-4xl mb-8">
            Perfect your career with tested and proven resources from experts
            and examples from others.
          </p>

          <div
            className="grid-cols-6
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
          >
            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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
            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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

            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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

            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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
            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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
            <div className="p-4 rounded-lg hover:bg-cabiza_blue group cursor-pointer" style={{
              "&:hover":{
                "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.12)",
                "border-radius": "8px"
              }
              }}>
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

          <div className="mb-8">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-grey_60 font-bold">
                Best selling in Education
              </h3>
              <a href="" className="text-cabiza_blue">View All</a>
            </header>
            <div
              className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1"
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

          <div className="mb-8">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg text-grey_60 font-bold">
                Best selling in Education
              </h3>
              <a href="" className="text-cabiza_blue">View All</a>
            </header>
            <div
              className={`grid-cols-5
                space-y-2
                lg:space-y-0 lg:grid lg:gap-[17.5rem] lg:grid-rows-1
                w-[130%] overflow-x-auto ${styles.container}`              }
            >
              <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

              

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
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
              <a href="" className="text-cabiza_blue">View All</a>
            </header>
            <div
              className="grid-cols-5
                space-y-2
                lg:space-y-0 lg:grid lg:gap-[17.5rem] lg:grid-rows-1
                w-[130%] overflow-x-auto"
            >
            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>

              

            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
            <div className={`shadow w-[400px] mr-1 h-[max-content] ${styles.card}`}>
                <img src="/images/book-small.png" alt="..." className="w-[100%] h-[350px]"/>
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-1">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}
