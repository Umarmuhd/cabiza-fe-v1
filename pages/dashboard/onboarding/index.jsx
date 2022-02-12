import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Switch } from "@headlessui/react";
import axios from "axios";
import { API_URL, appKey } from "config/index";
import { useRouter } from "next/router";

import { countries } from "libs/CountriesList";

import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function Onboarding() {
  const CategoriesSelect = React.forwardRef(
    ({ onChange, onBlur, name, label, defaultValue }, ref) => (
      <>
        <label className="block text-grey_40 text-lg font-semibold mb-3">
          {label}
        </label>
        <select
          className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue}
        >
          <option />
          {["Education", "Fitness", "Health"].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </>
    )
  );
  CategoriesSelect.displayName = "CategoriesSelect";
  const CountrySelect = React.forwardRef(
    ({ onChange, onBlur, name, label, defaultValue }, ref) => (
      <>
        <label className="block text-grey_40 text-lg font-semibold mb-3">
          {label}
        </label>
        <select
          className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue}
        >
          <option />
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </>
    )
  );
  CountrySelect.displayName = "CountrySelect";

  const [enabled, setEnabled] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { user } = useContext(AuthContext);

  console.log(user);

  const updateProfile = async (values) => {
    console.log(values);

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/user/onboarding`, {
        username: values.username,
        country: values.country,
        bio: values.bio,
        category: values.category,
      });

      if (response.status === 200) {
        setLoading(false);
        router.push("/dashboard/posts");
      } else {
        toast.error(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="w-full md:flex-[53.1] py-10 sm:py-20">
          <div className="sm:w-5/6 mx-auto px-4 sm:px-0">
            <img src="/images/cabiza-logo.png" alt="..." className="w-40" />

            <form
              className="mt-10 md:mt-24"
              onSubmit={handleSubmit(updateProfile)}
            >
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
                    {...register("username", { required: true })}
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
                  {...register("name", { required: true })}
                  defaultValue={user?.full_name}
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
                  {...register("bio", { required: true })}
                />
              </div>
              <div className="relative mb-6">
                <CategoriesSelect
                  label="Categories"
                  {...register("categories")}
                />
              </div>

              <div className="relative mb-6">
                <CountrySelect label="Country" {...register("country")} />
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

              <button
                className="mt-6 font-semibold text-center text-white text-lg bg-cabiza_blue w-full rounded-lg py-4"
                type="submit"
                disabled={loading}
              >
                {loading ? "..." : "Update Profile"}
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
}
