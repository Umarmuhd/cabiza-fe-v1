import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

import Auth from "@/layouts/Auth";
import toast from "react-hot-toast";
import { API_URL } from "@/config/index";

export default function ForgetPassword() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const handleForget = async ({ email }) => {
    try {
      setLoading(true);
      const url = `${API_URL}/auth/forget-password`;
      const { data } = await axios.post(url, { email });
      toast.success(data.message);
      setLoading(false);
      reset({ email: "" });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-full min-h-screen pt-10 md:pt-24">
      <div className="h-full flex justify-center items-center place-content-center md:px-0 px-6">
        <div className="md:w-3/5 max-w-lg bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
          <form onSubmit={handleSubmit(handleForget)}>
            <div className="mb-8">
              <h1 className="text-4xl text-dark font-bold">Forget password</h1>
              <p className="mt-3 text-grey_60">
                Enter your email below and we’ll send you a link to reset your
                password.
              </p>
            </div>
            <div className="relative w-full mb-6">
              <label
                className="block text-grey_40 text-lg font-semibold mb-3"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="email"
                placeholder="e.g cabizahere@gmail.com"
                autoComplete="off"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-left text-red-600 text-xs mt-1">
                  Email address is required
                </p>
              )}
            </div>

            <div className="text-center my-6">
              <button
                className="bg-primary text-white active:bg-primary text-lg font-semibold px-6 py-3 rounded-lg outline-none focus:outline-none w-full"
                type="submit"
                style={{
                  transition: "all 0.15s ease 0s",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
                }}
                disabled={loading}
              >
                {loading ? "..." : "Send reset email"}
              </button>
            </div>
            <p className="text-center text-grey_40 text-lg">
              Already have an account?{" "}
              <Link href="/auth/login">
                <a className="text-primary ml-1">Login</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

ForgetPassword.layout = Auth;
