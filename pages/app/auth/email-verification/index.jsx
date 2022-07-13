import React from "react";
import Link from "next/link";

import Auth from "@/layouts/Auth";

export default function Login() {
  return (
    <div className="pt-5 md:pt-24">
      <div className="min-h-screen h-full flex justify-center items-center place-content-center">
        <div className="w-full px-6 md:px-0 md:w-3/5 max-w-lg">
          <div className="bg-white py-10 pb-6 w-full border border-grey_80 rounded-xl px-6 md:px-10">
            <img src="/images/email.svg" alt="..." className="mx-auto mb-8" />
            <h1 className="text-4xl text-grey_40 font-bold text-center mb-3">
              Email Confirmation
            </h1>
            <div className="w-4/5 mx-auto text-grey_60 text-center">
              We have sent email to you to confirm the validity of your email
              address. After receiving the email follow the link provided to
              complete registration.
            </div>
            <div className="border-t-2 border-grey_80 mt-6"></div>

            <div className="py-6 text-center">
              <p className="text-grey_40 text-lg">
                Email not received?{" "}
                <span className="text-primary ml-1">
                  Resend confirmation mail
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.layout = Auth;
