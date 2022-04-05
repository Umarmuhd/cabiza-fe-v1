import React, { useState, useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

import AuthContext from "@/context/AuthContext";

import Auth from "layouts/Auth";
import { NEXT_URL } from "config/index";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (values) => {
    try {
      setLoading(true);

      const response = await axios.post(`${NEXT_URL}/api/login`, values);

      const { user, token } = response.data;

      toast.custom(
        <div className="rounded-lg py-4 px-8 bg-[#24C78C] flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="white"
            />
          </svg>
          <span className="ml-2.5 font-medium text-lg text-white">
            Login success !
          </span>
        </div>
      );

      loginUser(user, token);
      setLoading(false);

      const status = user.username ? "products" : "onboarding";

      return router.push("/dashboard/" + status);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 md:pt-24 h-full flex justify-center items-center place-content-center">
      <div className="md:w-3/5 max-w-lg">
        <div className="bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-4xl mb-8 text-dark font-bold">Login</h1>
            <p className="my-3 text-sm text-red-500">{error}</p>
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
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-left text-red-600 text-xs mt-1">
                  Email address is required
                </p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block text-grey_40 text-lg font-semibold mb-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                style={{ transition: "all 0.15s ease 0s" }}
                id="password"
                placeholder="........"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors?.password ? (
                <p className="text-left text-red-600 text-xs mt-1">
                  Password is required
                </p>
              ) : null}
            </div>
            <div className="relative flex justify-end">
              <p className="text-lg text-right text-grey_40">
                Forgot password?{" "}
                <Link href="/auth/forget-password">
                  <a className="ml-1 underline cursor-pointer">Reset it</a>
                </Link>
              </p>
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
                {loading ? "..." : "Login"}
              </button>
            </div>
            <p className="text-center text-grey_40 text-lg">
              Already have an account?{" "}
              <Link href="/auth/signup">
                <a className="text-primary ml-1">Signup</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.layout = Auth;
