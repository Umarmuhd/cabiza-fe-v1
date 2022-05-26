import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Card from "@/components/Cards/Card";
import ToggleSwitch from "@/components/Toggle/Toggle";

import AuthContext from "@/context/AuthContext";

export default function Setting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const [productPricingSettings, setProductPricingSettings] = useState(false);

  const handleToggleSwitchPricingSettings = () => {
    setProductPricingSettings((prev) => !prev);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card title="User details">
        <div>
          <div className="flex flex-col">
            <label htmlFor="uname" className="text-secondary_ink_darkest">
              Username
            </label>
            <input
              type="text"
              name="uname"
              id="uname"
              className="border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4"
              placeholder="jakecabiza"
              value={user.username}
              readOnly
            />
            <p className="mt-2 text-secondary_ink_lighter text-sm">
              View your profile at:{" "}
              <a className="text-primary">{user.username + ".cabiza.com"}</a>
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="email" className="text-secondary_ink_darkest">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4"
              placeholder="jakecabiza@gmail.com"
              value={user.email}
              readOnly
            />
          </div>
        </div>
      </Card>

      <Card title="Notifications">
        <p className="mb-5 text-secondary_ink_lighter">
          Depending on your preferences, you can choose whether to receive
          mobile notifications or email notifications. If you want to get
          notifications on a mobile device, install the Cabiza Dashboard app
          over on the App Store or Google Play.
        </p>

        <div className="border border-sky_light p-6 rounded-xl">
          <table
            className="w-[100%]"
            style={{
              borderSpacing: "0 10px",
              borderCollapse: "separate",
            }}
          >
            <tr className="h-12 text-lg">
              <th className="text-left px-6">Notifications</th>
              <th className="text-left px-6">Email</th>
              <th className="text-left px-6">Mobile</th>
            </tr>
            <tr className="h-12 bg-secondary_sky_lighter text-secondary">
              <td className="text-left px-6">Purchases</td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Purchases-email"                  
                />
              </td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Purchases-mobile" 
                />
              </td>
            </tr>
            <tr className="h-12 bg-secondary_sky_lighter text-secondary">
              <td className="text-left px-6">Recurring payments</td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Recurring-payments-email"
                />
              </td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Recurring-payments-mobile"
                />
              </td>
            </tr>
            <tr className="h-12 bg-secondary_sky_lighter text-secondary">
              <td className="text-left px-6">Free downloads</td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="free-downloads-email"
                />
              </td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="free-downloads-mobile"
                />
              </td>
            </tr>
            <tr className="h-12 bg-secondary_sky_lighter text-secondary">
              <td className="text-left px-6">
                Personalized product announcements
              </td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Personalized-product-email"
                />
              </td>
              <td className="text-left px-6">
                <ToggleSwitch
                  label="Personalized-product-mobile"
                />
              </td>
            </tr>
          </table>
        </div>
      </Card>

      {/* <Card title="Local">
        <div>
          <div className="flex flex-col">
            <label htmlFor="language" className="text-secondary_ink_darkest">
              Language
            </label>

            <div className="flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative">
              <select
                name="language"
                id="language"
                className="h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none"
              >
                <option value="English" defaultValue>
                  English
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#72777A" />
                  <path d="M6 24L11.1962 15H0.803848L6 24Z" fill="#72777A" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="t-zone" className="text-secondary_ink_darkest">
              Time Zone
            </label>
            <div className="flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative">
              <select
                name="t-zone"
                id="t-zone"
                className="h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none"
              >
                <option value="GMT+1" defaultValue>
                  +01:00 | West African Time (Lagos, Nigeria)
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#72777A" />
                  <path d="M6 24L11.1962 15H0.803848L6 24Z" fill="#72777A" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="sell-in" className="text-secondary_ink_darkest">
              Sell in ...
            </label>
            <div className="flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative">
              <select
                name="sell-in"
                id="sell-in"
                className="h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none"
              >
                <option value="USDollars" defaultValue>
                  $ (US Dollars)
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#72777A" />
                  <path d="M6 24L11.1962 15H0.803848L6 24Z" fill="#72777A" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-secondary_ink_lighter">
              Applies only to new products.
              <br />
              Charges will happen in USD, using an up-to-date exchange rate.
              Customers may incur an additional foreign transaction fee
              according to their cardmember agreement.
            </p>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="tax-in" className="text-secondary_ink_darkest">
              Apply sales tax in...
            </label>
            <div className="flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative">
              <select
                name="tax-in"
                id="tax-in"
                className="h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none"
              >
                <option value="Nexus" defaultValue>
                  Nexus
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#72777A" />
                  <path d="M6 24L11.1962 15H0.803848L6 24Z" fill="#72777A" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-secondary_ink_lighter">
              <a className="text-primary mr-2">Learn more</a>
              about nexus, permits, and taxable goods.
            </p>
          </div>
        </div>
      </Card> */}

      <Card title="Discover">
        <p className="mb-5 text-secondary_ink_lighter">
          Grow beyond your core audience through recommendations of related
          products. When enabled, your top-selling and best-reviewed products
          will be recommended to likely buyers.
        </p>
        <div>
          <div className="bg-secondary_sky_lighter p-3 rounded flex items-center justify-between px-5 mb-2">
            <p className="text-secondary">Show my products in Discover</p>
            <ToggleSwitch label="discoverMyProducts"/>
          </div>

          <div className="flex flex-col mt-8 overflow-hidden">
            <label htmlFor="sell-in" className="text-secondary_ink_darkest">
              Sell in ...
            </label>
            <div className="flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative">
              <select
                name="products"
                id="products"
                className="h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none border-none"
              >
                <option value="products" defaultValue>
                  Design & Tech Products
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light">
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 12 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#72777A" />
                  <path d="M6 24L11.1962 15H0.803848L6 24Z" fill="#72777A" />
                </svg>
              </div>
            </div>

            <p className="mt-2 text-secondary_ink_lighter">
              Sales made via a Cabiza Discover purchase are subject to an
              additional 10% fee. Products sold directly to your audience or
              otherwise outside of the Cabiza Discover feature will not be
              affected.
            </p>
            <a className="text-primary mr-2 mt-5">Learn more</a>
          </div>
        </div>
      </Card>

      <div className="md:w-43/50 mx-auto mb-5">
        <button className="bg-primary py-3 w-[100%] rounded-full text-white">
          Update settings
        </button>
        <div className="rounded-3xl bg-secondary_sky_light mt-7 p-5 py-9 text-center">
          <a className="text-primary border-b border-b-primary py-[1px] text-lg">
            Sign out from all active sessions
          </a>
          <p className="mt-2">
            You will be signed out from all your active sessions including this
            session.
          </p>
        </div>
      </div>
    </form>
  );
}
