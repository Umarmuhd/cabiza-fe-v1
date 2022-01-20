import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/Navbars/MainNav";
import MainFooter from "../components/Footer/MainFooter";

export default function Home() {
  return (
    <div className="w-full h-full">
      <MainNavigation />
      <header className={`${styles.hero} py-10`}>
        <div className={`${styles.container} mx-auto`}>
          <div className="flex flex-col-reverse md:items-center md:flex-row">
            <div className="content text-center md:text-left md:w-1/2">
              <p className="text-lg font-semibold mb-8 text-grey_80">
                Welcome to your company
              </p>
              <h1 className="font-bold text-5xl">
                The platform designed to help you{" "}
                <span className="text-secondary">own</span> and{" "}
                <span className="text-secondary">grow your business.</span>{" "}
              </h1>
              <p className="my-8 text-grey_40">
                Earn a living while you learn within an international community
                of experts and peers. Get the support you need to grow your
                business from anywhere, to any size possible.
              </p>

              <div className="flex md:justify-start justify-center">
                <a className="p-6 bg-secondary text-lg font-semibold text-white rounded">
                  Get started for free
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
              <img src="/images/hero.png" alt="..." />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="features" className="md:py-20 py-10">
          <div className={`mx-auto ${styles.container}`}>
            <h2 className="font-semibold text-grey_40 text-4xl mb-8 text-center md:text-left">
              Features
            </h2>
            <div
              className=" grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-10 lg:grid-rows-1"
            >
              <div className="py-10 px-8 flex justify-center flex-col rounded-3xl bg-tertiary text-white text-center">
                <img src="/images/setup-1.svg" alt="..." />
                <p className="text-2xl font-semibold my-8">
                  Set up your business right away
                </p>
                <div className="flex justify-center">
                  <a className="p-4 rounded bg-grey_98 text-secondary font-semibold">
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="py-10 px-8 flex justify-center flex-col rounded-3xl border border-grey_40 text-white text-center">
                <img src="/images/setup-2.svg" alt="..." />
                <p className="text-2xl font-semibold my-8 text-grey_40">
                  Set up your business right away
                </p>
                <div className="flex justify-center">
                  <a className="p-4 rounded bg-grey_98 text-secondary font-semibold border border-secondary">
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="py-10 px-8 flex justify-center flex-col rounded-3xl border border-grey_40 text-white text-center">
                <img src="/images/setup-3.svg" alt="..." />
                <p className="text-2xl font-semibold my-8 text-grey_40">
                  Set up your business right away
                </p>
                <div className="flex justify-center">
                  <a className="p-4 rounded bg-grey_98 text-secondary font-semibold border border-secondary">
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="md:py-20 py-10">
          <div className={`mx-auto ${styles.container}`}>
            <div
              className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-10 lg:grid-rows-1"
            >
              <div className="py-20 pr-8">
                <h3 className="text-4xl font-semibold text-grey_40 mb-12">
                  Browse, explore and find an area of your business interest or
                  business specialty.
                </h3>

                <a className="text-secondary py-3 px-6 rounded-lg border-2 border-secondary text-2xl font-bold">
                  Learn More
                </a>
              </div>
              <div className="col-span-2">
                <h2 className="font-semibold text-grey_40 text-4xl mb-8">
                  Business Categories
                </h2>
                <div
                  className="grid-cols-2
                space-y-2
                lg:space-y-0 lg:grid lg:gap-10 lg:grid-rows-1"
                >
                  <div className="">
                    <ul>
                      <li className="rounded-3xl border border-grey_80 px-8 py-4 flex items-center mb-3 bg-secondary text-white">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <circle cx="6" cy="6" r="6" fill="currentColor" />
                        </svg>

                        <span className="ml-3">Education</span>
                      </li>
                      <li className="rounded-3xl border border-grey_80 px-8 py-4 flex items-center mb-3 text-grey_40">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-secondary"
                        >
                          <circle cx="6" cy="6" r="6" fill="currentColor" />
                        </svg>

                        <span className="ml-3">Crafts & DIY</span>
                      </li>
                      <li className="rounded-3xl border border-grey_80 px-8 py-4 flex items-center mb-3 text-grey_40">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-secondary"
                        >
                          <circle cx="6" cy="6" r="6" fill="currentColor" />
                        </svg>

                        <span className="ml-3">Design & Tech</span>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <ul>
                      <li className="rounded-3xl border border-grey_80 px-8 py-4 flex items-center mb-3 text-grey_40">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-secondary"
                        >
                          <circle cx="6" cy="6" r="6" fill="currentColor" />
                        </svg>

                        <span className="ml-3">Crafts & DIY</span>
                      </li>
                      <li className="rounded-3xl border border-grey_80 px-8 py-4 flex items-center mb-3 text-grey_40">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-secondary"
                        >
                          <circle cx="6" cy="6" r="6" fill="currentColor" />
                        </svg>

                        <span className="ml-3">Design & Tech</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="md:py-20 py-10">
          <div className={`mx-auto ${styles.container}`}>
            <h2 className="font-semibold text-grey_40 text-4xl mb-8 text-center md:text-left">
              Membership plans
            </h2>
            <div
              className="grid-cols-4
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
                <p className="font-bold text-3xl text-grey_40 mb-16">
                  £50/Annum
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

        <section id="membership" className="md:py-20 py-10">
          <div className={`mx-auto ${styles.container}`}>
            <h2 className="font-bold text-grey_40 text-4xl mb-3 text-center md:text-center">
              Subscribe to our newsletter
            </h2>
            <p className="text-lg font-medium text-grey_80 text-center">
              Get helpful tips and content to grow as a creator and digital
              entrepreneur.
            </p>
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
