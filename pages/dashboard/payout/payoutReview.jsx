/* eslint-disable react/no-unknown-property */
import React from 'react';

const Payoutreview = () => {
    return (
      <>
        <header className='bg-secondary_sky_lightest px-20 py-4 h-20 shadow'>
          <button className='bg-primary text-white flex items-center py-2 px-4 rounded-full float-right mr-6'>
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
        </header>

        <main className='md:w-43/50 mx-auto mt-20 bg-white rounded-xl px-12 py-10'>
          <div className='flex items-center px-6 py-6 justify-between'>
            <div className='w-[12rem]'>
              <div className='bg-primary_brand_dark px-5 py-3 text-white rounded-t-xl relative'>
                <h5>BALANCE</h5>
                <img
                  src='/images/payout-bg-pattern.png'
                  alt=''
                  className='z-10 absolute right-0 top-0 w-[100%] h-[100%]'
                />
              </div>
              <div className='pt-[3rem] px-5 rounded-b-xl bg-white border border-secondary_sky_base pb-5 text-2xl text-secondary_ink_dark font-medium'>
                $0
              </div>
            </div>

            <div className='w-[12rem]'>
              <div className='bg-primary px-5 py-3 text-white rounded-t-xl'>
                <h5>PAST 7 DAYS</h5>
              </div>
              <div className='pt-[3rem] px-5 rounded-b-xl bg-white border border-secondary_sky_base pb-5 text-2xl text-secondary_ink_dark font-medium bg-sky_light'>
                $0
              </div>
            </div>

            <div className='w-[12rem]'>
              <div className='bg-primary px-5 py-3 text-white rounded-t-xl'>
                <h5>PAST 30 DAYS</h5>
              </div>
              <div className='pt-[3rem] px-5 rounded-b-xl bg-white border border-secondary_sky_base pb-5 text-2xl text-secondary_ink_dark font-medium bg-sky_light'>
                $0
              </div>
            </div>

            <div className='w-[12rem]'>
              <div className='bg-primary px-5 py-3 text-white rounded-t-xl'>
                <h5>TOTAL EARNINGS</h5>
              </div>
              <div className='pt-[3rem] px-5 rounded-b-xl bg-white border border-secondary_sky_base pb-5 text-2xl text-secondary_ink_dark font-medium bg-sky_light'>
                $0
              </div>
            </div>
          </div>
          <div className='bg-primary_brand_dark py-3 text-white rounded-t-xl flex relative mt-10 pt-10 px-20 items-center'>
            <img
              src='/images/wallet.png'
              alt=''
              className='z-10 w-[20rem] h-[auto]'
            />
            <div className='content w-[50%] mx-auto z-10'>
              <h3 className='text-3xl'>Your account is under review</h3>
              <p className='mt-3 text-lg'>
                Your account is being revied by our finance team. Due to the
                nature of our business, all accounts are reviewed before their
                first payout and also if we notice any suspicious activity
              </p>
            </div>
            <img
              src='/images/payout-bg-pattern-bg.png'
              alt=''
              className='z-0 absolute right-0 top-0 w-[100%] h-[100%]'
            />
          </div>
        </main>
      </>
    );
}

export default Payoutreview;
