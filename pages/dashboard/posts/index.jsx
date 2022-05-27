import React from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import axios from 'axios';

import { classNames } from '../../../libs/helper';

import Dashboard from '../../../layouts/Dashboard';

import WorkFlow from '../../../components/Posts/WorkFlow';
import PostsList from '../../../components/Posts/PostsList';
import Scheduled from '../../../components/Posts/Scheduled';
import FullNav from '@/components/Navbars/DashboardNav/FullNav';

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

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.46666 11.267C9.11762 11.267 11.2667 9.11796 11.2667 6.46699C11.2667 3.81602 9.11762 1.66699 6.46666 1.66699C3.81569 1.66699 1.66666 3.81602 1.66666 6.46699C1.66666 9.11796 3.81569 11.267 6.46666 11.267Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6959 11.6347C10.9786 12.488 11.6239 12.5734 12.1199 11.8267C12.5733 11.144 12.2746 10.584 11.4533 10.584C10.8453 10.5787 10.5039 11.0534 10.6959 11.6347Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Posts() {
  return (
    <div className="md:w-[85%] w-[100%] ml-auto">
      <Tab.Group>
        <FullNav title="Posts">
          <div className="flex justify-between items-center md:w-43/50 mx-auto">
            <Tab.List as={'div'} className="flex items-center">
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Published
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Scheduled
              </Tab>
            </Tab.List>

            <div className="flex items-center justify-between">
              <div className="hidden md:flex rounded-[100px] shadow-sm mr-6">
                <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative">
                  <input
                    type="search"
                    id="search"
                    className="h-10 w-[18rem] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none text-sm rounded-full"
                    placeholder="Search..."
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center h-[2rem] my-auto mr-1 px-2 bg-primary rounded-[50%]">
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <Link href="/dashboard/posts/create">
                <a className="py-2 px-4 bg-primary flex items-center font-medium text-white rounded-[48px]">
                  <PlusIcon /> <span className="ml-2">New Post </span>
                </a>
              </Link>
            </div>
          </div>
        </FullNav>

        <Tab.Panels>
          <Tab.Panel>
            <PostsList />
          </Tab.Panel>
          <Tab.Panel>
            <Scheduled />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Posts.layout = Dashboard;
