/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles/index.module.css";
// import Calendar from './../../../components/Calendar/index';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2V5"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 2V5"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.5 9.08984H20.5"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.21 15.7703L15.6701 19.3103C15.5301 19.4503 15.4 19.7103 15.37 19.9003L15.18 21.2503C15.11 21.7403 15.45 22.0803 15.94 22.0103L17.29 21.8203C17.48 21.7903 17.75 21.6603 17.88 21.5203L21.4201 17.9803C22.0301 17.3703 22.3201 16.6603 21.4201 15.7603C20.5301 14.8703 19.82 15.1603 19.21 15.7703Z"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.7001 16.2803C19.0001 17.3603 19.8401 18.2003 20.9201 18.5003"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.9955 13.7002H12.0045"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.29431 13.7002H8.30329"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.29431 16.7002H8.30329"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Payments = () => {
  const [payout, setPayout] = useState({ previous: true, next: false });

  const [showCalendar, setShowCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  return (
    <div className="px-4 sm:px-6 md:px-0 w-full max-w-9xl mx-auto bg-secondary_sky_lightest overflow-y-hidden">
      <header
        className="bg-inherit py-4 h-20"
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="md:w-43/50 mx-auto flex flex-col justify-between">
          <div className="flex md:mt-0 mt-1 bg-secondary_sky_light rounded-xl border border-secondary_sky_light md:w-[max-content] p-[.1rem] w-full justify-between md:justify-start md:float-left w-[max-content]">
            <button
              className={`${
                payout.previous
                  ? "bg-white text-secondary_ink_light rounded-l-xl"
                  : "bg-secondary_sky_light text-secondary_brand_light"
              } h-[2.4rem] w-[100%] ml-[1px] rounded-l-xl m-auto`}
              onClick={() => setPayout({ previous: true, next: false })}
            >
              Previous payouts
            </button>
            <button
              className={`${
                payout.next
                  ? "bg-white text-secondary_ink_light rounded-r-xl"
                  : "bg-secondary_sky_light text-secondary_brand_light"
              } h-[2.4rem] w-[100%] ml-[1px] rounded-r-xl m-auto mr-0 md:mr-auto`}
              onClick={() => setPayout({ previous: false, next: true })}
            >
              Next payout
            </button>
          </div>

          <div className="w-full md:w-auto md:flex md:justify-between justify-start md:mt-10 md:float-right items-center hidden">
            <Link href="/settings">
              <a className="bg-primary text-white flex items-center py-2 px-4 rounded-full mr-4 h-8">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M1.33334 8.58679V7.41345C1.33334 6.72012 1.90001 6.14679 2.60001 6.14679C3.80668 6.14679 4.30001 5.29345 3.69334 4.24679C3.34668 3.64679 3.55334 2.86679 4.16001 2.52012L5.31334 1.86012C5.84001 1.54679 6.52001 1.73345 6.83334 2.26012L6.90668 2.38679C7.50668 3.43345 8.49334 3.43345 9.10001 2.38679L9.17334 2.26012C9.48668 1.73345 10.1667 1.54679 10.6933 1.86012L11.8467 2.52012C12.4533 2.86679 12.66 3.64679 12.3133 4.24679C11.7067 5.29345 12.2 6.14679 13.4067 6.14679C14.1 6.14679 14.6733 6.71345 14.6733 7.41345V8.58679C14.6733 9.28012 14.1067 9.85345 13.4067 9.85345C12.2 9.85345 11.7067 10.7068 12.3133 11.7535C12.66 12.3601 12.4533 13.1335 11.8467 13.4801L10.6933 14.1401C10.1667 14.4535 9.48668 14.2668 9.17334 13.7401L9.10001 13.6135C8.50001 12.5668 7.51334 12.5668 6.90668 13.6135L6.83334 13.7401C6.52001 14.2668 5.84001 14.4535 5.31334 14.1401L4.16001 13.4801C3.55334 13.1335 3.34668 12.3535 3.69334 11.7535C4.30001 10.7068 3.80668 9.85345 2.60001 9.85345C1.90001 9.85345 1.33334 9.28012 1.33334 8.58679Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Settings
              </a>
            </Link>

            {/* <button className="bg-primary text-white flex items-center py-2 px-[.6rem] rounded-[50%] w-8 h-8">
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50008 9.22454V7.49967C7.50008 6.9502 7.04956 6.49967 6.50008 6.49967C5.95061 6.49967 5.50008 6.9502 5.50008 7.49967V9.21556C5.14975 9.09561 4.74463 9.17468 4.46653 9.45279L4.82008 9.80634L4.46653 9.45279C4.07793 9.84138 4.07793 10.478 4.46653 10.8666L5.77094 12.171C5.79661 12.2017 5.82229 12.2251 5.84267 12.2415C5.9101 12.3038 6.00553 12.3752 6.12266 12.422C6.24058 12.4725 6.36556 12.4997 6.50008 12.4997C6.63141 12.4997 6.75365 12.4738 6.8691 12.4255C7.00513 12.3754 7.12096 12.2926 7.20697 12.2066L8.5403 10.8732C8.9289 10.4846 8.9289 9.84805 8.5403 9.45946C8.26043 9.17958 7.85193 9.10128 7.50008 9.22454ZM5.89668 12.2796C5.89711 12.2798 5.89557 12.2789 5.89293 12.2772L5.89563 12.2789L5.89639 12.2794L5.89659 12.2795L5.89668 12.2796ZM5.81318 12.2132L5.8132 12.2132C5.81319 12.2132 5.81319 12.2132 5.81318 12.2132ZM11.7401 7.29301H13.6667C13.7573 7.29301 13.8334 7.36915 13.8334 7.45967V10.953C13.8334 12.0204 13.4648 12.8114 12.9044 13.3377C12.3392 13.8686 11.5396 14.1663 10.6201 14.1663H5.38008C4.46053 14.1663 3.66101 13.8686 3.09572 13.3377C2.53537 12.8114 2.16675 12.0204 2.16675 10.953V5.04634C2.16675 3.979 2.53537 3.18791 3.09572 2.66163C3.66101 2.13071 4.46053 1.83301 5.38008 1.83301H8.20675C8.29727 1.83301 8.37341 1.90915 8.37341 1.99967V3.92634C8.37341 5.78248 9.88394 7.29301 11.7401 7.29301Z"
                  fill="white"
                  stroke="white"
                />
                <path
                  d="M11.6252 5.37368L11.6252 5.37365H11.62C10.8762 5.37365 10.2866 4.77776 10.2866 4.09365V1.93417C10.9491 2.59748 11.8894 3.54643 12.7184 4.38298C13.08 4.74781 13.4203 5.09126 13.7072 5.38032C12.9964 5.38028 12.2059 5.37979 11.6252 5.37368Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </header>

      <main className="md:w-43/50 mx-auto mt-10 md:mt-20 bg-white rounded-xl px-6 md:px-12 md:py-8 pt-4 md:py-10 mb-10">
        {payout.previous ? (
          <>
            {showCalendar ? (
              <div
                className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[99]"
                onClick={() => setShowCalendar(!showCalendar)}
              ></div>
            ) : null}
            <div className="mb-10">
              <h3 className="font-medium text-grey_20 text-lg">Select Date</h3>
              {/* <Calendar/> */}
              <div className="input flex items-center mt-3 relative">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className={`w-[100%] p-2 px-4 border border-secondary_sky_light rounded-xl appearance-none mr-3 outline-none ${styles.input}`}
                  value={`${value.getFullYear()}-${
                    value.getMonth() < 9
                      ? `0${value.getMonth() + 1}`
                      : value.getMonth()
                  }-${
                    value.getDate() < 9
                      ? `0${value.getDate()}`
                      : value.getDate()
                  }`}
                  datepicker
                  datepicker-autohide
                />

                <div
                  className={`absolute right-0 top-[3rem] z-[100] ${
                    !showCalendar ? "hidden" : ""
                  }`}
                >
                  <Calendar
                    onChange={onChange}
                    value={value}
                    onClickDay={() => setShowCalendar(false)}
                  />
                </div>

                <button
                  className="bg-primary p-2 rounded-lg"
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  {/* <label htmlFor="date" className="cursor-pointer"> */}
                  <CalendarIcon datepicker datepicker-autohide />
                  {/* </label> */}
                </button>
              </div>
            </div>
          </>
        ) : null}

        <div>
          <div className="bg-primary_brand_darkest text-white rounded-t-xl md:flex justify-between relative px-10 py-5 items-center">
            <div className="xl:flex items-center hidden">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 9.08984H20.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.21 15.7698L15.67 19.3098C15.53 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.42 17.9798C22.03 17.3698 22.32 16.6598 21.42 15.7598C20.53 14.8698 19.82 15.1598 19.21 15.7698Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.7 16.2798C19 17.3598 19.84 18.1998 20.92 18.4998"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 13.7002H12.0045"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 13.7002H8.30329"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.29431 16.7002H8.30329"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="ml-3">Previous Payout: March 9th, 2022.</p>
            </div>
            <p>Activities from 1st January, 2022 to March 9th, 2022. </p>
            <svg
              width="927"
              height="88"
              viewBox="0 0 927 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-0 absolute right-0 top-0 w-[100%] h-[100%]"
            >
              <g opacity="0.4">
                <path
                  d="M-183.564 109C-85.3465 106.157 129.351 88.3292 202.401 39.7628C275.45 -8.80362 526.98 -2.88334 643.614 6.14761C722.904 11.5984 890.079 41 924.455 115"
                  stroke="#331ADB"
                  stroke-width="1.5"
                />
                <path
                  d="M-142.129 109C-43.9109 106.157 170.787 88.3292 243.837 39.7628C316.886 -8.80362 568.416 -2.88334 685.049 6.14761C747.459 7.5984 885.322 29.8 937.5 107"
                  stroke="#331ADB"
                  stroke-width="1.5"
                />
                <path
                  d="M-100.693 109C-2.47525 106.157 212.223 88.3292 285.272 39.7628C358.322 -8.80362 609.851 -2.88334 726.485 6.14761C796.056 9.76507 934.431 33.5 931.361 99.5"
                  stroke="#331ADB"
                  stroke-width="1.5"
                />
                <path
                  d="M-225 109C-126.782 106.157 87.9159 88.3292 160.965 39.7628C234.015 -8.80362 485.545 -2.88334 602.178 6.14761C688.119 10.7651 865.985 36.7 889.926 103.5"
                  stroke="#331ADB"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>

          <div className="border border-secondary_sky_base border-t-0 pt-2 pb-4 rounded-b-xl">
            <div className="flex items-center justify-between py-3 text-secondary px-10 mb-1">
              <p className="font-normal">Sales</p>
              <p className=" font-bold">$41,567.66</p>
            </div>

            <div className="flex items-center justify-between py-3 text-secondary bg-sky_light px-10 mb-1">
              <p className="font-normal">Fees</p>
              <p className=" font-bold">-$567.66</p>
            </div>

            <div className="flex items-center justify-between py-3 text-secondary px-10 mb-1">
              <p className="font-normal">Affiliate commission paid</p>
              <p className=" font-bold">-$1,567.66</p>
            </div>

            <div className="flex items-center justify-between py-3 text-secondary bg-sky_light px-10 mb-1">
              <p className="font-normal">Paypal Payout (?)</p>
              <p className=" font-bold">$4567.66</p>
            </div>

            <div className="flex items-center justify-between pt-3 text-secondary px-10 mb-1">
              <p className="font-normal">To be sent to Paypal account:</p>
              <p className=" font-bold">$8,567.66</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;
