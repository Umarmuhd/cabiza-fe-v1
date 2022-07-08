import React, { useState } from 'react';

import PlanComponent from '@/components/Plan';
import PublicLayout from '@/layouts/PublicLayout';

import plans from '@/json/plans.json'
import features from '@/json/features.json'
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

export default function Membership({ plans, features }) {

  const [payout, setPayout] = useState({ monthly: false, yearly: true });

  return (
    <PublicLayout>
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
              <h2 className='text-2xl font-bold text-secondary sm:text-4xl md:w-[50%] lg:w-3/5'>
                Get the right plan for future products/services
              </h2>
            </div>

            <div className='flex flex-col'>
              <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                <div className='float-left flex mt-1 bg-secondary_sky_light rounded-xl border border-secondary_sky_light w-[max-content] p-[.1rem]'>
                  <button
                    className={`${payout.monthly
                      ? 'bg-white text-secondary_ink_light rounded-l-xl'
                      : 'bg-secondary_sky_light text-secondary_brand_light'
                      } h-[2.4rem] w-[11rem] ml-[1px] rounded-l-xl m-auto`}
                    onClick={() => setPayout({ monthly: true, yearly: false })}
                  >
                    Monthly
                  </button>
                  <button
                    className={`${payout.yearly
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
              <section className='px-4 py-7 md:px-24 lg:px-8 lg:py-7 mt-16'>
                <div
                  id='membership'
                  className={`${styles.membership} mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl`}
                >
                  <PlanComponent plans={plans} payout={payout} />
                </div>
              </section>
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
                      {
                        features.map(feature => {
                          console.log(Boolean(feature.starter))
                          return <tr key={feature.title}>
                        <td className='px-6 py-[14px]  text-secondary'>
                          {feature.title}
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          {Array.isArray(feature.starter) ? <>
                            {
                                feature.starter[0] === true ? <TickIcon /> : <CancelIcon />
                            }
                            <p className='mt-1'>
                              {
                                feature.starter[1]
                              }
                            </p>
                            </> : feature.starter === true || feature.starter === false ? feature.starter === true ? <TickIcon /> : <CancelIcon /> : feature.starter                              
                          }
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          {Array.isArray(feature.owner) ? <>
                            {
                                feature.owner[0] === true ? <TickIcon /> : <CancelIcon />
                            }
                            <p className='mt-1'>
                              {
                                feature.owner[1]
                              }
                            </p>
                            </> : feature.owner === true || feature.owner === false ? feature.owner === true ? <TickIcon /> : <CancelIcon /> : feature.owner                              
                          }
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          {Array.isArray(feature.shaper) ? <>
                            {
                                feature.shaper[0] === true ? <TickIcon /> : <CancelIcon />
                            }
                            <p className='mt-1'>
                              {
                                feature.shaper[1]
                              }
                            </p>
                              </> : feature.shaper === true || feature.shaper === false ? feature.shaper === true ? <TickIcon /> : <CancelIcon /> : feature.shaper                              
                          }
                        </td>
                        <td className='px-6 py-[14px]  text-secondary'>
                          {Array.isArray(feature.innovator) ? <>
                            {
                                feature.innovator[0] === true ? <TickIcon /> : <CancelIcon />
                            }
                            <p className='mt-1'>
                              {
                                feature.innovator[1]
                              }
                            </p>
                              </> : feature.innovator === true || feature.innovator === false ? feature.innovator === true ? <TickIcon /> : <CancelIcon /> : feature.innovator                              
                          }
                        </td>
                      </tr>
                        })
                      }
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}


export async function getStaticProps() {
  return {
    props: {
      plans,
      features
    },
    revalidate: 1800
  }
}