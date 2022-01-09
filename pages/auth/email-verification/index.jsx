import React from "react";
import Link from "next/link";

import styles from "./styles/index.module.css";

import Auth from "../../../layouts/Auth";

export default function Login() {
  return (
    <div className="pt-5 md:pt-24">
      <div className="min-h-screen h-full flex justify-center items-center place-content-center">
        <div className="md:w-3/5 max-w-lg">
          <div className="bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
            <form>
              <h1 className="text-4xl mb-8 text-grey_40 font-bold">Login</h1>
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
                />
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
                />
              </div>
              <div className="relative flex justify-end">
                <p className="text-lg text-right text-grey_40">
                  Forgot password?{" "}
                  <span className="ml-1 underline cursor-pointer">
                    Reset it
                  </span>
                </p>
              </div>
              <div className="text-center my-6">
                <button
                  className="bg-secondary text-white active:bg-secondary text-lg font-semibold px-6 py-3 rounded-lg outline-none focus:outline-none w-full"
                  type="submit"
                  style={{
                    transition: "all 0.15s ease 0s",
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Login
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
