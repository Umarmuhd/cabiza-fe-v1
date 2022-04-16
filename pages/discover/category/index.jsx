import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import MainFooter from '@/components/Footer/MainFooter';
import MainNavigation from '@/components/Navbars/MainNav';
import styles from './index.module.css';


const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4163 25.375C6.82467 25.375 1.45801 20.0083 1.45801 13.4167C1.45801 6.82501 6.82467 1.45834 13.4163 1.45834C20.008 1.45834 25.3747 6.82501 25.3747 13.4167C25.3747 20.0083 20.008 25.375 13.4163 25.375ZM13.4163 3.20834C7.78134 3.20834 3.20801 7.79334 3.20801 13.4167C3.20801 19.04 7.78134 23.625 13.4163 23.625C19.0513 23.625 23.6247 19.04 23.6247 13.4167C23.6247 7.79334 19.0513 3.20834 13.4163 3.20834Z"
      fill="#CCCCCC"
    />
    <path
      d="M25.6664 26.5417C25.4447 26.5417 25.223 26.46 25.048 26.285L22.7147 23.9517C22.3764 23.6133 22.3764 23.0533 22.7147 22.715C23.053 22.3767 23.613 22.3767 23.9514 22.715L26.2847 25.0483C26.623 25.3867 26.623 25.9467 26.2847 26.285C26.1097 26.46 25.888 26.5417 25.6664 26.5417Z"
      fill="#CCCCCC"
    />
  </svg>
);

const StarCheckedIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.9271 3.09467L8.48599 8.04419L3.02432 8.84045C2.04488 8.98251 1.65235 10.19 2.36263 10.8816L6.31403 14.732L5.37945 20.1713C5.21123 21.1544 6.24674 21.8909 7.11403 21.4311L12 18.8629L16.886 21.4311C17.7533 21.8872 18.7888 21.1544 18.6206 20.1713L17.686 14.732L21.6374 10.8816C22.3476 10.19 21.9551 8.98251 20.9757 8.84045L15.514 8.04419L13.0729 3.09467C12.6355 2.21242 11.3682 2.20121 10.9271 3.09467Z'
      fill='#FFB323'
    />
  </svg>
);

const StarUncheckedIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 21 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.4757 6.84042L14.014 6.04416L11.5729 1.09463C11.1355 0.212393 9.86823 0.201178 9.4271 1.09463L6.98599 6.04416L1.52432 6.84042C0.544878 6.98248 0.152355 8.18995 0.862634 8.88154L4.81403 12.732L3.87945 18.1712C3.71123 19.1544 4.74674 19.8909 5.61403 19.4311L10.5 16.8628L15.386 19.4311C16.2533 19.8871 17.2888 19.1544 17.1206 18.1712L16.186 12.732L20.1374 8.88154C20.8476 8.18995 20.4551 6.98248 19.4757 6.84042ZM14.2607 12.104L15.1467 17.2778L10.5 14.8367L5.85328 17.2778L6.73926 12.104L2.97852 8.44042L8.17477 7.68528L10.5 2.97501L12.8252 7.68528L18.0215 8.44042L14.2607 12.104Z'
      fill='#FFB323'
    />
  </svg>
);

const RightIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9998 0.666748C6.63984 0.666748 0.666504 6.64008 0.666504 14.0001C0.666504 21.3601 6.63984 27.3334 13.9998 27.3334C21.3598 27.3334 27.3332 21.3601 27.3332 14.0001C27.3332 6.64008 21.3598 0.666748 13.9998 0.666748ZM19.3732 14.7067L15.3732 18.7067C15.1732 18.9067 14.9198 19.0001 14.6665 19.0001C14.4132 19.0001 14.1598 18.9067 13.9598 18.7067C13.5732 18.3201 13.5732 17.6801 13.9598 17.2934L16.2532 15.0001H9.33317C8.7865 15.0001 8.33317 14.5467 8.33317 14.0001C8.33317 13.4534 8.7865 13.0001 9.33317 13.0001H16.2532L13.9598 10.7067C13.5732 10.3201 13.5732 9.68008 13.9598 9.29342C14.3465 8.90675 14.9865 8.90675 15.3732 9.29342L19.3732 13.2934C19.7598 13.6801 19.7598 14.3201 19.3732 14.7067Z" fill="#5B44E9"/>
      </svg>
);

