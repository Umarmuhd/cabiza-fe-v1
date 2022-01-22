import React from "react";

import { Switch } from "@headlessui/react";

const PostItems = () => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <li className="p-6 rounded-2xl border border-grey mb-4">
      <div className="mb-10">
        <h2 className="text-4xl leading-9 text-grey_20 font-semibold mb-1">
          User Post Preview
        </h2>
        <p className="text-xs text-grey_80">ABOUT 2 HOURS AGO</p>
      </div>

      <div className="">
        <div className="flex justify-between">
          <div className="text-grey_40">
            I'm currently testing my account here as a newbie to see how it
            works.
          </div>
          <ul className="flex justify-between items-center w-2/5">
            <li className="mr-2">
              <button className="text-grey_95 bg-grey_85 p-2 rounded-lg border border-[#666666]">
                Queued
              </button>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-[#666666]">
                Edit
              </button>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-[#666666]">
                View
              </button>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-[#666666]">
                Duplicate
              </button>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-cabiza_red bg-cabiza_red text-white">
                Delete
              </button>
            </li>
          </ul>
        </div>

        <div className="border-b border-grey_80 my-6"></div>

        <div className="flex justify-start">
          <button className="p-2 rounded-lg border border-[#666666]">
            Download Attachments
          </button>
        </div>
      </div>
    </li>
  );
};

export default function Scheduled() {
  return (
    <main className="h-full w-full relative">
      {(
        <div className="w-4/5 mx-auto md:py-10">
          <h1 className="text-grey_40 uppercase mb-4">
            TO BE SENT TO ALL OF YOUR CUSTOMERS AND FOLLOWERS ON DECEMBER 11,
            2021 AT 8PM
          </h1>

          <ul>
            <PostItems />
            <PostItems />
            <PostItems />
          </ul>
        </div>
      ) || (
        <div className="w-4/5 mx-auto md:py-20">
          <div className="text-center">
            <img src="/images/empty.svg" alt="..." className="mx-auto mb-8" />

            <h1 className="text-dark_ text-4xl leading-9 font-semibold mb-2">
              Empty post
            </h1>
            <p className="text-dark_">
              Click on New Post to create your first post!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
