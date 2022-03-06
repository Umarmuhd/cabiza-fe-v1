import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { API_URL } from "config/index";
import axios from "axios";

export default function ResetPassword() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    repeat_password: Yup.string()
      .required("Repeat Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { email, token } = router.query;

  const handleReset = async (value) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/auth/reset-password`, {
        email,
        password: value.password,
        token,
      });
      setLoading(false);
      router.push("/auth/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-full min-h-screen pt-10 md:pt-24">
      <div className="h-full flex justify-center items-center place-content-center">
        <div className="md:w-3/5 max-w-lg">
          <div className="bg-white py-10 px-10 w-full border border-grey_80 rounded-xl">
            <form onSubmit={handleSubmit(handleReset)}>
              <div className="mb-8">
                <h1 className="text-4xl text-grey_40 font-bold">
                  Reset password
                </h1>
                <p className="mt-3 text-grey_60">
                  Resetting password for {email}
                </p>
              </div>

              <div className="relative w-full mb-6">
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

              <div className="relative w-full mb-6">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="repeat_password"
                >
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="repeat_password"
                  placeholder="........"
                  {...register("repeat_password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors?.repeat_password ? (
                  <p className="text-left text-red-600 text-xs mt-1">
                    {errors?.repeat_password?.message}
                  </p>
                ) : null}
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-cabiza_blue text-white active:bg-cabiza_blue text-lg font-semibold px-6 py-3 rounded-lg outline-none focus:outline-none w-full"
                  type="submit"
                  style={{
                    transition: "all 0.15s ease 0s",
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.08)",
                  }}
                  disabled={loading}
                >
                  {loading ? "..." : "Reset password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
