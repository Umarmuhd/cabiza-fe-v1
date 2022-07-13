import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Card from "@/components/Cards/Card";
import AuthContext from "@/context/AuthContext";
import CheckSwitch from "@/components/CheckSwitch";
import toast from "react-hot-toast";
import axios from "@/libs/axiosInstance";
import { API_URL } from "@/config/index";
import Alert from "../Alert";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAllBanks } from "@/hooks/useAllBanks";
import { toMonthName } from "@/libs/helper";

const AccountTypeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
      fill="white"
    />
    <path
      d="M12 23C5.92487 23 1 18.0751 1 12H-1C-1 19.1797 4.8203 25 12 25V23ZM23 12C23 18.0751 18.0751 23 12 23V25C19.1797 25 25 19.1797 25 12H23ZM12 1C18.0751 1 23 5.92487 23 12H25C25 4.8203 19.1797 -1 12 -1V1ZM12 -1C4.8203 -1 -1 4.8203 -1 12H1C1 5.92487 5.92487 1 12 1V-1Z"
      fill="#CDCFD0"
    />
  </svg>
);
const AccountTypeActiveIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0V0C19.1274 0 24.5 5.37258 24.5 12V12C24.5 18.6274 19.1274 24 12.5 24V24C5.87258 24 0.5 18.6274 0.5 12V12Z"
      fill="#5B44E9"
    />
    <circle cx="12.5" cy="12" r="4" fill="white" />
    <path
      d="M12.5 23C6.42487 23 1.5 18.0751 1.5 12H-0.5C-0.5 19.1797 5.3203 25 12.5 25V23ZM23.5 12C23.5 18.0751 18.5751 23 12.5 23V25C19.6797 25 25.5 19.1797 25.5 12H23.5ZM12.5 1C18.5751 1 23.5 5.92487 23.5 12H25.5C25.5 4.8203 19.6797 -1 12.5 -1V1ZM12.5 -1C5.3203 -1 -0.5 4.8203 -0.5 12H1.5C1.5 5.92487 6.42487 1 12.5 1V-1Z"
      fill="#5B44E9"
    />
  </svg>
);
const WarningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0445 17.0816L13.064 17.064L13.0816 17.0445C13.198 16.9152 13.3063 16.7657 13.3842 16.566C13.454 16.3964 13.5 16.2033 13.5 16C13.5 15.7941 13.4528 15.5988 13.3815 15.4277C13.3091 15.2538 13.2081 15.096 13.0816 14.9555L13.064 14.936L13.0445 14.9184C12.904 14.7919 12.7462 14.6909 12.5723 14.6185C12.2092 14.4672 11.7908 14.4672 11.4277 14.6185C11.2538 14.6909 11.096 14.7919 10.9555 14.9184L10.936 14.936L10.9184 14.9555C10.7919 15.096 10.6909 15.2538 10.6185 15.4277C10.5472 15.5988 10.5 15.7941 10.5 16C10.5 16.2033 10.546 16.3964 10.6158 16.566C10.6937 16.7657 10.802 16.9152 10.9184 17.0445L10.936 17.064L10.9555 17.0816C11.096 17.2081 11.2538 17.3091 11.4277 17.3815C11.5988 17.4528 11.7941 17.5 12 17.5C12.2059 17.5 12.4012 17.4528 12.5723 17.3815C12.7462 17.3091 12.904 17.2081 13.0445 17.0816ZM2.5 12C2.5 6.76614 6.76614 2.5 12 2.5C17.2339 2.5 21.5 6.76614 21.5 12C21.5 17.2339 17.2339 21.5 12 21.5C6.76614 21.5 2.5 17.2339 2.5 12ZM12 6.75C11.3139 6.75 10.75 7.31386 10.75 8V13C10.75 13.6861 11.3139 14.25 12 14.25C12.6861 14.25 13.25 13.6861 13.25 13V8C13.25 7.31386 12.6861 6.75 12 6.75Z"
      fill="#979C9E"
      stroke="#979C9E"
    />
  </svg>
);

