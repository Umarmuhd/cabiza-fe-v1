import React, {useEffect, useState, useRef} from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import useRouter from 'next/router';
import AuthContext from '@/context/AuthContext';
import axios from 'axios';

import { classNames } from '../../../libs/helper';

import Dashboard from '../../../layouts/Dashboard';

import WorkFlow from '../../../components/Posts/WorkFlow';
import PostsList from '../../../components/Posts/PostsList';
import Scheduled from '../../../components/Posts/Scheduled';
import FullNav from '@/components/Navbars/DashboardNav/FullNav';

const PlusIcon = ({ className }) => {
  const size = useWindowSize();
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return size.width < 480 ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 9V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg> : <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""}`}
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
};

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

  const [openSearchContainer, setOpenSearchContainer] =  useState(false);
  const searchInput = useRef();

  // useEffect(() =>{ console.log(searchInput.current.value) }, [searchInput])

  const router = useRouter;

  
  
  const changeRequestQuery = () => {
    router.push(`/dashboard/posts?s=${searchInput.current.value}`)
    searchInput.current.value = "";
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      changeRequestQuery()
    }
  } 

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
                    'text-md sm:mr-10 mr-7 pb-2 font-medium border-b border-b-[transparent]',
                    selected
                      ? ' sm:font-bold text-primary border-b !border-b-primary'
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
                    'text-md mr-10 pb-2 font-medium border-b border-b-[transparent]',
                    selected
                      ? ' sm:font-bold text-primary border-b !border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Scheduled
              </Tab>
            </Tab.List>

            <div className="flex items-center justify-between">
              <div className="hidden md:flex rounded-[100px] shadow-sm mr-6">
                <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative bg-white">
                  <input
                    type="search"
                    id="search"
                    className="h-10 w-[18rem] text-secondary_ink_lighter px-4 outline-none appearance-none text-sm rounded-full border-0"
                    placeholder="Search..."
                    ref={searchInput}
                    onKeyDown={handleKeyDown}
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center h-[2rem] my-auto mr-1 px-2 bg-primary rounded-[50%] z-[100] cursor-pointer" type="submit" onClick={changeRequestQuery}>
                    <SearchIcon />
                  </button>
                </div>
              </div>

              <button className="bg-primary_brand_lightest p-[.5rem] mr-4 rounded-full block sm:hidden" onClick={() => setOpenSearchContainer(true)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.2rem] h-[1.2rem]">
                  <path d="M7.3335 13.3335C10.6472 13.3335 13.3335 10.6472 13.3335 7.3335C13.3335 4.01979 10.6472 1.3335 7.3335 1.3335C4.01979 1.3335 1.3335 4.01979 1.3335 7.3335C1.3335 10.6472 4.01979 13.3335 7.3335 13.3335Z" stroke="#303437" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.6201 13.7934C12.9734 14.86 13.7801 14.9667 14.4001 14.0334C14.9668 13.18 14.5934 12.48 13.5668 12.48C12.8068 12.4734 12.3801 13.0667 12.6201 13.7934Z" stroke="#303437" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openSearchContainer ? <div className="h-[100%] z-[120] w-[100%] bg-secondary_ink_darkest fixed top-0 left-0 opacity-70" onClick={() => setOpenSearchContainer(false)}></div> : null}


              {openSearchContainer ? <div className="fixed bottom-0 left-0 z-[121] h-[90%] w-[100%] bg-white rounded-t-3xl overflow-hidden flex flex-col items-center">
                <svg width="48" height="5" viewBox="0 0 48 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-3">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.11929 1.11929 0 2.5 0H45.5C46.8807 0 48 1.11929 48 2.5C48 3.88071 46.8807 5 45.5 5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#CDCFD0"/>
                </svg>

                <div className="md:flex rounded-[100px] shadow-sm mr-6 mt-5">
                  <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative">
                    <input
                      type="search"
                      id="search-mobile"
                      className="h-10 w-[18rem] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none text-sm rounded-full border-0"
                      placeholder="Search..."
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center h-[2rem] my-auto mr-1 px-2 bg-primary rounded-[50%]">
                      <SearchIcon />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-[100%] mt-3 px-5 py-4">
                  <h4 className="font-semibold text-xl">Recent Searches</h4>
                  <a className="text-primary font-medium">See all</a>
                </div>

                <div className="w-[100%]">
                  <div className="flex justify-between items-center px-8 py-4 border-b border-b-sky_light">
                    <div>
                      <p className="secondary_ink_darkest text-lg font-medium">Jake’s Aftershave</p>
                      <p className="text-secondary_ink_lighter">Emmanuel Jacob</p>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.24046 6.73879L6.24045 6.23879L6.74046 6.23879L14.5752 6.23879C14.7092 6.23879 14.8247 6.12324 14.8247 5.98926C14.8247 5.85528 14.7092 5.73972 14.5752 5.73972L5.99092 5.73972C5.85694 5.73972 5.74139 5.85528 5.74139 5.98926L5.74139 14.5735L5.25048 14.5735L5.74139 14.5735C5.74139 14.6461 5.7685 14.7047 5.81415 14.7503C5.85979 14.796 5.91839 14.8231 5.99092 14.8231L5.99092 15.3208L5.99092 14.8231C6.1249 14.8231 6.24046 14.7075 6.24046 14.5735L6.24046 6.73879Z" fill="#090A0A" stroke="#090A0A" />
                      <path d="M5.58067 6.63998L17.4813 18.5406C17.7712 18.8305 18.252 18.8305 18.5419 18.5406C18.8318 18.2507 18.8318 17.7698 18.5419 17.4799L6.64133 5.57932C6.35142 5.2894 5.87058 5.2894 5.58067 5.57932C5.29075 5.86923 5.29075 6.35006 5.58067 6.63998Z" fill="#090A0A" />
                    </svg>
                  </div>                 

                  <div className="flex justify-between items-center px-8 py-4">
                    <div>
                      <p className="secondary_ink_darkest text-lg font-medium">UI Design Kit</p>
                      <p className="text-secondary_ink_lighter">Lemmy Lado</p>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.24046 6.73879L6.24045 6.23879L6.74046 6.23879L14.5752 6.23879C14.7092 6.23879 14.8247 6.12324 14.8247 5.98926C14.8247 5.85528 14.7092 5.73972 14.5752 5.73972L5.99092 5.73972C5.85694 5.73972 5.74139 5.85528 5.74139 5.98926L5.74139 14.5735L5.25048 14.5735L5.74139 14.5735C5.74139 14.6461 5.7685 14.7047 5.81415 14.7503C5.85979 14.796 5.91839 14.8231 5.99092 14.8231L5.99092 15.3208L5.99092 14.8231C6.1249 14.8231 6.24046 14.7075 6.24046 14.5735L6.24046 6.73879Z" fill="#090A0A" stroke="#090A0A" />
                      <path d="M5.58067 6.63998L17.4813 18.5406C17.7712 18.8305 18.252 18.8305 18.5419 18.5406C18.8318 18.2507 18.8318 17.7698 18.5419 17.4799L6.64133 5.57932C6.35142 5.2894 5.87058 5.2894 5.58067 5.57932C5.29075 5.86923 5.29075 6.35006 5.58067 6.63998Z" fill="#090A0A" />
                    </svg>
                  </div>                 
                </div>
              </div> : null}

              <Link href="/dashboard/posts/create">
                <span className="border-2 border-primary w-[100%] h-[100%] p-1 rounded-full border-dashed sm:border-none">
                  <a className="sm:py-2 sm:px-4 bg-primary flex items-center font-medium text-white rounded-[48px] p-[.3rem]">
                    <PlusIcon/> <span className="ml-2 sm:block hidden">New Post </span>
                  </a>
                </span>
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
