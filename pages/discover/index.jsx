import React from "react";
import Link from "next/link";
import MainFooter from "../../components/Footer/MainFooter";
import MainNavigation from "../../components/Navbars/MainNav";

const SearchIcon = () => (
  <svg
    width="28"
    height="28"
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

export default function Discover() {
  return (
    <div className="w-full h-full">
      <MainNavigation />
      <header className="py-16 bg-grey_95 mx-auto max-w-[1300px]">
        <div className="w-[74%] mx-auto">
          <form className="flex">
            <select
              name="category"
              className="block py-2 px-3 border border-gray-300 bg-grey_95 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg w-1/6 rounded-l-3xl text-grey_40"
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
                className="bg-secondary p-3 rounded-full text-md"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </header>
      <div id="explore_cat" className="md:py-20 py-10">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          <h2 className="text-lg text-secondary font-medium mb-6">
            Explore Cabiza
          </h2>
          <p className="font-bold text-dark_ text-4xl mb-8">
            Perfect your career with tested and proven resources from experts
            and examples from others.
          </p>

          <div
            className="grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8"
          >
            <div className="p-4 rounded-lg hover:bg-tertiary group cursor-pointer">
              <img
                src="images/education.svg"
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
                <p className="font-medium text-sm text-secondary group-hover:text-secondary_light">
                  Explore products
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg hover:bg-tertiary group cursor-pointer">
              <img
                src="images/education.svg"
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
                <p className="font-medium text-sm text-secondary group-hover:text-secondary_light">
                  Explore products
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg hover:bg-tertiary group cursor-pointer">
              <img
                src="images/education.svg"
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
                <p className="font-medium text-sm text-secondary group-hover:text-secondary_light">
                  Explore products
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg hover:bg-tertiary group cursor-pointer">
              <img
                src="images/education.svg"
                alt="..."
                className="mb-4 mx-auto"
              />
              <div className="text-left">
                <h3 className="font-bold text-2xl mb-2 text-dark_ group-hover:text-white">
                  Film and Videos
                </h3>
                <p className="mb-4 text-xs font-medium text-grey_80 group-hover:text-grey_95">
                  Books, stories and guides
                </p>
                <p className="font-medium text-sm text-secondary group-hover:text-secondary_light">
                  Explore products
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg text-dark_ font-bold mb-6">
              Best selling in Education
            </h3>
            <div
              className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1"
            >
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
                  <Link href="/discover/123">
                    <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
                      Emotional Intelligence
                    </h4>
                  </Link>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
                  <Link href="/discover/123">
                    <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
                      Emotional Intelligence
                    </h4>
                  </Link>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg text-dark_ font-bold mb-6">
              Best selling in Education
            </h3>
            <div
              className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1"
            >
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <h3 className="text-lg text-dark_ font-bold mb-6">
              Best selling in Education
            </h3>
            <div
              className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1"
            >
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                      $5000+
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <img src="/images/book-small.png" alt="..." />
                <div className="p-5 rounded-b">
                  <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
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
                    <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
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
