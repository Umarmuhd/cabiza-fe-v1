import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { API_URL, appKey } from "config/index";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import axios from "axios";

import styles from "./styles/index.module.css";

import Auth from "layouts/Auth";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignup = async (values) => {
    const { name, email, password } = values;
    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/auth/signup`, {
        full_name: name,
        email,
        password,
      });

      toast.success("Signup successful");
      setLoading(false);
      return router.push("/auth/email-verification");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 md:pt-24">
      <div className="min-h-screen h-full flex justify-center items-center">
        <div className="md:w-3/5 max-w-lg">
          <div className="bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
            <form onSubmit={handleSubmit(handleSignup)}>
              <h1 className="text-4xl mb-8 text-dark font-bold">
                Sign up for free
              </h1>
              <p className="my-3 text-sm text-red-500">{error}</p>
              <div className="relative w-full mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="name"
                  placeholder="Cabiza Abiza"
                  autoComplete="off"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Full name is required
                  </p>
                )}
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
                  autoComplete="off"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors?.password ? (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Password is required
                  </p>
                ) : null}
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
                  {loading ? "..." : "Get Started"}
                </button>
              </div>
              <p className="text-center text-grey_40 text-lg">
                Already have an account?
                <Link href="/auth/login">
                  <a className="text-secondary ml-1">Login</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.layout = Auth;
