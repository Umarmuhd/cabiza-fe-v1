import React from "react";
import ReviewDropdown from "../../../../../components/Dropdowns/ReviewDropdown";

export default function UserProduct() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-grey_95 py-6">
        <div className="max-w-[90%] mx-auto flex justify-between">
          <div className="flex items-center">
            <img src="/images/avatar.png" alt="..." className="h-8 w-8" />
            <span className="text-lg font-medium text-grey_20 ml-2">
              John Doe
            </span>
          </div>

          <button className="rounded-lg p-2 font-semibold text-lg text-white bg-cabiza_blue">
            Follow
          </button>
        </div>
      </div>
      <main className="py-20">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          <img src="/images/book.jpg" alt="..." className="w-full" />
          <div className="md:p-10 p-6 shadow border border-grey_80">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="md:w-1/2 w-full">
                <div className="mb-8">
                  <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                    $5000+
                  </span>
                </div>
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
                <div className="mt-8">
                  <p className="text-lg font-medium text-grey_60">
                    How to make a book cover Launch a new page Open Canva on
                    your desktop or launch the app to get started. Log in or
                    sign up using Google or... Select a template Explore Canva’s
                    wide range of book cover designs for your self-publishing
                    needs. Use the search tool... Customize your book co
                  </p>
                </div>
              </div>
              <div className="md:w-[32%] w-full">
                <div className="mb-6">
                  <label
                    htmlFor="price"
                    className="block text-lg font-semibold text-grey_40"
                  >
                    Name a fair price:
                  </label>
                  <div className="mt-2 relative rounded-lg shadow-sm border border-grey_80 rounded-l-lg">
                    <div className="absolute inset-y-0 left-0 px-8 flex items-center pointer-events-none rounded-l-lg bg-grey_95 border-grey_80 border-l">
                      <span className="text-grey_40 text-lg font-medium rounded-l-lg">
                        $
                      </span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-3 pr-12 text-lg border-gray-300 text-center rounded-lg"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <button className="rounded-lg w-full text-lg font-medium text-white bg-secondary py-3">
                  I want this!
                </button>
                <div className="mt-6">
                  <ReviewDropdown />
                </div>
                <div className="mt-6 py-3 flex items-center justify-between rounded-lg border border-grey_80 px-5">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex-1 w-0 truncate text-lg text-grey_80 font-medium">
                      Size
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-grey_60">
                      50 MB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full flex justify-center md:py-9 py-6">
        <div className="flex items-end">
          <p className="text-lg font-bold uppercase text-grey_60 mr-2">
            POWERED BY
          </p>
          <img src="/images/cabiza-logo.png" alt="..." className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}
