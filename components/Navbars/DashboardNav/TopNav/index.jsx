import UserMenu from "@/components/Dropdowns/UserMenu";
import Notifications from "@/components/Notifications";
import React, { useState } from "react";

export default function TopNav({title, children, showLanguage}) {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <header className='sticky top-0 border-b border-b-secondary_sky_base bg-white z-30'>
      <div className=' px-4 sm:px-0 lg:px-0 '>
        {/* <div className=" px-4 sm:px-6 lg:px-8 "> */}
        <div className='md:w-43/50 flex items-center justify-between h-16 -mb-px mx-auto px-3 md:py-0'>
          <svg width="40" height="32" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2489 7.87925C19.2736 6.16921 24.5476 8.02628 26.0275 12.0281C27.5074 16.0299 24.6338 20.6614 19.6092 22.3715C14.5845 24.0815 9.31059 22.2244 7.83068 18.2226C6.35078 14.2208 9.22429 9.58929 14.2489 7.87925Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.1531 23.4359C17.2375 23.1897 19.8617 24.5258 20.0152 26.4212C20.1654 28.3167 17.7873 30.0523 14.7028 30.2984C11.6184 30.5445 8.99417 29.2084 8.84074 27.313C8.68732 25.4176 11.0654 23.682 14.1531 23.4359Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M25.6279 18.9961C28.5238 17.1518 31.8544 17.219 33.0658 19.1464C34.2804 21.0738 32.9155 24.1295 30.0196 25.9738C27.1238 27.818 23.7932 27.7509 22.5818 25.8235C21.3703 23.8961 22.7352 20.8404 25.6279 18.9961Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.7179 30.6468C22.0704 30.2888 24.1704 31.1774 24.4069 32.6349C24.6435 34.0924 22.927 35.5628 20.5745 35.9208C18.222 36.2788 16.122 35.3902 15.8855 33.9326C15.649 32.4751 17.3654 31.0048 19.7179 30.6468Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M27.9964 13.1852C26.4174 10.8934 26.6891 8.22766 28.6037 7.2304C30.5183 6.23314 33.3535 7.28154 34.9325 9.57651C36.5115 11.8683 36.2398 14.534 34.3252 15.5313C32.4106 16.5254 29.5786 15.477 27.9964 13.1852Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2.52792 21.9879C2.0197 20.019 2.87313 18.261 4.43614 18.0564C5.99916 17.8518 7.68043 19.2838 8.18865 21.2496C8.69687 23.2185 7.84343 24.9765 6.28042 25.181C4.71741 25.3856 3.03933 23.9569 2.52792 21.9879Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1.84076 28.3422C1.50515 27.0445 2.0677 25.8843 3.10012 25.75C4.13254 25.6158 5.23847 26.5587 5.57729 27.8564C5.9129 29.1541 5.35035 30.3144 4.31793 30.4486C3.28551 30.5829 2.17638 29.64 1.84076 28.3422Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4.27316 11.3345C5.28321 9.81304 6.86858 9.08107 7.8179 9.69797C8.76721 10.3149 8.71608 12.0473 7.70923 13.5656C6.69919 15.087 5.11379 15.819 4.16448 15.2021C3.21517 14.5852 3.26312 12.8528 4.27316 11.3345Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9252 4.26738C13.6384 3.32126 15.5498 3.33404 16.1955 4.29614C16.838 5.25824 15.9686 6.80527 14.2553 7.75139C12.5421 8.69751 10.6307 8.68472 9.98501 7.72262C9.34255 6.76052 10.212 5.21349 11.9252 4.26738Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M23.4448 2.80985C26.0083 2.63725 28.2681 3.42354 28.4886 4.56464C28.7124 5.70573 26.8137 6.76693 24.2503 6.93953C21.6868 7.11213 19.427 6.32582 19.2064 5.18473C18.9827 4.04364 20.8781 2.98245 23.4448 2.80985Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M36.8918 19.2934C38.6914 17.9925 41.0215 18.1363 42.0987 19.613C43.1758 21.0897 42.5909 23.3399 40.7914 24.6377C38.9918 25.9386 36.6617 25.7947 35.5845 24.318C34.5074 22.8445 35.0923 20.5943 36.8918 19.2934Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M34.0215 1.86053C35.3927 2.34638 36.2397 3.58016 35.9105 4.61578C35.5813 5.65459 34.2037 6.10208 32.8324 5.61623C31.4612 5.13039 30.6142 3.8966 30.9434 2.86099C31.2726 1.82218 32.6503 1.37469 34.0215 1.86053Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.6055 0.243188C19.737 -0.153159 20.9069 -0.0540745 21.2201 0.460537C21.5334 0.975148 20.8717 1.7103 19.7402 2.10665C18.6087 2.4998 17.4389 2.40391 17.1256 1.8893C16.8156 1.37469 17.4772 0.639534 18.6055 0.243188Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M6.07272 6.93633C6.91016 6.10848 7.96175 5.59387 8.41883 5.78565C8.8791 5.97743 8.57226 6.80528 7.73482 7.63313C6.89738 8.46099 5.84578 8.9756 5.3887 8.78382C4.92843 8.59204 5.23528 7.76418 6.07272 6.93633Z" fill="#5B44E9" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0.111509 16.634C0.380002 15.5473 1.04805 14.6523 1.60102 14.6331C2.15718 14.6139 2.38731 15.4802 2.11882 16.5637C1.85033 17.6505 1.18228 18.5454 0.629315 18.5646C0.0763481 18.587 -0.156983 17.7208 0.111509 16.634Z" fill="#5B44E9" />
          </svg>

          {/* Header: Left side */}
          <div className='flex h-[100%] m-auto'>
            {/* Hamburger button */}            
            {title ? <span className='md:flex font-medium md:text-2xl text-3xl text-secondary_ink_dark md:border-r border-r-secondary_sky_base md:h-[100%] items-center pr-5 m-auto h-[max-content]'>
              {title}
            </span>: null}
            {children}

            {showLanguage ? <label className='md:flex items-center ml-3 w-[5.7rem] h-10 my-auto bg-primary_brand_lightest pl-4 pr-3 rounded-full text-secondary_ink_dark fill-secondary_ink_dark hidden'>
              <select
                name=''
                id=''
                className='bg-transparent outline-none w-[100%]'
              >
                <option value='Eng' selected>
                  Eng
                </option>
                <option value='Spa'>Spa</option>
              </select>
            </label> : null}
          </div>

          <button
            className='text-slate-500 hover:text-slate-600 md:hidden block'
            aria-controls='sidebar'
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <span className='sr-only'>Open sidebar</span>
            <svg
              className={`w-6 h-6 fill-current ${showNavbar ? 'hidden' : "block"}`}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='4' y='5' width='16' height='2' />
              <rect x='4' y='11' width='16' height='2' />
              <rect x='4' y='17' width='16' height='2' />
            </svg>
            <span className={`fill-current text-2xl ${showNavbar ? 'block' : "hidden"}`}>x</span>

            {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 fill-current ${showNavbar ? 'block' : "hidden"}`}>
              <path d="M11 1L1 11M1 1L11 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>             */}
          </button>

          {/* Header: Right side */}
          <div className='flex items-center h-[100%]'>
            {/* <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} /> */}

            <button className='w-10 h-10 md:flex items-center justify-center bg-primary_brand_lightest hover:bg-slate-200 transition duration-150 p-2 rounded-full hidden'>
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

            </button>

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