export default function Payout() {
  const [showCalendar, setShowCalendar] = useState(false);

  const [value, onChange] = useState();

  const { user } = useContext(AuthContext);

  const [showBusiness, setShowBusiness] = useState(user?.is_business ?? false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const { data: banks, isLoading: banksLoading } = useAllBanks();

  const BankSelect = React.forwardRef(
    ({ onChange, onBlur, name, label, defaultValue }, ref) => (
      <>
        <label className="block text-secondary font-medium mb-4 leading-4">
          {label}
        </label>
        <select
          className="border border-sky_light px-4 py-2 text-secondary_ink_darkest bg-white focus:outline-none focus:ring w-full rounded h-10"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue}
        >
          <option />
          {!banksLoading &&
            banks?.map((bank) => (
              <option
                key={bank.slug}
                value={JSON.stringify(bank)}
                className="text-secondary_ink_darkest"
              >
                {bank.name}
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
  BankSelect.displayName = "BankSelect";

  const [loading, setLoading] = useState(false);

  const handleUpdatePayout = async (values) => {
    console.log(values);
    const {
      first_name,
      last_name,
      street_name,
      city,
      postal_code,
      country,
      paypal_email,
      day,
      month,
      year,
      bank,
      account_number,
    } = values;
    const {
      business_name,
      business_type,
      business_address,
      business_city,
      business_postal_code,
      business_phone,
    } = values;
    try {
      setLoading(true);
      const payload = {
        first_name,
        last_name,
        address: {
          street_name,
          city,
          postal_code,
          country,
        },
        birthday: `${day}/${month}/${year}`,
        paypal: { email: paypal_email },
        bank_account: {
          bank_code: JSON.parse(bank).code,
          account_name: "John Snow",
          account_number,
          bank_name: JSON.parse(bank).name,
        },
        is_business: showBusiness,
        business_details: {
          business_name: business_name,
          business_phone: business_phone,
          business_type: business_type,
          business_address: {
            address: business_address,
            city: business_city,
            postal_code: business_postal_code,
          },
        },
      };
      await axios.post(`${API_URL}/user/profile`, payload);
      toast.custom(<Alert color="#24C78C" text="Payout update success !" />);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error?.response.data.message);
      setLoading(false);
    }
  };

  const handleSameAsBusiness = () => {
    setValue("street_name", watch("business_address"));
    setValue("city", watch("business_city"));
    setValue("postal_code", watch("business_postal_code"));
  };

  return (
    <form onSubmit={handleSubmit(handleUpdatePayout)} className="px-4 md:px-0">
      <Card title="Get Paid">
        <p className="mt-2 mb-6 md:w-[70%] text-secondary_ink_lighter">
          Just like a real paycheck, your account balance is deposited to your
          bank account. Turn things on by filling out the fields below.
        </p>
        <div>
          <div className="flex flex-col mb-8">
            <h5 className="text-secondary_ink_darkest flex md:flex-row flex-col gap-y-2 md:items-end md:justify-between">
              <span className="float-left">Account Type</span>
              <span className="ml-2 text-sm text-primary_brand_light">
                What type of account should I choose?{" "}
              </span>
            </h5>

            <div className="flex md:flex-row flex-col w-[100%] md:mt-0 mt-2 md:space-x-4">
              <button
                className="md:w-[50%] w-[100%]"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBusiness(false);
                }}
              >
                <CheckSwitch
                  label="Individual"
                  name="Account_type"
                  styles={
                    "border border-sky_light mt-3 h-10 rounded text-secondary_ink_lighter px-4 text-left flex justify-between items-center cursor-pointer " +
                    (!showBusiness ? "bg-white" : "bg-sky_light")
                  }
                  checked={!showBusiness}
                />
              </button>

              <button
                className="md:w-[50%] w-[100%]"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBusiness(true);
                }}
              >
                <CheckSwitch
                  label="Business"
                  name="Account_type"
                  styles={
                    "border border-sky_light md:mt-3 h-10 rounded text-secondary_ink_lighter px-4 text-left flex justify-between items-center cursor-pointer " +
                    (showBusiness ? "bg-white" : "bg-sky_light")
                  }
                  checked={showBusiness}
                />
              </button>
            </div>
          </div>

          {!showBusiness ? (
            <div className="flex flex-col">
              <h5 className="text-secondary_ink_darkest font-normal flex justify-between md:flex-row flex-col gap-y-2">
                <span className="text-lg">Your Personal Information</span>
                <span className="text-primary_brand_light text-sm md:self-end">
                  Why does Cabiza need this information?{" "}
                </span>
              </h5>
              <div className="flex md:flex-row flex-col w-[100%] md:mt-0 mt-4">
                <input
                  id="fname"
                  name="fname"
                  className="border border-sky_light mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tl"
                  placeholder="First Name"
                  defaultValue={user?.first_name}
                  {...register("first_name", { required: true })}
                />
                <input
                  id="lname"
                  name="lname"
                  className="border border-sky_light md:mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tr md:border-l-0 md:border-t border-t-0"
                  placeholder="Last Name"
                  defaultValue={user?.last_name}
                  {...register("last_name", { required: true })}
                />
              </div>

              <div>
                <div className="flex w-full">
                  <input
                    id="address"
                    name="address"
                    className="border border-sky_light border-t-0 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center"
                    placeholder="Street Address"
                    {...register("street_name", { required: true })}
                    defaultValue={user?.address?.street_name}
                  />
                </div>
                {errors.street_name?.type === "required" && (
                  <p className="text-left text-red-600 text-xs px-4 mt-1">
                    Street name is required
                  </p>
                )}
              </div>

              <div className="flex w-[100%] md:flex-row flex-col">
                <div className="w-full">
                  <input
                    id="City"
                    name="City"
                    className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0"
                    placeholder="City"
                    {...register("city", { required: true })}
                    defaultValue={user?.address?.city}
                  />
                  {errors.city?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 my-1">
                      City is required
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    id="postal-code"
                    name="postal-code"
                    className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0 md:border-l-0"
                    placeholder="Postal Code"
                    {...register("postal_code", { required: true })}
                    defaultValue={user?.address?.postal_code}
                  />
                  {errors.postal_code?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 my-1">
                      Postal code is required
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <input
                  id="country"
                  name="country"
                  className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-b border-t-0"
                  placeholder="Nigeria"
                  defaultValue={user?.address?.country}
                  {...register("country", { required: true })}
                />
                {errors.country?.type === "required" && (
                  <p className="text-left text-red-600 text-xs px-4 mt-1">
                    Country is required
                  </p>
                )}
              </div>
            </div>
          ) : (
            <React.Fragment>
              <div className="flex flex-col">
                <h5 className="text-secondary_ink_darkest font-normal flex justify-between md:flex-row flex-col gap-y-2">
                  <span className="text-lg">Business Information</span>
                  <span className="text-primary_brand_light text-sm md:self-end">
                    Why does Cabiza need this information?{" "}
                  </span>
                </h5>
                <div className="flex md:flex-row flex-col w-[100%] md:mt-0 mt-4">
                  <input
                    id="bname"
                    name="bname"
                    className="border border-sky_light mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tl"
                    placeholder="Legal Business Name"
                    defaultValue={user?.business_details?.business_name}
                    {...register("business_name", { required: true })}
                  />
                  <input
                    id="btype"
                    name="btype"
                    className="border border-sky_light md:mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tr md:border-l-0 md:border-t border-t-0"
                    placeholder="Type"
                    defaultValue={user?.business_details?.business_type}
                    {...register("business_type", { required: true })}
                  />
                </div>

                <div>
                  <div className="flex w-full">
                    <input
                      id="baddress"
                      name="baddress"
                      className="border border-sky_light border-t-0 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center"
                      placeholder="Address"
                      {...register("business_address", { required: true })}
                      defaultValue={
                        user?.business_details?.business_address?.address
                      }
                    />
                  </div>
                  {errors.business_address?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 mt-1">
                      Business Street is required
                    </p>
                  )}
                </div>

                <div className="flex w-[100%] md:flex-row flex-col">
                  <div className="w-full">
                    <input
                      id="bcity"
                      name="bcity"
                      className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0"
                      placeholder="City"
                      {...register("business_city", { required: true })}
                      defaultValue={
                        user?.business_details?.business_address?.city
                      }
                    />
                    {errors.business_city?.type === "required" && (
                      <p className="text-left text-red-600 text-xs px-4 my-1">
                        City is required
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      id="bpostal_code"
                      name="bpostal_code"
                      className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0 md:border-l-0"
                      placeholder="Postal Code"
                      {...register("business_postal_code", { required: true })}
                      defaultValue={
                        user?.business_details?.business_address?.postal_code
                      }
                    />
                    {errors.business_postal_code?.type === "required" && (
                      <p className="text-left text-red-600 text-xs px-4 my-1">
                        Business Postal code is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <input
                    id="bphone"
                    name="bphone"
                    className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-b border-t-0"
                    placeholder="Business Phone Number"
                    defaultValue={user?.business_details?.business_phone}
                    {...register("business_phone", { required: true })}
                  />
                  {errors.business_phone?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 mt-1">
                      Business phone number is required
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-8">
                <h5 className="text-secondary_ink_darkest font-normal flex justify-between md:flex-row flex-col gap-y-2 mb-4">
                  <span className="text-lg">Business Representative</span>
                </h5>

                <div className="flex items-center">
                  <label
                    htmlFor="same-as-business"
                    className="mr-2 block text-sm text-gray-900"
                  >
                    Same as business
                  </label>
                  <input
                    id="same-as-business"
                    name="same-as-business"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    onChange={handleSameAsBusiness}
                  />
                </div>

                <div className="flex md:flex-row flex-col w-[100%] md:mt-0 mt-4">
                  <input
                    id="name"
                    name="name"
                    className="border border-sky_light mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tl"
                    placeholder="First Name"
                    defaultValue={user?.first_name}
                    {...register("first_name", { required: true })}
                  />
                  <input
                    id="lname"
                    name="lname"
                    className="border border-sky_light md:mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-tr md:border-l-0 md:border-t border-t-0"
                    placeholder="Last Name"
                    defaultValue={user?.last_name}
                    {...register("last_name", { required: true })}
                  />
                </div>

                <div>
                  <div className="flex w-full">
                    <input
                      id="address"
                      name="address"
                      className="border border-sky_light border-t-0 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center"
                      placeholder="Street Address"
                      {...register("street_name", { required: true })}
                      defaultValue={user?.address?.street_name}
                    />
                  </div>
                  {errors.street_name?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 mt-1">
                      Street name is required
                    </p>
                  )}
                </div>

                <div className="flex w-[100%] md:flex-row flex-col">
                  <div className="w-full">
                    <input
                      id="City"
                      name="City"
                      className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0"
                      placeholder="City"
                      {...register("city", { required: true })}
                      defaultValue={user?.address?.city}
                    />
                    {errors.city?.type === "required" && (
                      <p className="text-left text-red-600 text-xs px-4 my-1">
                        City is required
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <input
                      id="postal-code"
                      name="postal-code"
                      className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0 md:border-l-0"
                      placeholder="Postal Code"
                      {...register("postal_code", { required: true })}
                      defaultValue={user?.address?.postal_code}
                    />
                    {errors.postal_code?.type === "required" && (
                      <p className="text-left text-red-600 text-xs px-4 my-1">
                        Postal code is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <input
                    id="country"
                    name="country"
                    className="border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center md:shadow rounded-b border-t-0"
                    placeholder="Nigeria"
                    defaultValue={user?.address?.country}
                    {...register("country", { required: true })}
                  />
                  {errors.country?.type === "required" && (
                    <p className="text-left text-red-600 text-xs px-4 mt-1">
                      Country is required
                    </p>
                  )}
                </div>
              </div>
            </React.Fragment>
          )}

          <div className="flex flex-col mt-8">
            <h5 className="text-secondary_ink_darkest font-normal flex justify-between mb-3 md:flex-row flex-col gap-y-2">
              <span className="text-lg">Identity Verification</span>
              <span className="text-primary_brand_light text-sm self-end">
                Why does Cabiza need this information?{" "}
              </span>
            </h5>

            <div className="w-[100%] border border-sky_light rounded-xl p-5 shadow">
              <h5 className="font-normal flex justify-between text-secondary_sky_dark">
                Date of Birth
              </h5>

              <div className="flex relative">
                <input
                  id="dob"
                  type="date"
                  className="border border-sky_light mt-3 h-10 rounded  bg-white text-secondary_ink_darkest px-4 text-left flex justify-between items-center focus:!border focus:border-sky_light w-full"
                  placeholder="Day"
                  {...register("dob", {
                    required: true,
                  })}
                  defaultValue={user?.birthday}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="w-[100%]">
              <h5 className="text-secondary_ink_darkest font-normal mb-1">
                Payout PayPal address
              </h5>

              <div className="flex">
                <input
                  id="Day"
                  name="Day"
                  type="text"
                  className="border border-sky_light mt-3 h-10 rounded  bg-white text-secondary_ink_darkest px-4 w-[100%] mr-2 text-left flex justify-between items-center"
                  {...register("paypal_email", { required: true })}
                  defaultValue={user?.paypal?.email}
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h5 className="text-secondary_ink_darkest font-normal flex justify-between mb-3">
              <span className="text-lg">Bank Details</span>
            </h5>

            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="relative w-full mb-6 md:mb-0 md:w-1/2">
                <BankSelect
                  label="Bank name"
                  defaultValue={{
                    name: user?.bank_account?.bank_name,
                    code: user?.bank_account?.bank_code,
                  }}
                  {...register("bank", { required: true })}
                />
                {errors.bank?.type === "required" && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Bank name is required
                  </p>
                )}
              </div>
              <div className="relative w-full md:w-1/2">
                <label
                  className="block text-secondary font-medium leading-4 mb-4"
                  htmlFor="account_number"
                >
                  Account number
                </label>
                <input
                  type="number"
                  className="border border-sky_light px-4 py-2 h-10 text-secondary_ink_darkest bg-white focus:outline-none focus:ring w-full rounded"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="account_number"
                  defaultValue={user?.bank_account?.account_number}
                  {...register("account_number", { required: true })}
                />
                {errors.account_number?.type === "required" && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Account number is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex bg-secondary_sky_lighter py-3 px-4 mt-8 rounded-xl justify-between">
            <p className="text-secondary_ink_lighter">
              We encrypt all sensitive info using public key encryption
              (2048-bit RSA)
            </p>
            <WarningIcon />
          </div>
        </div>

        <div className="mt-8">
          <button
            className="bg-primary py-3 w-[100%] rounded-full text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "..." : "Finish"}
          </button>
          <p className="mt-5 text-center text-grey_60">
            By completing this form you agree that information provided is
            accurate. You also agree to our Terms.
          </p>
        </div>
      </Card>
    </form>
  );
}
