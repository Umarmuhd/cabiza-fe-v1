import React from "react";
import MainFooter from "../../components/Footer/MainFooter";
import MainNavigation from "../../components/Navbars/MainNav";

import styles from "../../styles/Home.module.css";

const TickIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
      fill="#24C78C"
    />
    <path
      d="M10.5804 15.58C10.3804 15.58 10.1904 15.5 10.0504 15.36L7.22043 12.53C6.93043 12.24 6.93043 11.76 7.22043 11.47C7.51043 11.18 7.99043 11.18 8.28043 11.47L10.5804 13.77L15.7204 8.62998C16.0104 8.33998 16.4904 8.33998 16.7804 8.62998C17.0704 8.91998 17.0704 9.39998 16.7804 9.68998L11.1104 15.36C10.9704 15.5 10.7804 15.58 10.5804 15.58Z"
      fill="#24C78C"
    />
  </svg>
);

const CancelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z" fill="#F50000"/>
  <path d="M8.49945 16.2499C8.30945 16.2499 8.11945 16.1799 7.96945 16.0299C7.67945 15.7399 7.67945 15.2599 7.96945 14.9699L14.9695 7.96994C15.2595 7.67994 15.7395 7.67994 16.0295 7.96994C16.3195 8.25994 16.3195 8.73994 16.0295 9.02994L9.02945 16.0299C8.87945 16.1799 8.68945 16.2499 8.49945 16.2499Z" fill="#F50000"/>
  <path d="M15.4995 16.2499C15.3095 16.2499 15.1195 16.1799 14.9695 16.0299L7.96945 9.02994C7.67945 8.73994 7.67945 8.25994 7.96945 7.96994C8.25945 7.67994 8.73945 7.67994 9.02945 7.96994L16.0295 14.9699C16.3195 15.2599 16.3195 15.7399 16.0295 16.0299C15.8795 16.1799 15.6895 16.2499 15.4995 16.2499Z" fill="#F50000"/>
  </svg>
);

