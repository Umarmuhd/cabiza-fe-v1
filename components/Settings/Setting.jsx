import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import AuthContext from "@/context/AuthContext";

export default function Setting() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  return (
    <main className="h-full w-full relative">
      <div className="w-4/5 mx-auto md:py-10">
        <div className="px-6 py-9 rounded-2xl border border-grey_80 flex justify-between mb-8">
          <span className="text-2xl font-semibold text-secondary">
            User details
          </span>
          <div className="w-[70%]">
            <div className="mb-6 relative">
              <label
                className="block text-grey_40 text-lg font-semibold mb-3"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="username"
                placeholder="Username"
                {...register("username", { required: true, disabled: true })}
                defaultValue={user?.username}
              />

              <p className="text-sm mt-2 text-grey_40">
                View your profile at:{" "}
                <a
                  href={`https://${user?.username}.cabiza.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary"
                >
                  {user?.username}.cabiza.com
                </a>
              </p>
            </div>
            <div className="relative">
              <label
                className="block text-grey_40 text-lg font-semibold mb-3"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="email"
                placeholder="Email"
                {...register("email", { required: true, disabled: true })}
                defaultValue={user?.email}
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-9 rounded-2xl border border-grey_80 flex justify-between mb-8">
          <span className="text-2xl font-semibold text-secondary">Support</span>
          <div className="w-[70%]">
            <div className="relative">
              <label
                className="block text-grey_40 text-lg font-semibold mb-3"
                htmlFor="email_receipt"
              >
                Email
              </label>
              <input
                type="email"
                className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="email_receipt"
                placeholder="Email address"
                {...register("email_receipt", { required: true })}
                defaultValue={user?.email}
              />

              <p className="text-sm mt-2 text-grey_40">
                This email is listed on the receipt of every sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
