import React from "react";
import Link from "next/link";

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

const ChangePicture = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12">
      <div className="text-center relative">
        <div className="rounded-[50%] bg-secondary_sky_light w-[max-content] h-auto mx-auto flex p-3 object-cover">
          <label htmlFor="image" className="mx-auto">
            <img
              src={user?.profile_picture || "/images/profile-placeholder.png"}
              className={
                "m-auto cursor-pointer rounded-[50%] object-cover" +
                user?.profile_picture
                  ? " w-[14rem] h-[14rem]"
                  : " w-[12rem] h-[12rem]"
              }
            />
          </label>
          <input
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            id="image"
            className="hidden"
          />
        </div>

        <div className="w-[90%] mx-auto px-10 mt-12">
          <h3 className="text-3xl text-secondary_ink_dark font-semibold mb-3 mt-[-1.5rem]">
            Choose your profile image
          </h3>
          <p className="w-[80%] mx-auto text-secondary_ink_lighter text-lg mb-10">
            Upload image or drag image to the avatar to upload. Recommended size
            100px by 100px, 72 DPI, JPEG or PNG.
          </p>

          <label
            htmlFor="image"
            className="bg-primary_brand_lightest text-primary py-3 px-7 rounded-3xl cursor-pointer"
          >
            Upload Picture
          </label>
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

export default ChangePicture;