export default function Membership() {
  return (
    <div className="w-full h-full">
      <MainNavigation />
      <header className="py-16 bg-grey_95">
        <div className="mx-auto max-w-[1300px]">
          <div className="w-[74%] mx-auto">
            <h1 className="font-semibold text-4xl leading-9 text-dark_pri text-center">
              MEMBERSHIP PLANS
            </h1>
          </div>
        </div>
      </header>
      <section className="md:py-20 py-10 bg-white">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          <div className="mx-auto lg:flex lg:items-center lg:justify-between ">
            <div className="">
              <h2 className="text-3xl font-bold text-grey_40 sm:text-4xl md:w-3/5">
                Get the right plan for future products/services
              </h2>
            </div>

            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-l-lg shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-l-lg text-white bg-cabiza_blue text-lg font-medium"
                >
                  Monthly
                </a>
              </div>
              <div className="inline-flex rounded-r-lg shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-r-lg text-grey_40 bg-white hover:bg-indigo-50"
                >
                  Annually
                </a>
              </div>
            </div>
          </div>
              <p className="text-grey_40 mb-12 lg:text-right">
                Save 12% on annual subscription
              </p>
          {/* <div
            className=" grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-8 lg:grid-rows-1"
          >
            
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-white text-white text-center border border-grey_95">
              <h4 className="mb-9 bg-cabiza_blue_secondary text-white font-medium text-lg w-[max-content] px-6 py-1 mx-auto rounded-xl uppercase mt-2">
               FREE ZONE
              </h4>
              <h3 className="font-semibold text-4xl mb-10 text-cabiza_blue">Starter</h3>
              <p className="font-bold text-3xl text-grey_20 mb-10">£0</p>
              <a className="font-bold text-2xl bg-cabiza_blue text-white py-3 px-12 rounded-xl w-[max-content] mx-auto cursor-pointer">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
               Limited access (intro module or 7 day trial) to the specific/main course on this subscription.
              </p>
              <p className="text-center text-cabiza_blue font-medium text-lg underline">
                Learn More
              </p>
            </div>

            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-cabiza_blue text-white text-center">
              <aside className="ml-auto mb-2 bg-yellow w-[max-content] rounded-lg px-3 py-[.2rem]">Most popular</aside>
              <h4 className="mb-9 mt-2 bg-cabiza_blue_secondary text-white font-medium text-lg w-[max-content] px-6 py-1 mx-auto rounded-xl uppercase">
                Buyers Zone
              </h4>
              <h3 className="font-semibold text-4xl mb-10">Owner</h3>
              <p className="font-bold text-3xl text-white mb-10">£50/Annum</p>
              <a className="font-bold text-2xl text-cabiza_blue bg-white py-3 px-12 rounded-xl w-[max-content] mx-auto cursor-pointer">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_95">
                Everyone is entitled to have access to only 1 free course on this subscription per annum.
              </p>
              <p className="text-center text-grey_95 font-medium text-lg underline">
                Learn More
              </p>
            </div>

            
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-white text-white text-center border border-grey_95">
              <h4 className="mb-9 bg-cabiza_blue_secondary text-white font-medium text-lg w-[max-content] px-6 py-1 mx-auto rounded-xl uppercase mt-2">
               MAKERS ZONE
              </h4>
              <h3 className="font-semibold text-4xl mb-10 text-cabiza_blue">Shaper</h3>
              <p className="font-bold text-3xl text-grey_20 mb-10">£500/Annum</p>
              <a className="font-bold text-2xl bg-cabiza_blue text-white py-3 px-12 rounded-xl w-[max-content] mx-auto cursor-pointer">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
                Everyone is entitled to have access to 5 free courses/items on this subscription per annum.
              </p>
              <p className="text-center text-cabiza_blue font-medium text-lg underline">
                Learn More
              </p>
            </div>

            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-white text-white text-center border border-grey_95">
              <h4 className="mb-9 bg-cabiza_blue_secondary text-white font-medium text-lg w-[max-content] px-6 py-1 mx-auto rounded-xl uppercase mt-2">
               CORPORATE ZONE
              </h4>
              <h3 className="font-semibold text-4xl mb-10 text-cabiza_blue">Innovator</h3>
              <p className="font-bold text-3xl text-grey_20 mb-10">£5000/Annum</p>
              <a className="font-bold text-2xl bg-cabiza_blue text-white py-3 px-12 rounded-xl w-[max-content] mx-auto cursor-pointer">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
                This member has access to 20 free courses/items on this subscription per annum.
              </p>
              <p className="text-center text-cabiza_blue font-medium text-lg underline">
                Learn More
              </p>
            </div>            
          </div> */}

          <section id="membership" className={styles.membership}>
          <h2>Membership plans</h2>

          <div className="flex">
            <div className={`${styles.plans} mt-10 ${styles.flex}`}>
              <div className={styles.col}>
                <h4>FREE ZONE</h4>
                <h3>Starter</h3>
                <p className={styles.price}>£0</p>
                <a href="">Sign Up</a>
                <p>Limited access (intro module or 7 day trial) to the specific/main course on this subscription.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={`${styles.col} ${styles.popular}`}>
                <aside>Most popular</aside>
                <h4>BUYERS ZONE</h4>
                <h3>Owner</h3>
                <p className={styles.price}>£50/Annum</p>
                <a href="">Sign Up</a>
                <p className={styles.description}>
                  Everyone is entitled to have access to only 1 free course on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={styles.col}>
                <h4>MAKERS ZONE</h4>
                <h3>Shaper</h3>
                <p className={styles.price}>£500/Annum</p>
                <a href="">Sign Up</a>
                <p>Everyone is entitled to have access to 5 free courses/items on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={styles.col}>
                <h4>CORPORATE ZONE</h4>
                <h3>Innovator</h3>
                <p className={styles.price}>£5000/Annum</p>
                <a href="">Sign Up</a>
                <p>This member has access to 20 free courses/items on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>
            </div>
          </div>
        </section>

        </div>
      </section>
      <section className="py-16 bg-grey_95">
        <div className="mx-auto max-w-[1300px]">
          <div className="w-[74%] mx-auto">
            <h1 className="font-semibold text-4xl leading-9 text-dark_pri text-center">
              MEMBERSHIP PLANS COMPARED
            </h1>
            <p className="text-lg mt-3 text-grey_60 text-center">
              Choose whats right for you
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-[90%] max-w-[1300px]">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-cabiza_blue">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-white uppercase"
                        >
                          FEATURES/BENEFITS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-white uppercase"
                        >
                          STARTER
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-white uppercase"
                        >
                          OWNER
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-white uppercase"
                        >
                          SHAPER
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-white uppercase"
                        >
                          INNOVATOR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Author-maker Sign up
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Free
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Member Sign up
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          £50/Annum
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          £500/Annum
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          £5,000 (£1,250/Annum subsequently)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Dashboard
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Assigned unique Referral/Marketing link
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Access to courses
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">1 Course/year</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="w-[80%] mt-1">1 Course + 4 free courses or products/year</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="w-[80%] mt-1">1 Course + 20 free courses or products/year</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Access to other courses if free author-maker
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Join business cohorts
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                          <p className="mt-1">Unlimited after 1st course or product post</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">Unlimited after 1st course or product post</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">Unlimited after 1st course or product post</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">Unlimited after 1st course or product post</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Following and being followed
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                          <p className="w-[80%] mt-1">Unlimited</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="w-[80%] mt-1">Unlimited</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="w-[80%] mt-1">Unlimited</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="w-[80%] mt-1">Unlimited</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Invite/pre sign up affiliates
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Welcome Kit and Business Intro
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Added to  Business Social Media Groups
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px] text-grey_40 w-[20%]">
                          Advanced Marketing and Business Techniques
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Entitled to payouts
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px] text-grey_40 w-[20%]">
                         Full Business Owner Status Receive Payouts
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                          Receive Payouts if Free Author-Maker
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Assign % commissions to affiliates
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Assign % commissions to affiliates if Free Author-Maker
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Website Interface
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         General Classes and Workshops
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <TickIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40 w-[10%]">
                          Course-specific Question and Answer Sessions by the author-makers
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                          <p className="w-[80%] mt-1">(unless by an author-maker’s invitation)</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Owners Mastermind
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Shapers Mastermind
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Advanced Technical and Marketing Support
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Shapers Milestone Incentives
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">...</p>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">...</p>
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Innovators Milestone Incentives
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                          <p className="mt-1">...</p>
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Innovators Mastermind
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <TickIcon />
                        </td>
                      </tr>

                       <tr>
                        <td className="px-6 py-[14px]  text-grey_40">
                         Founders Forum and Events
                        </td>
                        <td className="px-6 py-[14px]  text-grey_40">
                          <CancelIcon/>
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
                          <CancelIcon />
                        </td>
                        <td className="px-6 py-[14px] text-grey_40">
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
