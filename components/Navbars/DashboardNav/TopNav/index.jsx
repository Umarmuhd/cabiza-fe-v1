import UserMenu from "@/components/Dropdowns/UserMenu";
import Notifications from "@/components/Notifications";
import React, { useState } from "react";

export default function TopNav({title}) {
  return (
    <header className='sticky top-0 bg-white border border-secondary_sky_base border-l-0 z-30'>
      <div className=' px-4 sm:px-0 lg:px-0 '>
        {/* <div className=" px-4 sm:px-6 lg:px-8 "> */}
        <div className='md:w-43/50 flex items-center justify-between h-16 -mb-px mx-auto'>
          {/* Header: Left side */}
          <div className='flex h-[100%]'>
            {/* Hamburger button */}
            <button
              className='text-slate-500 hover:text-slate-600 lg:hidden'
              aria-controls='sidebar'
            >
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='4' y='5' width='16' height='2' />
                <rect x='4' y='11' width='16' height='2' />
                <rect x='4' y='17' width='16' height='2' />
              </svg>
            </button>
            <span className='hidden md:flex font-medium text-3xl text-secondary_ink_dark border-r border-r-secondary_sky_base h-[100%] items-center pr-5'>
              {title}
            </span>

            <select
              name=''
              id=''
              className='ml-3 w-18 h-10 my-auto bg-primary_brand_lightest px-4 rounded-full text-secondary_ink_dark fill-secondary_ink_dark'
            >
              <option value='Eng'>Eng</option>
            </select>
          </div>

          {/* Header: Right side */}
          <div className='flex items-center h-[100%]'>
            {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}
            <svg
              width='25'
              height='25'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='16' cy='16' r='16' fill='#303437' />
              <path
                d='M16 8.875C12.0713 8.875 8.875 12.0713 8.875 16C8.875 19.9287 12.0713 23.125 16 23.125C19.9287 23.125 23.125 19.9287 23.125 16C23.125 12.0713 19.9287 8.875 16 8.875ZM16 21.625C14.8875 21.625 13.7999 21.2951 12.8749 20.677C11.9499 20.0589 11.2289 19.1804 10.8032 18.1526C10.3774 17.1248 10.266 15.9938 10.4831 14.9026C10.7001 13.8115 11.2359 12.8092 12.0225 12.0225C12.8092 11.2359 13.8115 10.7001 14.9026 10.4831C15.9938 10.266 17.1248 10.3774 18.1526 10.8032C19.1804 11.2289 20.0589 11.9499 20.677 12.8749C21.2951 13.7999 21.625 14.8875 21.625 16C21.6233 17.4913 21.0301 18.9211 19.9756 19.9756C18.9211 21.0301 17.4913 21.6233 16 21.625Z'
                fill='white'
              />
              <path d='M15.25 4.75H16.75V7H15.25V4.75Z' fill='white' />
              <path d='M15.25 25H16.75V27.25H15.25V25Z' fill='white' />
              <path d='M25 15.25H27.25V16.75H25V15.25Z' fill='white' />
              <path d='M4.75 15.25H7V16.75H4.75V15.25Z' fill='white' />
              <path
                d='M22.2197 23.2804L23.2804 22.2197L24.7804 23.7197L23.7197 24.7804L22.2197 23.2804Z'
                fill='white'
              />
              <path
                d='M7.21973 8.28041L8.28041 7.21973L9.78041 8.71973L8.71973 9.78041L7.21973 8.28041Z'
                fill='white'
              />
              <path
                d='M7.2196 23.7197L8.7196 22.2197L9.78029 23.2803L8.28029 24.7803L7.2196 23.7197Z'
                fill='white'
              />
              <path
                d='M22.2197 8.71973L23.7197 7.21973L24.7804 8.28041L23.2804 9.78041L22.2197 8.71973Z'
                fill='white'
              />
            </svg>

            <Notifications />
            {/* <Help /> */}
            {/*  Divider */}
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}