/* eslint-disable react/no-unknown-property */
import React from 'react';
import Link from 'next/link';

const LeftIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.07 5.93005L4 12.0001L10.07 18.0701'
      stroke='#5B44E9'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 12H4.16998'
      stroke='#5B44E9'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const FacebookIcon = () => (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M24.5 12.073C24.5 5.40577 19.1269 0 12.5 0C5.87309 0 0.5 5.40577 0.5 12.073C0.5 18.0984 4.88761 23.0933 10.6252 24V15.5636H7.57748V12.073H10.6252V9.41251C10.6252 6.38703 12.4173 4.7147 15.1578 4.7147C16.4707 4.7147 17.8444 4.95069 17.8444 4.95069V7.92186H16.3306C14.8406 7.92186 14.3748 8.85225 14.3748 9.80808V12.0729H17.7026L17.171 15.5636H14.3747V23.9999C20.1123 23.0949 24.5 18.1001 24.5 12.073Z'
        fill='white'
      />
    </svg>
)

const TwitterIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.3258 21.0949C16.8164 21.0949 21.4604 14.0605 21.4604 7.96032C21.4604 7.76052 21.4604 7.56162 21.4469 7.36362C22.3503 6.71014 23.1302 5.90101 23.75 4.97412C22.9075 5.34744 22.0137 5.59227 21.0986 5.70042C22.0623 5.1235 22.7835 4.21612 23.1281 3.14712C22.2219 3.68483 21.2306 4.06378 20.1968 4.26762C19.5008 3.52754 18.5803 3.03747 17.5777 2.87326C16.5751 2.70905 15.5463 2.87985 14.6506 3.35923C13.7549 3.83861 13.0421 4.59985 12.6226 5.52513C12.2031 6.45042 12.1002 7.48818 12.3299 8.47782C10.4946 8.38581 8.69912 7.90887 7.06008 7.07795C5.42103 6.24704 3.97505 5.08072 2.816 3.65472C2.22568 4.67097 2.04488 5.874 2.31041 7.01887C2.57593 8.16374 3.26782 9.16436 4.2452 9.81702C3.51057 9.79525 2.79195 9.59707 2.15 9.23922C2.15 9.25812 2.15 9.27792 2.15 9.29772C2.15029 10.3635 2.51924 11.3964 3.19425 12.2212C3.86927 13.046 4.80881 13.6119 5.8535 13.8229C5.17388 14.0083 4.46082 14.0354 3.7691 13.9021C4.06408 14.8194 4.63838 15.6215 5.41166 16.1963C6.18495 16.7711 7.11855 17.0898 8.0819 17.1079C6.44726 18.3926 4.42795 19.09 2.3489 19.0879C1.98161 19.0872 1.61468 19.065 1.25 19.0213C3.36107 20.3761 5.81742 21.0947 8.3258 21.0913" fill="white"/>
    </svg>
)

const InstagramIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.99 7.80863V7.81V16.19C21.99 17.9106 21.4791 19.2238 20.5964 20.1064C19.7138 20.9891 18.4006 21.5 16.68 21.5H8.31C6.58945 21.5 5.27634 20.9891 4.39377 20.1054C3.51114 19.2217 3 17.9059 3 16.18V7.81C3 6.08944 3.51093 4.77618 4.39355 3.89355C5.27618 3.01093 6.58944 2.5 8.31 2.5H16.69C18.4107 2.5 19.7237 3.01097 20.605 3.89333C21.4861 4.77559 21.9947 6.08838 21.99 7.80863ZM18.5445 7.58165L18.564 7.56404L18.5816 7.54448C18.7081 7.40399 18.8091 7.24625 18.8815 7.07231C18.9528 6.90116 19 6.70585 19 6.5C19 6.29668 18.954 6.10363 18.8842 5.93401C18.8063 5.73429 18.698 5.58483 18.5816 5.45552L18.5543 5.42512L18.5223 5.39956C18.5124 5.39164 18.5066 5.38652 18.4967 5.37788C18.4884 5.37068 18.4774 5.36103 18.4588 5.34528C18.4322 5.32261 18.3857 5.28385 18.3289 5.24837C18.2491 5.19601 18.1635 5.15129 18.0721 5.11758C17.9824 5.07593 17.8867 5.04498 17.7794 5.02786C17.2908 4.92749 16.7774 5.09551 16.4364 5.43645L16.4271 5.44574L16.4184 5.45552C16.302 5.58483 16.1937 5.73429 16.1158 5.93401C16.046 6.10363 16 6.29668 16 6.5C16 6.70585 16.0472 6.90116 16.1185 7.07231C16.1909 7.24625 16.2919 7.40399 16.4184 7.54448L16.4271 7.55426L16.4364 7.56355C16.7237 7.85077 17.1024 8 17.5 8C17.7059 8 17.9012 7.95285 18.0723 7.88154C18.2462 7.80906 18.404 7.70809 18.5445 7.58165ZM8.12 12C8.12 14.4161 10.0839 16.38 12.5 16.38C14.9161 16.38 16.88 14.4161 16.88 12C16.88 9.58386 14.9161 7.62 12.5 7.62C10.0839 7.62 8.12 9.58386 8.12 12Z" fill="white" stroke="white"/>
    </svg>
)

const Connections = () => {
  return (
    <div className='bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12'>
      <div className='text-center relative'>
        <div style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}>
          <img
            src='/images/connections-placeholder.png'
            className='w-[100%] h-[auto] m-auto border border-2 rounded-2xl'
          />
        </div>
        <div className='w-[90%] mx-auto px-10 mt-12'>
          <h3 className='text-3xl text-secondary_ink_dark font-semibold mb-3'>
            Connect social handles
          </h3>
          <p className='w-[80%] mx-auto text-secondary_ink_lighter text-lg'>
            Add your social handles to reach more customers.
          </p>

          <div className='mt-10'>
            <div className='bg-secondary_sky_lighter flex justify-between rounded-full p-4 py-3'>
              <button className='bg-[#0078FF] flex px-4 text-white py-2 rounded-full w-[10rem]'>
                <FacebookIcon />
                <p className='ml-4'>Facebook</p>
              </button>

              <button className='text-primary bg-transparent flex px-4 text-white py-2 rounded-full justify-between border border-primary'>
                Connect
              </button>
            </div>

            <div className='bg-secondary_sky_lighter flex justify-between rounded-full p-4 py-3 mt-2'>
              <button className='bg-[#1DA1F2] flex px-4 text-white py-2 rounded-full w-[10rem]'>
                <TwitterIcon />
                <p className='ml-4'>Twitter</p>
              </button>

              <button className='text-primary bg-transparent flex px-4 text-white py-2 rounded-full justify-between border border-primary'>
                Connect
              </button>
            </div>

            <div className='bg-secondary_sky_lighter flex justify-between rounded-full p-4 py-3 mt-2'>
              <button
                className='flex px-4 text-white py-2 rounded-full w-[10rem]'
                style={{
                  'background-image':
                    'linear-gradient(to right, #4F5BD5, #962FBF, #D62978, #F97D1D, #FDDA76, yellow)',
                }}
              >
                <InstagramIcon />
                <p className='ml-4'>Instagram</p>
              </button>

              <button className='text-primary bg-transparent flex px-4 text-white py-2 rounded-full justify-between border border-primary'>
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className='mt-7 text-center w-[max-content] mx-auto text-primary'>
          <Link href='/dashboard/profile/customize'>
            <a className='flex items-center'>
              <LeftIcon />
              <span className='ml-2'>Back</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connections;
