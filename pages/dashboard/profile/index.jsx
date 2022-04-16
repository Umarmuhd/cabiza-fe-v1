import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

import Dashboard from '@/layouts/Dashboard';
import Link from 'next/link';
import TopNav from '@/components/Navbars/DashboardNav/TopNav';

const EmailIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M17.782 9.98068L17.7821 9.98069L17.7853 9.97806C18.3171 9.54598 18.4018 8.7559 17.9734 8.22133C17.5464 7.66553 16.7469 7.59124 16.2165 8.02045L13.088 10.5193L13.087 10.5201C12.8117 10.7411 12.4159 10.8675 11.995 10.8675C11.5741 10.8675 11.1783 10.7411 10.903 10.5201L10.902 10.5193L7.77346 8.02045C7.22848 7.57933 6.44674 7.69187 6.02194 8.2147L6.02187 8.21465L6.01599 8.22218C5.59983 8.75486 5.68133 9.54469 6.2147 9.97806L6.21469 9.97807L6.21796 9.98068L9.34605 12.4792C10.0977 13.0912 11.0633 13.38 12 13.38C12.9396 13.38 13.8935 13.0896 14.6526 12.4803C14.6527 12.4801 14.6529 12.48 14.6531 12.4799L17.782 9.98068ZM7 4H17C18.4234 4 19.5331 4.35591 20.2848 5.0539C21.0297 5.74565 21.5 6.8453 21.5 8.5V15.5C21.5 17.1547 21.0297 18.2543 20.2848 18.9461C19.5331 19.6441 18.4234 20 17 20H7C5.57665 20 4.4669 19.6441 3.71523 18.9461C2.97026 18.2543 2.5 17.1547 2.5 15.5V8.5C2.5 6.8453 2.97026 5.74565 3.71523 5.0539C4.4669 4.35591 5.57665 4 7 4Z'
      fill='#5B44E9'
      stroke='#5B44E9'
    />
  </svg>
);

export default function Profile() {
  return (
    <div>
      <TopNav title='Profile' />
      <Tab.Group>
        <Tab.Panels>
          <div className='md:w-43/50 mx-auto pt-2 flex justify-between mt-4'>
            <div>
              <h1 className='text-3xl'>
                Welcome, <span className='text-secondary_ink_dark'>Jake</span>
              </h1>
              <p className='text-secondary_brand_light mt-1'>UX/UI Designer</p>
            </div>
            <div className='flex bg-sky_light h-[max-content] p-3 px-4 rounded-lg'>
              <EmailIcon />
              <p className='ml-3'>jakeemm@gmail.com</p>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12'>
            <div className='text-center relative'>
              <img src='/images/product.png' className='w-[100%] h-[auto]' />
              <div className='w-[90%] mx-auto px-10  pb-10 relative border-b border-secondary_sky_base'>
                <h3 className='text-3xl text-secondary_ink_dark font-semibold mb-3 mt-[-1.5rem]'>
                  Create your first product
                </h3>
                <p className='w-[80%] mx-auto text-secondary_ink_lighter text-lg'>
                  Turn your ideas into products, share and connect with people.
                  It’s okay if you make mistakes, first try is not always
                  perfect.
                </p>

                <button className='mt-10 bg-primary_brand_lightest text-primary py-3 px-7 rounded-3xl'>
                  Create product
                </button>

                <p className='absolute bottom-[-.7rem] left-[50%] translate-x-[-50%] bg-white z-10 px-20 font-semibold'>
                  OR
                </p>
              </div>
              <div className='mt-12 text-center w-[70%] mx-auto text-primary underline'>
                <Link href='/dashboard/profile/customize'>
                  Customize profile
                </Link>
              </div>
            </div>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Profile.layout = Dashboard;
