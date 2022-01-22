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
          <ul className="flex justify-between items-center w-2/6">
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

        <div className="flex justify-between">
          <button className="p-2 rounded-lg border border-[#666666]">
            Download Attachments
          </button>

          <div className="flex items-center">
            <div className="mr-6 text-center">
              <span className="block text-grey_40">0%</span>
              <span className="block text-grey_40">Opens</span>
            </div>
            <div className="text-center">
              <span className="block text-grey_40">0%</span>
              <span className="block text-grey_40">Clicks</span>
            </div>
          </div>

          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-cabiza_blue" : "bg-grey_80"}
  relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-4" : "translate-x-0"}
  pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
            <span className="ml-2 block text-grey_40 text-lg font-medium">
              Unpublished
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function PostsList() {
  return (
    <main className="h-full w-full relative">
      {(
        <div className="w-4/5 mx-auto md:py-10">
          <h1 className="text-grey_40 font-semibold mb-4">
            All Published Posts
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
