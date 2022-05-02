/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import Link from "next/link";
import QRCode from "react-qr-code";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import AuthContext from "@/context/AuthContext";

const saveSvgAsPng = require("save-svg-as-png");

const LeftIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.07 5.93005L4 12.0001L10.07 18.0701"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12H4.16998"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Share = () => {
  const { user } = useContext(AuthContext);

  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: "white",
  };

  const handleSave = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("svg-chart"),
      "cabiza.png",
      imageOptions
    );
  };

  return (
    <div className="bg-white rounded-2xl p-12 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12">
      <div className="text-center relative">
        <h1 className="text-3xl font-semibold mb-4">Share to friends</h1>
        <div className="rounded-2xl bg-secondary_sky_lighter w-[max-content] p-4 mx-auto flex">
          <QRCode value="hey" id={"svg-chart"} />
        </div>
        <div className="w-[90%] mx-auto px-10 mt-6 border-b pb-12 border-secondary_sky_base">
          <p className="w-[80%] mx-auto text-secondary_ink_lighter text-lg">
            Copy and share your profile follow link
          </p>

          <div className="mt-6 flex mx-auto w-[max-content]">
            <CopyToClipboard
              text={`https://${user.username}.cabiza.net`}
              onCopy={() =>
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
                      Copied success !
                    </span>
                  </div>
                )
              }
            >
              <button className="bg-primary flex px-4 text-white py-2 rounded-full">
                Copy link
              </button>
            </CopyToClipboard>

            <button
              className="text-primary flex px-4 bg-primary_brand_lightest py-2 rounded-full ml-4"
              onClick={handleSave}
            >
              Save image
            </button>
          </div>
        </div>
        <div className="mt-7 text-center w-[max-content] mx-auto text-primary">
          <Link href="/dashboard/profile/customize">
            <a className="flex items-center">
              <LeftIcon />
              <span className="ml-2">Back</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Share;
