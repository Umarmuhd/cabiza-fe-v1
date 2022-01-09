import React from "react";
import MainFooter from "../../components/Footer/MainFooter";
import MainNavigation from "../../components/Navbars/MainNav";

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
          <div className="mx-auto lg:flex lg:items-center lg:justify-between mb-14">
            <div className="">
              <h2 className="text-3xl font-bold text-grey_40 sm:text-4xl md:w-3/5">
                Get the right plan for future products/services
              </h2>
              <p className="mt-2 text-secondary_light">
                Save 12% on annual subscription
              </p>
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
          <div
            className=" grid-cols-4
                space-y-2
                lg:space-y-0 lg:grid lg:gap-8 lg:grid-rows-1"
          >
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-tertiary text-white text-center">
              <h4 className="mb-9 text-secondary_light font-medium text-lg">
                FREE
              </h4>
              <h3 className="font-semibold text-4xl mb-16">Starter</h3>
              <p className="font-bold text-3xl text-white mb-16">£0</p>
              <a className="font-bold text-2xl text-secondary bg-white py-4 px-12 rounded-xl">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_95">
                Limited access (intro module or 7 day trial) to the
                specific/main course on this subscription.
              </p>
              <p className="text-center text-secondary_light font-medium text-lg underline">
                Learn More
              </p>
            </div>
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl border border-grey_40 text-white text-center">
              <h4 className="mb-9 text-grey_80 font-medium text-lg uppercase">
                Buyers Zone
              </h4>
              <h3 className="font-semibold text-4xl mb-16 text-grey_40">
                Owner
              </h3>
              <p className="font-bold text-3xl text-grey_40 mb-16">£50/Annum</p>
              <a className="font-bold text-2xl text-secondary bg-white border border-secondary py-4 px-12 rounded-xl">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
                Limited access (intro module or 7 day trial) to the
                specific/main course on this subscription.
              </p>
              <p className="text-center text-grey_80 font-medium text-lg underline">
                Learn More
              </p>
            </div>
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl border border-grey_40 text-white text-center">
              <h4 className="mb-9 text-grey_80 font-medium text-lg uppercase">
                MAKERS ZONE
              </h4>
              <h3 className="font-semibold text-4xl mb-16 text-grey_40">
                Shaper
              </h3>
              <p className="font-bold text-3xl text-grey_40 mb-16">
                £500/Annum
              </p>
              <a className="font-bold text-2xl text-secondary bg-white border border-secondary py-4 px-12 rounded-xl">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
                Limited access (intro module or 7 day trial) to the
                specific/main course on this subscription.
              </p>
              <p className="text-center text-grey_80 font-medium text-lg underline">
                Learn More
              </p>
            </div>
            <div className="py-10 px-8 flex justify-center flex-col rounded-3xl border border-grey_40 text-white text-center">
              <h4 className="mb-9 text-grey_80 font-medium text-lg uppercase">
                Corporate Zone
              </h4>
              <h3 className="font-semibold text-4xl mb-16 text-grey_40">
                Innovator
              </h3>
              <p className="font-bold text-3xl text-grey_40 mb-16">
                £5000/Annum
              </p>
              <a className="font-bold text-2xl text-secondary bg-white border border-secondary py-4 px-12 rounded-xl">
                Sign Up
              </a>
              <p className="mt-12 mb-6 font-medium text-grey_60">
                Limited access (intro module or 7 day trial) to the
                specific/main course on this subscription.
              </p>
              <p className="text-center text-grey_80 font-medium text-lg underline">
                Learn More
              </p>
            </div>
          </div>
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
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-6">
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
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Author-maker Sign up
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Free
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Member Sign up
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Free
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          £50/Annum
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          £500/Annum
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          £5,000 (£1,250/Annum subsequently)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          Dashboard
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
                          <TickIcon />
                        </td>
                        <td className="px-6 py-[14px] whitespace-nowrap text-grey_40">
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
