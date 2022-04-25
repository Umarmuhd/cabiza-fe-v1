import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Switch } from "@headlessui/react";
import axios from "axios";
import { API_URL } from "config/index";
import { useRouter } from "next/router";
import Image from "next/image";

import { countries } from "libs/CountriesList";

import AuthContext from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function Onboarding() {
  const CategorySelect = React.forwardRef(
    ({ onChange, onBlur, name, label, defaultValue }, ref) => (
      <>
        <label className="block text-secondary font-medium mb-2">{label}</label>
        <select
          className="border border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg"
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

          <style jsx>{`
            select {
              padding: 1rem;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              background: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23090A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E ")
                97% / 3% no-repeat;
            }
          `}</style>
        </select>
      </>
    )
  );
  CategorySelect.displayName = "CategorySelect";
  const CountrySelect = React.forwardRef(
    ({ onChange, onBlur, name, label, defaultValue }, ref) => (
      <>
        <label className="block text-secondary font-medium mb-2">{label}</label>
        <select
          className="border border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg"
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

          <style jsx>{`
            select {
              padding: 1rem;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              background: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23090A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E ")
                97% / 3% no-repeat;
            }
          `}</style>
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

  const updateProfile = async (values) => {
    try {
      setLoading(true);

      const { username, photo, bio, country, category } = values;

      const form_data = new FormData();

      form_data.append("username", username);
      form_data.append("photo", photo[0]);
      form_data.append("bio", bio);
      form_data.append("country", country);
      form_data.append("category", category);

      const url = `${API_URL}/user/onboarding`;

      const response = await axios.post(url, form_data);

      toast.success(response.data.message);
      setLoading(false);
      router.replace("/dashboard/posts");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap w-full min-h-screen h-full">
      <div className="w-1/2 shadow-2xl bg-onboarding-pattern bg-contain inset-0 min-h-max flex items-center">
        <div className="max-w-[80%] mx-auto">
          <div className="text-white text-center mb-20">
            <h1 className="font-bold text-5xl mb-10">
              Welcome back, <br /> Set up your profile
            </h1>
            <p className="text-lg font-medium">
              It just takes 2 minutes to get setup. Let’s start with your
              profile. This is what your customers will see on your profile
              page.
            </p>
          </div>
          <img src="/images/onboarding-illustration.svg" alt="..." />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-10">
        <Image
          src="/images/logo.png"
          alt="..."
          width={130}
          height={40}
          className="w-auto"
        />

        <form className="mt-10 md:mt-24" onSubmit={handleSubmit(updateProfile)}>
          <div className="relative mb-6">
            <label
              className="block text-secondary font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                className="border border-r-0 border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-l-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="username"
                placeholder="jake"
                {...register("username", { required: true })}
              />
              <div className="p-2 border border-secondary_sky_base border-l-0 rounded-r-lg">
                <span className="flex p-2 rounded-lg border border-primary_brand_light bg-primary_brand_lightest text-primary_brand_light text-base leading-4">
                  .cabiza.com
                </span>
              </div>
            </div>
          </div>
          <div className="relative mb-6 photo_input">
            <label
              className="block text-secondary font-medium mb-2"
              htmlFor="photo"
            >
              Photo
            </label>
            <input
              className="form-control rounded-lg block w-full px-2 py-3 text-base font-normal text-secondary_sky_dark bg-white bg-clip-padding border border-solid border-secondary_sky_base transition ease-in-out m-0 focus:text-grey_80 focus:bg-white focus:border-blue-600 focus:outline-none leading-4"
              type="file"
              id="formFile"
              {...register("photo", { required: true })}
            />

            <style jsx>{`           
              
              input::file-selector-button{
                padding: 0.5rem;
                color: #404446;
                font-size: 1rem;
                line-height: 1rem;
                font-weight: 500;
                background: #BFB6F6;
                border-radius: 4px;
                outline: none;
                border: none;
            `}</style>
          </div>

          <div className="relative mb-6">
            <label
              className="block text-secondary font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              className="border border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="name"
              placeholder="Pseudonym, organization name or full name"
              {...register("name", { required: true })}
              defaultValue={user?.full_name}
            />
          </div>

          <div className="relative mb-6">
            <label
              className="block text-secondary font-medium mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <input
              type="text"
              className="border border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="bio"
              placeholder="Tell us about yourself and what you do"
              {...register("bio", { required: true })}
            />
          </div>

          <div className="relative mb-6">
            <CategorySelect label="Category" {...register("category")} />
          </div>

          <div className="relative mb-6">
            <CountrySelect label="Country" {...register("country")} />
            <small className="text-grey_40 text-sm">
              You will receive payouts in USD directly into your PayPal account.
            </small>
          </div>

          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={
                (enabled ? "bg-primary_brand_base" : "bg-secondary_sky_light") +
                " relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
              }
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-4" : "translate-x-0"}
pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
            <span className="ml-2 block text-base text-grey_20">
              {"Send me updates on new features & tips for creators"}
            </span>
          </div>

          <button
            className="mt-6 font-semibold text-center text-white text-lg bg-primary w-full rounded-[48px] py-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