const LeftIcon = () => (
      <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4998 0.666626C6.13984 0.666626 0.166504 6.63996 0.166504 14C0.166504 21.36 6.13984 27.3333 13.4998 27.3333C20.8598 27.3333 26.8332 21.36 26.8332 14C26.8332 6.63996 20.8598 0.666626 13.4998 0.666626ZM18.1665 15H11.2465L13.5398 17.2933C13.9265 17.68 13.9265 18.32 13.5398 18.7066C13.3398 18.9066 13.0865 19 12.8332 19C12.5798 19 12.3265 18.9066 12.1265 18.7066L8.1265 14.7066C7.73984 14.32 7.73984 13.68 8.1265 13.2933L12.1265 9.29329C12.5132 8.90663 13.1532 8.90663 13.5398 9.29329C13.9265 9.67996 13.9265 10.32 13.5398 10.7066L11.2465 13H18.1665C18.7132 13 19.1665 13.4533 19.1665 14C19.1665 14.5466 18.7132 15 18.1665 15Z" fill="#BFB6F6"/>
      </svg>
);


const Index = () => {
    return (
      <div className='w-full h-full'>
        <MainNavigation />
        <div className='bg-secondary_sky_lighter'>
          <header className='py-16 mx-auto max-w-[1100px]'>
            <div className='w-[90%] mx-auto'>
              <form className='flex'>
                 <label
                className='flex items-center bg-primary text-lg lg:w-[10rem] sm:w-2/6 rounded-l-3xl px-7 hidden sm:block shadow-sm'
                style={{ display: 'flex' }}
              >
                <select
                  name='category'
                  className='bg-transparent m-auto focus:outline-none text-white focus:ring-indigo-500 border-0'
                >
                  <option className="bg-primary">Education</option>
                  <option className="bg-primary">Fitness</option>
                  <option className="bg-primary">Health</option>
                </select>
              </label>
                <div className='flex justify-center border py-2 px-6 w-full rounded-r-3xl bg-white'>
                  <input
                    type='text'
                    placeholder='Search for products...'
                    className='w-full outline-none text-grey_60 bg-transparent'
                  />
                  <button
                    type='submit'
                    className='bg-primary p-3 rounded-full text-md'
                  >
                    <SearchIcon />
                  </button>
                </div>
              </form>
            </div>
          </header>
        </div>

        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div
            id='explore_cat'
            className='md:py-20 py-10 flex flex-col-reverse lg:flex-row px-12 md:px-10 lg:justify-center justify-start'
          >
            <div>
              <img src='/images/Education-large.png' alt='...' className='' />
            </div>
            <div className='lg:ml-11 lg:px-5 lg:w-[50%] overflow-hidden self-center'>
              <h2 className='text-2xl text-primary font-semibold mb-6'>
                Education
              </h2>
              <p className='font-medium text-grey_40 text-2xl md:text-4xl mb-8 sm:w-[80%]'>
                Perfect your career with tested and proven resources from
                experts and examples from others.
              </p>
            </div>
          </div>

          <main className='mb-12 mx-auto w-[100%] px-3 max-w-[1500px] overflow-hidden'>
            <nav
              className='mb-10 pl-7 pb-5 hidden'
              style={{
                'box-shadow': '0px 20px 40px rgba(0, 0, 0, 0.06)',
                'border-radius': '0px 0px 40px 40px',
              }}
            >
              <ul className={`flex ${styles.nav} lg:ml-12 md:ml-[0]`}>
                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    All
                  </a>
                </li>

                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    Ebook
                  </a>
                </li>

                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    Journal
                  </a>
                </li>

                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    Webinar
                  </a>
                </li>

                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    Tutorials
                  </a>
                </li>

                <li className='hover:bg-primary hover:text-white bg-primary_brand_lightest text-primary rounded-2xl px-4 py-1'>
                  <a
                    href=''
                    className='text-inherit'
                    onClick={(e) => e.preventDefault()}
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </nav>

            <div className='flex xl:px-12'>
              <div className='border border-sky_light p-8 w-[30%] xl:mr-10 lg:px-8 lg:pt-8 hidden lg:block rounded-xl h-[max-content]'>
                <h4 className='text-secondary_brand_light pb-3 mb-4 border-bottom border-solid border-b border-secondary_sky_base'>
                  Showing 1 - 8 of 200 results
                </h4>
                <form>
                  <h5 className='text-secondary font-medium mb-3'>SORT BY</h5>
                  <select
                    name=''
                    id=''
                    className='bg-primary rounded w-[100%] py-2 px-3 text-white'
                  >
                    <option value='Popular' selected>
                      Popular
                    </option>
                  </select>
                  <h5 className='mt-4 text-secondary font-medium mb-1'>
                    PRICE
                  </h5>
                  <div className='flex w-[100%]'>
                    <div>
                      <p className='text-secondary_sky_dark mb-2'>Minimum</p>
                      <div className='input-group flex mr-2'>
                        <input
                          type='text'
                          value='$'
                          readOnly
                          className='w-[3rem] h-[2.5rem] rounded text-center bg-primary_brand_lightest text-secondary outline-none'
                        />
                        <input
                          type='number'
                          placeholder='0'
                          className='px-4 w-[90%] text-secondary_ink_lighter'
                        />
                      </div>
                    </div>
                    <div>
                      <p className='text-secondary_sky_dark mb-2'>Maximum</p>
                      <div className='input-group flex mr-2'>
                        <input
                          type='text'
                          value='$'
                          readOnly
                          className='w-[3rem] h-[2.5rem] rounded text-center bg-primary_brand_lightest text-secondary outline-none'
                        />
                        <input
                          type='number'
                          placeholder='0'
                          className='px-4 w-[90%] text-secondary_ink_lighter'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='mt-5'>
                    <h5 className='text-secondary font-medium mb-1'>RATING</h5>
                    <div>
                      <div className='flex items-center mb-1'>
                        <div className='flex'>
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                        </div>
                        <input
                          type='radio'
                          name='ratings'
                          id='ratings'
                          className='ml-auto border-2 border-primary'
                        />
                      </div>

                      <div className='flex items-center mb-1'>
                        <div className='flex'>
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarUncheckedIcon />
                        </div>
                        <input
                          type='radio'
                          name='ratings'
                          id='ratings'
                          className='ml-auto border-2 border-primary'
                        />
                      </div>

                      <div className='flex items-center mb-1'>
                        <div className='flex'>
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                        </div>
                        <input
                          type='radio'
                          name='ratings'
                          id='ratings'
                          className='ml-auto border-2 border-primary'
                        />
                      </div>

                      <div className='flex items-center mb-1'>
                        <div className='flex'>
                          <StarCheckedIcon />
                          <StarCheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                        </div>
                        <input
                          type='radio'
                          name='ratings'
                          id='ratings'
                          className='ml-auto border-2 border-primary'
                        />
                      </div>

                      <div className='flex items-center mb-1'>
                        <div className='flex'>
                          <StarCheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                          <StarUncheckedIcon />
                        </div>
                        <input
                          type='radio'
                          name='ratings'
                          id='ratings'
                          className='ml-auto border-2 border-primary'
                        />
                      </div>
                    </div>

                    <div className='mt-5 text-cabiza_grey'>
                      <h5 className='text-secondary font-medium mb-1'>
                        CONTAINS
                      </h5>

                      <div>
                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.zip</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.rar</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.pdf</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.mp3</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.mp4</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.fig</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.doc</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.doc</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.doc</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.ai</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.cdr</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.psd</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.doc</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.png</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.blend</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>

                        <div className='flex mb-1 text-secondary font-medium'>
                          <p>.mov</p>

                          <div className='ml-auto flex items-center'>
                            <p className='mr-4 text-primary_brand_light border border-primary_brand_light rounded px-1'>
                              34567
                            </p>
                            <input type='radio' name='contains' id='contains' />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className='flex mx-auto items-center justify-center w-[max-content] px-4 bg-primary_brand_lightest mt-8 rounded-xl py-2 text-primary text-md'>
                      See More
                    </button>
                  </div>
                </form>
              </div>
              <div className='mx-auto lg:ml-auto md:mr-0 md:ml-0 sm:mr-5 md:px-5'>
                <div className='sm:flex mt-12 md:flex-row sm:flex-col justify-center pl-2'>
                  <div className='shadow sm:w-[max-content] mr-1 h-[max-content]'>
                    <img
                      src='/images/book-small.png'
                      alt='...'
                      className='w-[100%] h-[270px]'
                    />
                    <div className='px-1 py-2 rounded-b'>
                      <div className='p-5 rounded-b'>
                        <p className='text-lg text-secondary_sky_dark font-normal mb-1'>
                          Books
                        </p>
                        <h4 className='text-2xl text-secondary font-medium mb-3'>
                          Emotional Intelligence
                        </h4>
                        <div className='flex items-center'>
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src='/images/author.png'
                            alt='...'
                            className='h-6 w-6 rounded-full'
                          />

                          <a className='font-medium ml-2 text-secondary_ink_lighter block border-bottom border-b-secondary_ink_lighter'>
                            Sara Mitchell
                          </a>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <div className='flex items-center'>
                            <img
                              src='/images/icons/star.svg'
                              alt='...'
                              className='w-4 h-4'
                            />
                            <span className='ml-2 text-sm font-semibold text-secondary_ink_lighter'>
                              5.0
                              <span className='font-normal ml-1 text-xs'>
                                (25)
                              </span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-secondary_52 rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className='rounded border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 px-2 py-1 pr-1'>
                          <p className='text-xs text-secondary_sky_dark'>
                            40% Affiliate Commission
                          </p>
                          <a
                            href=''
                            className='bg-primary text-white font-medium text-sm rounded px-1 sm:px-3 py-2 sm:ml-10'
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='shadow sm:w-[max-content] mr-1 h-[max-content] md:ml-12 mt-5 md:mt-0'>
                    <img
                      src='/images/book-small-2.png'
                      alt='...'
                      className='w-[100%] h-[270px]'
                    />
                    <div className='px-1 py-2 rounded-b'>
                      <div className='p-5 rounded-b'>
                        <p className='text-lg text-secondary_sky_dark font-normal mb-1'>
                          Books
                        </p>
                        <h4 className='text-2xl text-secondary font-medium mb-3'>
                          Emotional Intelligence
                        </h4>
                        <div className='flex items-center'>
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src='/images/author.png'
                            alt='...'
                            className='h-6 w-6 rounded-full'
                          />

                          <a className='font-medium ml-2 text-secondary_ink_lighter block border-bottom border-b-secondary_ink_lighter'>
                            Sara Mitchell
                          </a>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <div className='flex items-center'>
                            <img
                              src='/images/icons/star.svg'
                              alt='...'
                              className='w-4 h-4'
                            />
                            <span className='ml-2 text-sm font-semibold text-secondary_ink_lighter'>
                              5.0
                              <span className='font-normal ml-1 text-xs'>
                                (25)
                              </span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-secondary_52 rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className='rounded border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 px-2 py-1 pr-1'>
                          <p className='text-xs text-secondary_sky_dark'>
                            40% Affiliate Commission
                          </p>
                          <a
                            href=''
                            className='bg-primary text-white font-medium text-sm rounded px-1 sm:px-3 py-2 sm:ml-10'
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='sm:flex mt-12 md:flex-row sm:flex-col justify-center'>
                  <div className='shadow sm:w-[max-content] mr-1 h-[max-content]'>
                    <img
                      src='/images/book-small-3.png'
                      alt='...'
                      className='w-[100%] h-[270px]'
                    />
                    <div className='px-1 py-2 rounded-b'>
                      <div className='p-5 rounded-b'>
                        <p className='text-lg text-secondary_sky_dark font-normal mb-1'>
                          Books
                        </p>
                        <h4 className='text-2xl text-secondary font-medium mb-3'>
                          Emotional Intelligence
                        </h4>
                        <div className='flex items-center'>
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src='/images/author.png'
                            alt='...'
                            className='h-6 w-6 rounded-full'
                          />

                          <a className='font-medium ml-2 text-secondary_ink_lighter block border-bottom border-b-secondary_ink_lighter'>
                            Sara Mitchell
                          </a>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <div className='flex items-center'>
                            <img
                              src='/images/icons/star.svg'
                              alt='...'
                              className='w-4 h-4'
                            />
                            <span className='ml-2 text-sm font-semibold text-secondary_ink_lighter'>
                              5.0
                              <span className='font-normal ml-1 text-xs'>
                                (25)
                              </span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-secondary_52 rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className='rounded border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 px-2 py-1 pr-1'>
                          <p className='text-xs text-secondary_sky_dark'>
                            40% Affiliate Commission
                          </p>
                          <a
                            href=''
                            className='bg-primary text-white font-medium text-sm rounded px-1 sm:px-3 py-2 sm:ml-10'
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='shadow sm:w-[max-content] mr-1 h-[max-content] md:ml-12 mt-5 md:mt-0'>
                    <img
                      src='/images/book-small-4.png'
                      alt='...'
                      className='w-[100%] h-[270px]'
                    />
                    <div className='px-1 py-2 rounded-b'>
                      <div className='p-5 rounded-b'>
                        <p className='text-lg text-secondary_sky_dark font-normal mb-1'>
                          Books
                        </p>
                        <h4 className='text-2xl text-secondary font-medium mb-3'>
                          Emotional Intelligence
                        </h4>
                        <div className='flex items-center'>
                          {/* <span className="text-lg text-grey_60 font-medium mr-2"></span> */}
                          <img
                            src='/images/author.png'
                            alt='...'
                            className='h-6 w-6 rounded-full'
                          />

                          <a className='font-medium ml-2 text-secondary_ink_lighter block border-bottom border-b-secondary_ink_lighter'>
                            Sara Mitchell
                          </a>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <div className='flex items-center'>
                            <img
                              src='/images/icons/star.svg'
                              alt='...'
                              className='w-4 h-4'
                            />
                            <span className='ml-2 text-sm font-semibold text-secondary_ink_lighter'>
                              5.0
                              <span className='font-normal ml-1 text-xs'>
                                (25)
                              </span>
                            </span>
                          </div>
                          <span
                            className={`text-sm font-normal py-2 px-5 pl-3 bg-secondary_52 rounded ${styles.price} text-white`}
                          >
                            $5000+
                          </span>
                        </div>
                        <div className='rounded border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 px-2 py-1 pr-1'>
                          <p className='text-xs text-secondary_sky_dark'>
                            40% Affiliate Commission
                          </p>
                          <a
                            href=''
                            className='bg-primary text-white font-medium text-sm rounded px-1 sm:px-3 py-2 sm:ml-10'
                          >
                            Become Affiliate
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='flex w-[max-content] border border-grey_80 p-2 rounded mt-7'
                  style={{ 'border-radius': '20px' }}
                >
                  <LeftIcon />
                  <p className='mx-3 text-secondary text-md '>Page 1 of 8</p>
                  <RightIcon />
                </div>
              </div>
            </div>
          </main>
        </div>
        <MainFooter />
      </div>
    );
}

export default Index;