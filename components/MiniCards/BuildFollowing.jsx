import React from "react";

export default function BuildFollowing() {
  return (
    <div className="rounded-2xl border border-grey_60 p-6">
      <div className="flex items-center justify-center flex-col">
        <img src="/images/icons/building.svg" alt="..." />

        <h1 className="text-2xl font-semibold text-dark_ my-5 leading-6">
          Not ready to sell? Build a following
        </h1>
        <p className="text-lg font-medium text-grey_80 text-center md:w-3/4 mx-auto mb-5">
          Start sharing and grow your audience before releasing a new product or
          starting a membership.
        </p>

        <button className="text-lg font-semibold rounded-lg text-center w-full text-cabiza_blue border border-cabiza_blue py-3">
          Customize your profile
        </button>
      </div>
    </div>
  );
}
