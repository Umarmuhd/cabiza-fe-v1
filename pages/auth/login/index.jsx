import React, { useState, useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

import AuthContext from "@/context/AuthContext";

import styles from "./styles/index.module.css";

import Auth from "layouts/Auth";
import { NEXT_URL } from "config/index";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (values) => {
    try {
      setLoading(true);

      const response = await axios.post(`${NEXT_URL}/api/login`, {
        username: values.email,
        encPassword: values.password,
      });

      console.log(response.data);

      if (response.status === 200) {
        loginUser(response.data.token);
        setLoading(false);

        router.push("/dashboard/onboarding");
      } else {
        console.log("Something went wrong");
        toast.error(response.data.data.message);
      }

      setLoading(false);
    } catch (error) {
      setError(error.response.data.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 md:pt-24">
      <div className="min-h-screen h-full flex justify-center items-center place-content-center">
        <div className="md:w-3/5 max-w-lg">
          <div className="bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h1 className="text-4xl mb-8 text-grey_40 font-bold">Login</h1>
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
                    <span className="ml-1 underline cursor-pointer">
                      Reset it
                    </span>
                  </Link>
                </p>
              </div>
              <div className="text-center my-6">
                <button
                  className="bg-cabiza_blue text-white active:bg-cabiza_blue text-lg font-semibold px-6 py-3 rounded-lg outline-none focus:outline-none w-full"
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
                  <a className="text-secondary ml-1">Signup</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.layout = Auth;
