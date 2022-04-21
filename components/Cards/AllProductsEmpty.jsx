import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const PlusIcon = () => (
  <svg
    width='52'
    height='52'
    viewBox='0 0 52 52'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1 26H51'
      stroke='#404446'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M26 51V1'
      stroke='#404446'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const PlusSmIcon = () => (
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

export default function AllProductsEmpty({ user }) {
  return (
    <>
      <div className='w-43/50 mx-auto my-10 flex items-center'>
        <h1 className='text-3xl font-semibold'>
          Welcome,{' '}
          <span className='text-secondary_ink_dark capitalize font-normal'>
            {user?.username}
          </span>
        </h1>
        <p className='text-secondary_brand_light text-md mt-1'>{user?.bio}</p>

        <Link href='/dashboard/products/create'>
          <a className='py-2 pl-4 pr-12 bg-primary flex items-center font-medium text-white rounded-[48px] ml-auto'>
            <PlusSmIcon /> <span className='ml-2'>New Product </span>
          </a>
        </Link>
      </div>
      <div
        className='w-43/50 mx-auto md:my-10 bg-white rounded-3xl text-center p-10'
        style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}
      >
        {/* <div className='grid-cols-3
              space-y-2
              lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8 min-h-[250px]'>
          <div className='rounded-3xl w-[max-content] cursor-pointer bg-secondary_sky_dark'>
            <img
              src='/images/create-product.png'
              alt='...'
              className="w-[23rem] h-[auto]"
            />
          </div> */}
        <div
          className='grid-cols-3
              space-y-2
              lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-1 mb-8'
        >
          <div className='rounded-3xl cursor-pointer h-[80%] mt-[1rem] relative overflow-hidden border border-primary'>
            <img
              src='/images/create-product.png'
              alt='...'
              // layout='fill'
              className='object-cover w-[100%]'
              // objectFit='contain'
            />
          </div>

          <div
            className='flex items-center justify-center rounded-3xl cursor-pointer bg-secondary_sky_lighter border-secondary_sky_dark h-[80%] !mt-[1rem]'
            style={{
              'background-image': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23979C9EFF' stroke-width='4' stroke-dasharray='23' stroke-dashoffset='51' stroke-linecap='square'/%3e%3c/svg%3e")`,
              'border-radius': '24px',
            }}
          >
            <div
              className='bg-white p-5 rounded-2xl'
              style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}
            >
              <PlusIcon />
            </div>
          </div>
          <div
            className='flex items-center justify-center rounded-3xl cursor-pointer bg-secondary_sky_lighter border-secondary_sky_dark h-[80%] !mt-[1rem]'
            style={{
              'background-image': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23979C9EFF' stroke-width='4' stroke-dasharray='23' stroke-dashoffset='51' stroke-linecap='square'/%3e%3c/svg%3e")`,
              'border-radius': '24px',
            }}
          >
            <div
              className='bg-white p-5 rounded-2xl'
              style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}
            >
              <PlusIcon />
            </div>
          </div>
        </div>

        <h2 className='md:text-4xl font-semibold text-secondary_ink_dark my-6'>
          Create your first product
        </h2>

        <p className='text-lg text-secondary_ink_lighter md:w-2/3 md:mx-auto'>
          Turn your ideas into products, share and connect with people. It’s
          okay if you make mistakes, first try is not always perfect.
        </p>

        <div className='flex justify-center mt-6'>
          <Link href='/dashboard/products/create'>
            <a className='py-4 px-8 bg-primary_brand_lightest leading-4 font-medium text-primary rounded-4xl'>
              <span>Create Product</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
