import React, { useState, useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import AuthContext from "@/context/AuthContext";

import Auth from "layouts/Auth";
import toast from "react-hot-toast";
import Alert from "@/components/Alert";
import { login } from "../../../../api_calls/index";

export default function Login() {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const mutation = useMutation(login, {
    onSuccess: (res) => {
      loginUser(res.user, res.token);
      toast.custom(<Alert color="#24C78C">Login successful !</Alert>);
      router.push(res.user?.username ? "/" : "/onboarding");
    },
    onError: (error) => {
      console.log(error);
      setError(error.response.data.message);
    },
  });

  const [error, setError] = useState("");

  const { mutate, isLoading } = mutation;

  const handleLogin = (values) => mutate(values);

  return (
    <div className="pt-5 md:pt-24 h-full flex justify-center items-center place-content-center absolute left-1/2 top-1/2 w-full md:w-3/5 md:px-0 px-6 -translate-x-1/2 -translate-y-1/2">
      <div className="xl:w-3/5 max-w-lg bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
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
              disabled={isLoading}
            >
              {isLoading ? "..." : "Login"}
            </button>
          </div>
          <p className="text-center text-grey_40 text-lg">
            Don't already have an account?
            <Link href="/auth/signup">
              <a className="text-primary ml-1">Signup</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

Login.layout = Auth;
