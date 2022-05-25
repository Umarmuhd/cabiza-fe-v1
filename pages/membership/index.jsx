import React, { useState } from 'react';
import MainFooter from '../../components/Footer/MainFooter';
import MainNavigation from '../../components/Navbars/MainNav';

import styles from '../../styles/Home.module.css';

const TickIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
      fill='#24C78C'
    />
    <path
      d='M10.5804 15.58C10.3804 15.58 10.1904 15.5 10.0504 15.36L7.22043 12.53C6.93043 12.24 6.93043 11.76 7.22043 11.47C7.51043 11.18 7.99043 11.18 8.28043 11.47L10.5804 13.77L15.7204 8.62998C16.0104 8.33998 16.4904 8.33998 16.7804 8.62998C17.0704 8.91998 17.0704 9.39998 16.7804 9.68998L11.1104 15.36C10.9704 15.5 10.7804 15.58 10.5804 15.58Z'
      fill='#24C78C'
    />
  </svg>
);

const CancelIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z'
      fill='#F50000'
    />
    <path
      d='M8.49945 16.2499C8.30945 16.2499 8.11945 16.1799 7.96945 16.0299C7.67945 15.7399 7.67945 15.2599 7.96945 14.9699L14.9695 7.96994C15.2595 7.67994 15.7395 7.67994 16.0295 7.96994C16.3195 8.25994 16.3195 8.73994 16.0295 9.02994L9.02945 16.0299C8.87945 16.1799 8.68945 16.2499 8.49945 16.2499Z'
      fill='#F50000'
    />
    <path
      d='M15.4995 16.2499C15.3095 16.2499 15.1195 16.1799 14.9695 16.0299L7.96945 9.02994C7.67945 8.73994 7.67945 8.25994 7.96945 7.96994C8.25945 7.67994 8.73945 7.67994 9.02945 7.96994L16.0295 14.9699C16.3195 15.2599 16.3195 15.7399 16.0295 16.0299C15.8795 16.1799 15.6895 16.2499 15.4995 16.2499Z'
      fill='#F50000'
    />
  </svg>
);

