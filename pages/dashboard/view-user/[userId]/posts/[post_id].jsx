import React from "react";

const CaretUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0.000244141L11.1962 9.00024H0.803848L6 0.000244141Z"
      fill="#D9D9D9"
    />
  </svg>
);
const CaretDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 12.0002L11.1962 3.00024H0.803848L6 12.0002Z" fill="#D9D9D9" />
  </svg>
);

export default function Post() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-grey_95 py-6">
        <div className="md:max-w-[88%] max-w-[90%] mx-auto flex justify-between">
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
      <main className="mx-auto md:w-4/5 max-w-[90%] md:my-20 my-10">
        <div className="">
          <h1 className="text-4xl leading-9 text-grey_20 font-semibold mb-6">
            User Post Preview
          </h1>

          <p className="text-2xl text-grey_60">Dec 11, 2021</p>

          <p className="text-grey_40 mt-6">
            I'm currently testing my account here as a newbie to see how it
            works..
          </p>

          <div className="mt-6">
            <button className="px-4 py-2 rounded-lg bg-cabiza_blue text-white font-medium">
              Testing CTA
            </button>
          </div>
        </div>
        <hr className="my-4 md:min-w-full" />
        <button className="text-grey_40 px-4 py-2 rounded-lg border border-grey_40">
          Download Attachment
        </button>
      </main>
      <div className="bg-grey_95 w-full py-12">
        <div className="mx-auto md:w-4/5 max-w-[90%]">
          <h2 className="text-2xl font-semibold text-grey_20 mb-6">
            0 Comments
          </h2>
          <div className="flex flex-col items-start md:items-center justify-between md:flex-row">
            <div className="w-8 h-8 mr-4 md:mb-0 mb-4">
              <img src="/images/avatar.png" alt="..." />
            </div>

            <div className="flex justify-between items-center w-full md:w-[88%]">
              <div className="flex rounded-lg shadow-sm w-[85%]">
                <input
                  type="text"
                  className="border border-r-0 border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-l-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  placeholder="Write a comment"
                />
                <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm flex-col justify-center">
                  <button>
                    <CaretUpIcon />
                  </button>
                  <button>
                    <CaretDownIcon />
                  </button>
                </span>
              </div>

              <button className="rounded-lg py-3 px-4 font-medium text-sm text-white bg-cabiza_blue ml-5 md:ml-0">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
