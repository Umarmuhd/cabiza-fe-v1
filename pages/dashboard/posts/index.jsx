import React from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

import { classNames } from "../../../libs/helper";

import Dashboard from "../../../layouts/Dashboard";

import WorkFlow from "../../../components/Posts/WorkFlow";
import PostsList from "../../../components/Posts/PostsList";
import Scheduled from "../../../components/Posts/Scheduled";

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
      fill="white"
    />
    <path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill="white"
    />
  </svg>
);

export default function Posts() {
  return (
    <div>
      <Tab.Group>
        <div className="bg-grey_95 border-b border-grey_60 py-6 md:px-0 px-4">
          <div className="flex justify-between items-center md:w-4/5 mx-auto">
            <Tab.List as={"div"} className="flex items-center">
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Published
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Scheduled
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-0",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Workflows
              </Tab>
            </Tab.List>

            <div className="flex items-center justify-between">
              <div className="flex rounded-[100px] shadow-sm mr-6">
                <input
                  type="text"
                  className="border border-r-0 border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-l-[100px]"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="search"
                  placeholder="Search..."
                />
                <div className="inline-flex items-center px-3 border border-l-0 border-gray-300 text-gray-500 text-sm rounded-r-[100px]">
                  <span className="rounded-full p-2 bg-cabiza_blue h-7 w-7">
                    <img src="/images/icons/search.svg" alt="..." />
                  </span>
                </div>
              </div>
              <Link href="/dashboard/posts/new">
                <button className="py-4 px-8 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg">
                  <span className="mr-2.5">New Post </span> <PlusIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Tab.Panels>
          <Tab.Panel>
            <PostsList />
          </Tab.Panel>
          <Tab.Panel>
            <Scheduled />
          </Tab.Panel>
          <Tab.Panel>
            <WorkFlow />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Posts.layout = Dashboard;