export default function Membership({ subscriptionPlans }) {
  const [payout, setPayout] = useState({ monthly: false, yearly: true });
  return (
    <div className='w-full h-full'>
      <MainNavigation />
      <header className='py-16 bg-secondary_sky_lighter'>
        <div className='mx-auto max-w-[1500px]'>
          <div className='w-[100%] mx-aut'>
            <h1 className='font-semibold sm:text-4xl text-3xl leading-9 text-secondary_ink_dark text-center'>
              MEMBERSHIP PLANS
            </h1>
          </div>
        </div>
      </header>
      <section className='md:py-10 py-5 bg-white'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8'>
          <div className='mx-auto lg:flex lg:items-center lg:justify-between md:mb-12 mb-5'>
            <div className=''>
              <h2 className='sm:text-3xl text-2xl font-bold text-secondary sm:text-4xl lg:w-3/5'>
                Get the right plan for future products/services
              </h2>
            </div>

            <div className='flex flex-col'>
              <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                <div className='float-left flex mt-1 bg-secondary_sky_light rounded-xl border border-secondary_sky_light w-[max-content] p-[.1rem]'>
                  <button
                    className={`${
                      payout.monthly
                        ? 'bg-white text-secondary_ink_light rounded-l-xl'
                        : 'bg-secondary_sky_light text-secondary_brand_light'
                    } h-[2.4rem] w-[11rem] ml-[1px] rounded-l-xl m-auto`}
                    onClick={() => setPayout({ monthly: true, yearly: false })}
                  >
                    Monthly
                  </button>
                  <button
                    className={`${
                      payout.yearly
                        ? 'bg-white text-secondary_ink_light rounded-r-xl'
                        : 'bg-secondary_sky_light text-secondary_brand_light'
                    } h-[2.4rem] w-[12rem] ml-[1px] rounded-r-xl m-auto hover:bg-indigo-50`}
                    onClick={() => setPayout({ monthly: false, yearly: true })}
                  >
                    Annually
                  </button>
                </div>
              </div>
              <p className='text-secondary_sky_dark mt-2'>
                Save 12% on annual subscription
              </p>
            </div>
          </div>

          <section id='membership' className={`${styles.membership} md:pt-2`}>
            <div className='flex'>
              <div className={`${styles.plans} ${styles.flex}`}>
                {
                  subscriptionPlans?.map(each => {
                    let monthlyPrice = (each.price / 12) - 12/100;
                    monthlyPrice = Math.abs((monthlyPrice === -0 ? 0 : monthlyPrice).toFixed())
                    
                    return (
                    <div className={`${styles.col} ${each.mostPopular ? styles.popular : ""}`} key={each.id}>
                      {each.mostPopular ? <aside>Most popular</aside> : null}
                      <h4>{each.zone}</h4>
                      <h3>{each.planName}</h3>
                      <p className={styles.price}>
                        £
                        {
                          payout.yearly ? `${each.price}${each.price !== 0 ? "/Annum" : ""}` : `${monthlyPrice }${monthlyPrice !== 0 ? "/Monthly" : ""}`                          
                        }
                      </p>
                      <a href=''>Sign Up</a>
                      <p className={`${each.mostPopular ? styles.description : ""}`}>
                        {each.description}
                      </p>
                      <a href='' className={styles['btn-secondary']}>
                        Learn More
                      </a>
                    </div>
                )
                  })
                }                               
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='py-16 bg-secondary_sky_lighter'>
        <div className='mx-auto max-w-[1300px]'>
          <div className='w-[74%] mx-auto'>
            <h1 className='font-semibold text-4xl leading-9 text-secondary text-center'>
              MEMBERSHIP PLANS COMPARED
            </h1>
            <p className='text-lg mt-3 text-secondary_ink_lighter text-center'>
              Choose whats right for you
            </p>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='mx-auto w-[90%] max-w-[1300px]'>
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6'>
              <div className='align-middle inline-block min-w-full'>
                <div className='shadow overflow-hidden border-b border-gray-200 rounded-lg'>
                  <table className={`min-w-full divide-y divide-gray-200 border-collapse ${styles.table}`}>
                    <thead className='bg-secondary_ink_dark'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-lg font-bold text-white uppercase'
                        >
                          FEATURES/BENEFITS
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-lg font-bold text-white uppercase'
                        >
                          STARTER
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-lg font-bold text-white uppercase'
                        >
                          OWNER
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-lg font-bold text-white uppercase'
                        >
                          SHAPER
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-lg font-bold text-white uppercase'
                        >
                          INNOVATOR (BY INVITATION/WAITING LIST)
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className={`bg-white divide-y divide-gray-200 ${styles['table-body']}`}                     
                    >
                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Author-maker Sign up
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>Free</td>
                        <td className='px-6 py-[14px]  text-secondary'>Free</td>
                        <td className='px-6 py-[14px]  text-secondary'>Free</td>
                        <td className='px-6 py-[14px]  text-secondary'>Free</td>
                      </tr>
                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Member Sign up
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>Free</td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          £50/Annum
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          £500/Annum
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          £5,000 (£1,250/Annum subsequently)
                        </td>
                      </tr>
                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Dashboard
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Assigned unique Referral/Marketing link
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Access to courses
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>1 Course/year</p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>
                            1 Course + 4 free courses or products/year
                          </p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>
                            1 Course + 20 free courses or products/year
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Access to other courses if free author-maker
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Join business cohorts
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>
                            Unlimited after 1st course or product post
                          </p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>
                            Unlimited after 1st course or product post
                          </p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>
                            Unlimited after 1st course or product post
                          </p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>
                            Unlimited after 1st course or product post
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Following and being followed
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>Unlimited</p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>Unlimited</p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>Unlimited</p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='w-[80%] mt-1'>Unlimited</p>
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Invite/pre sign up affiliates
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Welcome Kit and Business Intro
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Added to Business Social Media Groups
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px] text-grey_40 w-[20%]'>
                          Advanced Marketing and Business Techniques
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Entitled to payouts
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px] text-grey_40 w-[20%]'>
                          Full Business Owner Status Receive Payouts
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Receive Payouts if Free Author-Maker
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Assign % commissions to affiliates
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Assign % commissions to affiliates if Free
                          Author-Maker
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Website Interface
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          General Classes and Workshops
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-grey_40 w-[10%]'>
                          Course-specific Question and Answer Sessions by the
                          author-makers
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                          <p className='w-[80%] mt-1'>
                            (unless by an author-maker’s invitation)
                          </p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Owners Mastermind
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Shapers Mastermind
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Advanced Technical and Marketing Support
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Shapers Milestone Incentives
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>...</p>
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>...</p>
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Innovators Milestone Incentives
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                          <p className='mt-1'>...</p>
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Innovators Mastermind
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className='px-6 py-[14px]  text-secondary'>
                          Founders Forum and Events
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <CancelIcon />
                        </td>
                        <td className='px-6 py-[14px] text-grey_40'>
                          <TickIcon />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </div>
  );
}


export async function getServerSideProps() {
  return {
    props: {
      subscriptionPlans: [
        {
          id: 1,
          price: 0,
          planName: "Starter",
          zone: "FREE",
          description: "Limited access (intro module or 7 day trial) to the specific/main course on this subscription.",
        }, 
        {
          id: 2,
          price: 50,
          planName: "Owner",
          zone: "BUYERS ZONE",
          description: "Everyone is entitled to have access to only 1 free course on this subscription per annum.",
          mostPopular: true
        },
        {
          id: 3,
          price: 500,
          planName: "Shaper",
          zone: "MAKERS ZONE",
          description: "Everyone is entitled to have access to 5 free courses/items on this subscription per annum.",
        },
         {
          id: 4,
          price: 5000,
          planName: "Innovator",
          zone: "CORPORATE ZONE",
          description: "This member has access to 20 free courses/items on this subscription per annum.",
        }
      ]
    }, // will be passed to the page component as props
  }
}