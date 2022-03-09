import { useState } from 'react';
import { GrList } from 'react-icons/gr';
import { FaBold, FaItalic } from 'react-icons/fa';
import { MdOutlineFormatUnderlined } from 'react-icons/md';
import { BiStrikethrough, BiLinkAlt, BiImage } from 'react-icons/bi';
import { BsCode } from "react-icons/bs";
import { CgFormatUppercase } from "react-icons/cg"
import {
  RiListOrdered,
  RiDoubleQuotesL,
  RiArrowGoBackLine,
} from 'react-icons/ri';
import { AiOutlineAlignCenter } from 'react-icons/ai';
// import { IoReturnDownBack } from 'react-icons/io';
import Toggle from './Toggle';


const FirstComponent = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold text-grey_20'>
        Create your product
      </h1>

      <div className='bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8'>
        <div className='flex flex-col'>
          <label htmlFor='product_name' className='text-xl'>
            Name{' '}
          </label>
          <input
            type='text'
            name='product_name'
            id='product_name'
            placeholder='Product Name'
            className='border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none'
          />
        </div>

        <div className='flex flex-col mt-5'>
          <label htmlFor='product_name' className='text-xl'>
            Description{' '}
          </label>
          <div className='border border-solid border-grey_85 py-3 rounded-xl mt-2'>
            <div className='flex text-lg items-end border-bottom border-b-2 border-grey_80 px-4 py-2 pb-5'>
              <div className='flex items-end'>
                <button className='mr-4'>
                  <FaBold />
                </button>

                <button className='mr-4'>
                  <FaItalic />
                </button>

                <button className='mr-4'>
                  <MdOutlineFormatUnderlined />
                </button>

                <button className='mr-4'>
                  <BiStrikethrough />
                </button>

                <button className='mr-4'>
                  <BsCode />
                </button>

                <button className='mr-4'>
                  <CgFormatUppercase />
                </button>

                <button className='mr-4'>
                  <GrList />
                </button>

                <button className='mr-4'>
                  <RiListOrdered />
                </button>

                <button className='mr-4'>
                  <AiOutlineAlignCenter />
                </button>

                <button className='mr-4'>
                  <RiDoubleQuotesL />
                </button>

                <button className='mr-4'>
                  <BiLinkAlt />
                </button>

                <button>
                  <BiImage />
                </button>
              </div>

              <div className='flex ml-12'>
                <button className='mr-2'>
                  <RiArrowGoBackLine />
                </button>

                <button>
                  <RiArrowGoBackLine
                    style={{
                      transform: 'scaleX(-1)',
                    }}
                  />
                </button>
              </div>
            </div>
            <input
              type='text'
              name='product_name'
              id='product_name'
              placeholder='Product Description'
              className='px-4 py-3 pd-12 h-[5rem] w-[100%] outline-none'
            />
          </div>

          <div className='flex flex-col mt-5'>
            <label htmlFor='product_name' className='text-xl'>
              URL{' '}
            </label>
            <input
              type='url'
              name='product_url'
              id='product_url'
              placeholder='ukpejacob.cabiza.com/p/aireu2'
              className='border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none'
            />
          </div>

          <div className='flex flex-col mt-5'>
            <p className='text-xl'>Product Thumbnail </p>
            <input
              type='file'
              name='product_file'
              id='product_file'
              className='hidden'
            />
            <label htmlFor='product_file' className='text-xl'>
              <img
                className='h-[10rem] w-[10rem] mt-2'
                src='/images/thumbnail.png'
                alt='...'
              />
            </label>

            <p className='mt-3 text-grey_40 w-[70%]'>
              This image will appear in cabiza library, discover and profile
              pages. Requirement: square, atleast 600px by 600px, JPG, SVG, PNG,
              GIF format.
            </p>
          </div>

          <div className='flex flex-col mt-5'>
            <label htmlFor='product_cover' className='text-xl'>
              Product Cover{' '}
            </label>
            <input
              type='file'
              name='product_cover'
              id='product_cover'
              className='mt-2 border border-solid border-grey_85 p-3'
            />
            <p className='mt-3 text-grey_40 w-[70%]'>
              Image or Video, Requirements: 1280x720px and 72 DPI(dots per inch)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const SecondComponent = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold text-grey_20'>
        Product Information
      </h1>

      <div className='bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8'>
        <div className='flex flex-col'>
          <label htmlFor='product_name' className='text-xl'>
            Call-to-Action{' '}
          </label>
          <div className='flex mt-2'>
            <button className='bg-cabiza_blue text-white p-2 px-4 rounded mr-5 rounded-xl'>
              I want this
            </button>

            <button className='border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded mr-5 rounded-xl'>
              Buy this
            </button>

            <button className='border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded mr-5 rounded-xl'>
              Pay
            </button>

            <button className='border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded flex items-center justify-between rounded-xl'>
              Customize <p className='ml-3'>+</p>
            </button>
          </div>
        </div>

        <div className='flex flex-col mt-5'>
          <label htmlFor='summary' className='text-xl'>
            Summary{' '}
          </label>
          <input
            type='text'
            name='summary'
            id='summary'
            placeholder='You’ll get...'
            className='border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none'
          />
        </div>

        <div className='flex flex-col mt-5 rounded-xl'>
          <p className='text-xl'>Additional Details</p>
          <div className='border border-dashed border-2 border-cabiza_blue mt-5 p-7'>
            <div className='w-[50%] mx-auto text-center'>
              <h3 className='text-grey_40 text-2xl font-semibold'>
                Add Details
              </h3>
              <p className="mt-2 text-grey_60">Make your product more convincing to your customers.</p>
              <button className="flex w-[max-content] mx-auto border border-solid border-black p-3 mt-3 rounded-xl">
                Add Details <p className="ml-2 text-grey_40">+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ThirdComponent = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold text-grey_20'>Product Content</h1>

      <div className='bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8'>
        <div className='flex flex-col mt-5'>
          <p className='text-xl'>Files</p>
          <div className='border border-dashed border-2 border-cabiza_blue mt-5 p-7'>
            <div className='w-[50%] mx-auto text-center'>
              <h3 className='text-grey_40 text-2xl font-semibold'>Add Files</h3>
              <p className='mt-2 text-grey_60'>
                Upload your product files here
              </p>
              <button className='flex w-[max-content] mx-auto border border-solid border-black p-3 mt-3 rounded-xl'>
                Upload Files <p className='ml-2 text-grey_40'>+</p>
              </button>
            </div>
          </div>

          <div className='flex flex-col mt-5'>
            <label htmlFor='product_name' className='text-xl'>
              Redirect URL (optional){' '}
            </label>
            <div className='flex items-center border border-solid border-grey_85 p-3 rounded-xl mt-2 justify-between'>
              <input
                type='url'
                name='product_url'
                id='product_url'
                placeholder='Redirect URL after purchase'
                className=' outline-none w-[90%]'
              />
              <button className="border border-solid border-grey_20 px-4 rounded text-grey_20 py-2">Test</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FourthComponent = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold text-grey_20'>Product Pricing</h1>

      <div className='bg-white mt-3'>
        <div className='flex flex-col mt-5'>
          <div className='flex flex-col mt-5'>
            <label htmlFor='product_name' className='text-xl'>
              Amount{' '}
            </label>
            <div className='flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85'>
              <input
                className='px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none'
                value='$'
                readOnly
              />
              <input
                type='text'
                name='Amount'
                id='Amount'
                placeholder='0+'
                className=' outline-none w-[98%] p-3 rounded-xl z-10'
              />
            </div>

            <div>
              <div className='flex justify-between items-center mt-5'>
                <div>
                  <h3 className='text-xl text-grey_20'>Settings</h3>
                  <p className="text-grey_40">Let customers pay what they want?</p>
                </div>
                  <Toggle                                                label="TogglePayment"  />            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FinalComponent = () => {
  return (
    <>
      <h1 className='text-4xl font-semibold text-grey_20'>Product Settings</h1>

      <div className='bg-white mt-5 border border-solid border-grey_80 p-3 rounded-xl'>
        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>Limit product sales</p>
          <Toggle label='LimitSales' />
        </div>

        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>Allow customers to choose a quantity</p>
          <Toggle label='Quantity' />
        </div>

        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>
            Publicly show the number of sales on your product page
          </p>
          <Toggle label='showSales' />
        </div>

        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>
            Generate a unique license key per sale{' '}
            <a
              href=''
              className='text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue'
            >
              Learn more
            </a>
          </p>
          <Toggle label='license' />
        </div>

        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>
            Add custom affiliate percentage{' '}
            <a
              href=''
              className='text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue'
            >
              Learn more
            </a>
          </p>
          <Toggle label='affliate' />
        </div>

        <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>
            Mark product as e-publication for VAT purposes{' '}
            <a
              href=''
              className='text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue'
            >
              Learn more
            </a>
          </p>
          <Toggle label='VAT' />
        </div>
      </div>

      <div className='bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl'>
        <h4 className='text-grey_20 text-xl mt-1 pl-5 font-semibold'>
          Version
        </h4>
        <div className='p-3 rounded flex items-center justify-between px-5 mb-2'>
          <p className='text-grey_40'>
            Is there any variation for this product?
          </p>
          <Toggle label='LimitSales' />
        </div>
      </div>

      <div className='bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl'>
        <h4 className='text-grey_20 text-xl mt-1 pl-5 font-semibold'>
          Discover
        </h4>

        <div className='p-3 rounded px-5 mb-2'>
          <p className='text-grey_40 font-semibold text-lg'>Tags</p>
          <div className='flex items-center justify-between mt-2 p-3 border border-solid border-grey_85 rounded-xl'>
            <input
              type='text'
              name='Tags'
              id='Tags'
              placeholder='Begin typing to add tag...'
              className='w-[95%] outline-none'
            />
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48C3.25953 9.19 3.25953 8.71 3.54953 8.42C3.83953 8.13 4.31953 8.13 4.60953 8.42L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42C19.6795 8.13 20.1595 8.13 20.4495 8.42C20.7395 8.71 20.7395 9.19 20.4495 9.48L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z'
                fill='#666666'
              />
            </svg>
          </div>
        </div>

        <div className="px-3">
          <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
            <p className='text-grey_40'>Allow “Become Affiliate” button</p>
            <Toggle label='LimitSales' />
          </div>

          <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
            <p className='text-grey_40'>Show custom affiliate percentage</p>
            <Toggle label='LimitSales' />
          </div>

          <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
            <p className='text-grey_40'>
              Display your product's 1-5 star rating to prospective customers
            </p>
            <Toggle label='LimitSales' />
          </div>

          <div className='bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2'>
            <p className='text-grey_40'>
              This product contains content meant only for adults, including the
              preview
            </p>
            <Toggle label='LimitSales' />
          </div>
        </div>
      </div>
    </>
  );
};

export { FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FinalComponent };
