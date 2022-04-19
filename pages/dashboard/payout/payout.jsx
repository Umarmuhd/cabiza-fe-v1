/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';

const CalendarIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 2V5'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M16 2V5'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M3.5 9.08984H20.5'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M19.21 15.7698L15.6701 19.3098C15.5301 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.4201 17.9798C22.0301 17.3698 22.3201 16.6598 21.4201 15.7598C20.5301 14.8698 19.82 15.1598 19.21 15.7698Z'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M18.7001 16.2798C19.0001 17.3598 19.8401 18.1998 20.9201 18.4998'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12'
      stroke='white'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M11.9955 13.7002H12.0045'
      stroke='white'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M8.29431 13.7002H8.30329'
      stroke='white'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M8.29431 16.7002H8.30329'
      stroke='white'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);


const Payments = () => {

    const [payout, setPayout] = useState({previous: true, next : false});

    return (
      <>
        <header className='bg-secondary_sky_lightest px-20 py-4 h-20'>
          <div className='float-left flex mt-1 bg-secondary_ink_light pl-1'>
            <button
              className={`${
                payout.previous
                  ? 'bg-white text-secondary_ink_darkest'
                  : 'bg-secondary_ink_light text-secondary_brand_light'
              }  py-2 px-4 `}
              onClick={() => setPayout({ previous: true, next: false })}
            >
              Previous payouts
            </button>
            <button
              className={`${
                payout.next
                  ? 'bg-white text-secondary_ink_darkest'
                  : 'bg-secondary_ink_light text-secondary_brand_light'
              }  py-2 px-4 `}
              onClick={() => setPayout({ previous: false, next: true })}
            >
              Next payout
            </button>
          </div>

          <div className='float-right flex'>
            <button className='bg-primary text-white flex items-center py-2 px-4 rounded-full mr-6'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M1.33334 8.58679V7.41345C1.33334 6.72012 1.90001 6.14679 2.60001 6.14679C3.80668 6.14679 4.30001 5.29345 3.69334 4.24679C3.34668 3.64679 3.55334 2.86679 4.16001 2.52012L5.31334 1.86012C5.84001 1.54679 6.52001 1.73345 6.83334 2.26012L6.90668 2.38679C7.50668 3.43345 8.49334 3.43345 9.10001 2.38679L9.17334 2.26012C9.48668 1.73345 10.1667 1.54679 10.6933 1.86012L11.8467 2.52012C12.4533 2.86679 12.66 3.64679 12.3133 4.24679C11.7067 5.29345 12.2 6.14679 13.4067 6.14679C14.1 6.14679 14.6733 6.71345 14.6733 7.41345V8.58679C14.6733 9.28012 14.1067 9.85345 13.4067 9.85345C12.2 9.85345 11.7067 10.7068 12.3133 11.7535C12.66 12.3601 12.4533 13.1335 11.8467 13.4801L10.6933 14.1401C10.1667 14.4535 9.48668 14.2668 9.17334 13.7401L9.10001 13.6135C8.50001 12.5668 7.51334 12.5668 6.90668 13.6135L6.83334 13.7401C6.52001 14.2668 5.84001 14.4535 5.31334 14.1401L4.16001 13.4801C3.55334 13.1335 3.34668 12.3535 3.69334 11.7535C4.30001 10.7068 3.80668 9.85345 2.60001 9.85345C1.90001 9.85345 1.33334 9.28012 1.33334 8.58679Z'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Settings
            </button>

            <button className='bg-primary text-white flex items-center py-2 px-3 rounded-[50%] mr-6'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.49996 9.22503V7.50016C7.49996 6.95069 7.04944 6.50016 6.49996 6.50016C5.95048 6.50016 5.49996 6.95069 5.49996 7.50016V9.21605C5.14963 9.0961 4.74451 9.17517 4.46641 9.45328L4.81996 9.80683L4.46641 9.45328C4.07781 9.84187 4.07781 10.4785 4.46641 10.867L5.77082 12.1715C5.79648 12.2022 5.82217 12.2256 5.84255 12.242C5.90997 12.3042 6.00541 12.3757 6.12253 12.4224C6.24045 12.473 6.36544 12.5002 6.49996 12.5002C6.63129 12.5002 6.75353 12.4743 6.86898 12.426C7.005 12.3759 7.12084 12.2931 7.20685 12.2071L8.54018 10.8737C8.92877 10.4851 8.92877 9.84854 8.54018 9.45994C8.26031 9.18007 7.85181 9.10177 7.49996 9.22503ZM5.89656 12.2801C5.89699 12.2803 5.89545 12.2794 5.89281 12.2777L5.89551 12.2794L5.89627 12.2799L5.89647 12.28L5.89656 12.2801ZM5.81306 12.2137L5.81307 12.2137C5.81307 12.2137 5.81306 12.2137 5.81306 12.2137ZM11.74 7.2935H13.6666C13.7571 7.2935 13.8333 7.36964 13.8333 7.46016V10.9535C13.8333 12.0208 13.4647 12.8119 12.9043 13.3382C12.339 13.8691 11.5395 14.1668 10.62 14.1668H5.37996C4.46041 14.1668 3.66089 13.8691 3.09559 13.3382C2.53525 12.8119 2.16663 12.0208 2.16663 10.9535V5.04683C2.16663 3.97949 2.53525 3.1884 3.09559 2.66212C3.66089 2.13119 4.46041 1.8335 5.37996 1.8335H8.20663C8.29715 1.8335 8.37329 1.90964 8.37329 2.00016V3.92683C8.37329 5.78297 9.88382 7.2935 11.74 7.2935Z'
                  fill='white'
                  stroke='white'
                />
                <path
                  d='M11.6252 5.37319L11.6252 5.37317H11.62C10.8762 5.37317 10.2866 4.77727 10.2866 4.09317V1.93368C10.9491 2.59699 11.8894 3.54594 12.7184 4.38249C13.08 4.74732 13.4203 5.09077 13.7072 5.37983C12.9964 5.37979 12.2059 5.37931 11.6252 5.37319Z'
                  fill='white'
                  stroke='white'
                />
              </svg>
            </button>
          </div>
        </header>

        <main className='md:w-43/50 mx-auto mt-20 bg-white rounded-xl px-12 py-10'>
          {payout.previous ? (
            <div className='mb-10'>
              <h3 className='font-medium text-grey_20 text-lg'>Select Date</h3>
              <div className='input flex items-center mt-3'>
                <input
                  type='date'
                  name='date'
                  id='date'
                  className='w-[95%] p-2 px-4 border border-secondary_sky_light rounded-xl appearance-none mr-8'
                  defaultValue='2002-09-03'
                  datepicker
                  datepicker-autohide
                />

                {/* <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input> */}

                <button className='bg-primary p-1 rounded-lg'>
                  <label htmlFor='date'>
                    <CalendarIcon datepicker datepicker-autohide />
                  </label>
                </button>
              </div>
            </div>
          ) : null}

          <div>
            <div className='bg-primary_brand_darkest text-white rounded-t-xl flex justify-between relative px-10 py-5 items-center'>
              <div className='flex items-center'>
                <svg
                  width='24'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 2V5'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M16 2V5'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M3.5 9.08984H20.5'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M19.21 15.7698L15.67 19.3098C15.53 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.42 17.9798C22.03 17.3698 22.32 16.6598 21.42 15.7598C20.53 14.8698 19.82 15.1598 19.21 15.7698Z'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M18.7 16.2798C19 17.3598 19.84 18.1998 20.92 18.4998'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M11.9955 13.7002H12.0045'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.29431 13.7002H8.30329'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.29431 16.7002H8.30329'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p className='ml-3'>Previous Payout: March 9th, 2022.</p>
              </div>
              <p>Activities from 1st January, 2022 to March 9th, 2022. </p>
              <svg
                width='927'
                height='88'
                viewBox='0 0 927 88'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='z-0 absolute right-0 top-0 w-[100%] h-[100%]'
              >
                <g opacity='0.4'>
                  <path
                    d='M-183.564 109C-85.3465 106.157 129.351 88.3292 202.401 39.7628C275.45 -8.80362 526.98 -2.88334 643.614 6.14761C722.904 11.5984 890.079 41 924.455 115'
                    stroke='#331ADB'
                    stroke-width='1.5'
                  />
                  <path
                    d='M-142.129 109C-43.9109 106.157 170.787 88.3292 243.837 39.7628C316.886 -8.80362 568.416 -2.88334 685.049 6.14761C747.459 7.5984 885.322 29.8 937.5 107'
                    stroke='#331ADB'
                    stroke-width='1.5'
                  />
                  <path
                    d='M-100.693 109C-2.47525 106.157 212.223 88.3292 285.272 39.7628C358.322 -8.80362 609.851 -2.88334 726.485 6.14761C796.056 9.76507 934.431 33.5 931.361 99.5'
                    stroke='#331ADB'
                    stroke-width='1.5'
                  />
                  <path
                    d='M-225 109C-126.782 106.157 87.9159 88.3292 160.965 39.7628C234.015 -8.80362 485.545 -2.88334 602.178 6.14761C688.119 10.7651 865.985 36.7 889.926 103.5'
                    stroke='#331ADB'
                    stroke-width='1.5'
                  />
                </g>
              </svg>
            </div>

            <div className='border border-secondary_sky_base border-t-0 pt-2 pb-4 rounded-b-xl'>
              <div className='flex items-center justify-between py-3 text-secondary px-10 mb-1'>
                <p className='font-normal'>Sales</p>
                <p className=' font-bold'>$41,567.66</p>
              </div>

              <div className='flex items-center justify-between py-3 text-secondary bg-sky_light px-10 mb-1'>
                <p className='font-normal'>Fees</p>
                <p className=' font-bold'>-$567.66</p>
              </div>

              <div className='flex items-center justify-between py-3 text-secondary px-10 mb-1'>
                <p className='font-normal'>Affiliate commission paid</p>
                <p className=' font-bold'>-$1,567.66</p>
              </div>

              <div className='flex items-center justify-between py-3 text-secondary bg-sky_light px-10 mb-1'>
                <p className='font-normal'>Paypal Payout (?)</p>
                <p className=' font-bold'>$4567.66</p>
              </div>

              <div className='flex items-center justify-between pt-3 text-secondary px-10 mb-1'>
                <p className='font-normal'>To be sent to Paypal account:</p>
                <p className=' font-bold'>$8,567.66</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Payments;
