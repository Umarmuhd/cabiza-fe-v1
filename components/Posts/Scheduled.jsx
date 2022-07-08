import React, { useState, useEffect } from "react";
import moment from "moment";

import { Switch } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import { useWindowSize } from "@/hooks/useWindowSize";

const PostItems = () => {
  const [expanded, setExpanded] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();

  return (
    <div className="mb-4 w-full sm:w-[100%]">
      <div
        className={
          "sm:p-6 py-6 px-3 rounded-2xl border border-secondary_sky_dark w-[100%] " +
          (expanded && size.width > 480 ? "rounded-b-none border-b-0" : "")
        }
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="flex flex-col sm:flex-row">
            {/* <Image
              src="/images/placeholder-image.svg"
              alt="placeholder"
              width={80}
              height={80}
            /> */}

            <img
              src="/images/placeholder-image.svg"
              className="w-[100%] w-[12rem] h-[10rem] object-cover rounded-lg mb-4"
            />
            <div className="sm:ml-6">
              <h2 className="text-lg font-medium text-secondary_ink_darkest mb-2">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p className="text-secondary_brand_light mb-2">
                {" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem pariatur adipisci, amet illo eligendi temporibus consectetur suscipit tenetur ipsam vel distinctio officiis magni ex aut aperiam rerum quibusdam sint, esse, voluptatum fugit hic architecto rem. Temporibus tempore ab, consequatur dicta, quaerat aliquam esse rerum fuga quo alias inventore nisi".slice(
                  0,
                  45
                )}{" "}
                ...
              </p>
              <span className="block text-xs text-secondary_sky_base leading-3 uppercase">
                just now
              </span>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:row-gap-8 md:grid-cols-4 border border-secondary_sky_dark bg-secondary_sky_lightest rounded-lg sm:ml-3 flex flex-col sm:mt-0 mt-5">
            <div className="sm:text-center text-left sm:border-b-[0] border-b md:border-r border-secondary_sky_dark border-b-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary sm:mb-6 mb-2">Emailed</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="sm:text-center text-left sm:border-b-[0] border-b md:border-r border-secondary_sky_dark border-b-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary sm:mb-6 mb-2">Opened</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="sm:text-center text-left sm:border-b-[0] border-b md:border-r border-secondary_sky_dark border-b-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary sm:mb-6 mb-2">Clicks</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="sm:text-center text-left py-2.5 px-4">
              <p className="text-secondary sm:mb-6 mb-2">Views</p>
              <span className="block font-medium">0</span>
            </div>
          </div>
          <li className="">
            <button className="leading-4 text-base font-medium text-secondary_sky_dark sm:py-2 py-3 px-3 sm:rounded-4xl border border-secondary_sky_light bg-secondary_sky_light mt-5 rounded-lg w-[100%] sm:hidden block">
              Queued
            </button>
          </li>
        </div>
      </div>
      {expanded && size.width > 480 && (
        <div className="py-4 px-6 rounded-2xl rounded-t-none border border-t border-secondary_sky_dark bg-secondary_sky_lightest sm:flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-6 py-2 px-4 rounded-4xl flex items-center bg-primary_brand_lightest">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49984 9.22478V7.49992C7.49984 6.95044 7.04931 6.49992 6.49984 6.49992C5.95036 6.49992 5.49984 6.95044 5.49984 7.49992V9.21581C5.1495 9.09585 4.74439 9.17493 4.46628 9.45303L4.81984 9.80659L4.46628 9.45303C4.07769 9.84163 4.07769 10.4782 4.46628 10.8668L5.7707 12.1712C5.79636 12.2019 5.82205 12.2253 5.84243 12.2418C5.90985 12.304 6.00529 12.3754 6.12241 12.4222C6.24033 12.4728 6.36532 12.4999 6.49984 12.4999C6.63116 12.4999 6.75341 12.474 6.86886 12.4258C7.00488 12.3757 7.12072 12.2928 7.20672 12.2068L8.54006 10.8735C8.92865 10.4849 8.92865 9.84829 8.54006 9.4597C8.26019 9.17983 7.85169 9.10152 7.49984 9.22478ZM5.89644 12.2798C5.89687 12.2801 5.89533 12.2791 5.89269 12.2775L5.89539 12.2792L5.89615 12.2796L5.89635 12.2798L5.89644 12.2798ZM5.81294 12.2135L5.81295 12.2135C5.81295 12.2135 5.81294 12.2135 5.81294 12.2135ZM11.7398 7.29325H13.6665C13.757 7.29325 13.8332 7.36939 13.8332 7.45992V10.9533C13.8332 12.0206 13.4645 12.8117 12.9042 13.338C12.3389 13.8689 11.5394 14.1666 10.6198 14.1666H5.37984C4.46028 14.1666 3.66077 13.8689 3.09547 13.338C2.53512 12.8117 2.1665 12.0206 2.1665 10.9533V5.04659C2.1665 3.97924 2.53512 3.18816 3.09547 2.66188C3.66077 2.13095 4.46028 1.83325 5.37984 1.83325H8.2065C8.29703 1.83325 8.37317 1.90939 8.37317 1.99992V3.92659C8.37317 5.78273 9.88369 7.29325 11.7398 7.29325Z"
                  fill="#5B44E9"
                  stroke="#5B44E9"
                />
                <path
                  d="M11.6252 5.37344L11.6252 5.37341H11.62C10.8762 5.37341 10.2866 4.77752 10.2866 4.09341V1.93392C10.9491 2.59723 11.8894 3.54619 12.7184 4.38273C13.08 4.74757 13.4203 5.09102 13.7072 5.38007C12.9964 5.38003 12.2059 5.37955 11.6252 5.37344Z"
                  fill="#5B44E9"
                  stroke="#5B44E9"
                />
              </svg>

              <span className="font-medium leading-4 text-primary">
                Download Attachments
              </span>
            </button>
            <div className="flex items-center">
              <Switch
                checked={enabled}
                // onChange={handlePublish}
                disabled={loading}
                className={`${enabled ? "bg-primary" : "bg-grey_80"}
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
                {enabled ? "Published" : "Unpublished"}
              </span>
            </div>
          </div>
          <ul className="flex items-center">
            <li className="">
              <button className="leading-4 text-base font-medium text-secondary_sky_dark py-2 px-3 rounded-4xl border border-secondary_sky_light bg-secondary_sky_light">
                Queued
              </button>
            </li>
            <li className="pl-3">
              <button className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                Edit
              </button>
            </li>
            <li className="pl-3">
              <Link href={`/`}>
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                  View
                </a>
              </Link>
            </li>
            <li className="pl-3">
              <button className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                Duplicate
              </button>
            </li>
            <li className="pl-3">
              <button
                className="leading-4 text-base font-medium bg-tertiary_red_base py-2 px-3 rounded-4xl border border-tertiary_red_base text-white"
                onClick={() => {}}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Scheduled() {
  return (
    <main className="h-full sm:w-full w-[90%] mx-auto relative">
      {(
        <div className="md:w-43/50 mx-auto md:my-10">
          <div
            className="sm:p-8 py-8 px-6 bg-white rounded-2xl"
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
          >
            <h1 className="text-secondary_ink_dark font-medium text-2xl mb-6">
              All scheduled posts
            </h1>
            <div className={`${styles.cards}`}>
              <ul className={`flex flex-col overflow-hidden w-full`}>
                <PostItems />
                <PostItems />
                <PostItems />
              </ul>
            </div>
          </div>
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
