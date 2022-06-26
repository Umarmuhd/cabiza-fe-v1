/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import Link from "next/link";
import QRCode from "react-qr-code";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import AuthContext from "@/context/AuthContext";
import Alert from "@/components/Alert";

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
          <QRCode
            value={`https://cabiza.net/${user.username}`}
            id={"svg-chart"}
          />
        </div>
        <div className="w-[90%] mx-auto px-10 mt-6 border-b pb-12 border-secondary_sky_base">
          <p className="w-[80%] mx-auto text-secondary_ink_lighter text-lg">
            Copy and share your profile follow link
          </p>

          <div className="mt-6 flex mx-auto w-[max-content]">
            <CopyToClipboard
              text={`https://cabiza.net/${user.username}`}
              onCopy={() =>
                toast.custom(<Alert color="#24C78C" text="Copied success !" />)
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
          <Link href="/profile/customize">
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
