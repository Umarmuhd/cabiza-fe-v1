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

const ChangePicture = () => {
  return (
    <div className='bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12'>
      <div className='text-center relative'>
        <div className='rounded-full bg-secondary_sky_light shadow-lg w-[max-content] p-2 mx-auto flex'>
          <label htmlFor='image'>
            <img
              src='/images/profile-placeholder.png'
              className='w-[12rem] h-[auto] m-auto pointer'
            />
          </label>
          <input
            type='file'
            name='image'
            accept='image/png, image/gif, image/jpeg'
            id='image'
            className="hidden"
          />
        </div>
        <div className='w-[90%] mx-auto px-10 mt-12'>
          <h3 className='text-3xl text-secondary_ink_dark font-semibold mb-3 mt-[-1.5rem]'>
            Choose your profile image
          </h3>
          <p className='w-[80%] mx-auto text-secondary_ink_lighter text-lg'>
            Upload image or drag image to the avatar to upload. Recommended size
            100px by 100px, 72 DPI, JPEG or PNG.
          </p>

          <button className='mt-10 bg-primary_brand_lightest text-primary py-3 px-7 rounded-3xl'>
            Upload Picture
          </button>
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

export default ChangePicture;
