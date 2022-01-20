import React from "react";
import { Switch } from "@headlessui/react";

export const Onboarding = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-full md:flex-[53.1] py-10 sm:py-20">
          <div className="sm:w-5/6 mx-auto px-4 sm:px-0">
            <img src="/images/cabiza-logo.png" alt="..." className="w-40" />

            <form action="" className="mt-10 md:mt-24">
              <div className="relative mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="flex rounded-lg shadow-sm">
                  <input
                    type="text"
                    className="border border-r-0 border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-l-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="username"
                    placeholder="jake"
                  />
                  <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    .cabiza.com
                  </span>
                </div>
              </div>
              <div className="relative mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  className="form-control rounded-lg
    block
    w-full
    px-4
    py-3
    text-base
    font-normal
    text-grey_80
    bg-white bg-clip-padding
    border border-solid border-grey_80
    transition
    ease-in-out
    m-0
    focus:text-grey_80 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                />
              </div>

              <div className="relative mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="name"
                  placeholder="Pseudonym, organization name or full name"
                />
              </div>
              <div className="relative mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="bio"
                >
                  Bio
                </label>
                <input
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="bio"
                  placeholder="Tell us about yourself and what you do"
                />
              </div>
              <div className="relative mb-6">
                <label
                  htmlFor="categories"
                  className="block text-grey_40 text-lg font-semibold mb-3"
                >
                  Categories
                </label>
                <select
                  id="categories"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                >
                  <option>Education</option>
                  <option>Fitness & Health</option>
                  <option>Beauty</option>
                </select>
              </div>

              <div className="relative mb-6">
                <label
                  htmlFor="country"
                  className="block text-grey_40 text-lg font-semibold mb-3"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                >
                  <option>Nigeria</option>
                  <option>Kenya</option>
                  <option>Ghana</option>
                </select>
                <small className="text-grey_40 text-sm">
                  You will receive payouts in USD directly into your PayPal
                  account.
                </small>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
                <span className="ml-2 block text-base text-grey_20">
                  Send me updates on new features & tips for creators
                </span>
              </div>

              <button className="mt-6 font-semibold text-center text-white text-lg bg-secondary w-full rounded-lg py-4">
                Update Profile
              </button>
            </form>
          </div>
        </div>
        <div className="flex-[46.9] bg-grey_95 min-h-screen h-auto hidden md:grid place-content-center py-20">
          <img
            src="/images/onboarding-1.svg"
            alt="..."
            className="w-[28%] mx-auto"
          />
          <div className="text-left mb-12 w-3/5 mx-auto">
            <h1 className="text-4xl mt-20 text-center font-semibold text-dark_">
              Welcome back, <br /> Set up your profile
            </h1>
            <p className="mt-4 text-grey_60">
              It just takes 2 minutes to get setup. Let’s start with your
              profile. This is what your customers will see on your profile
              page.
            </p>
          </div>
          <img
            src="/images/onboarding-2.svg"
            alt="..."
            className="w-[56%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
