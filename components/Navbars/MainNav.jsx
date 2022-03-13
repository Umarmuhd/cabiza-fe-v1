import React from "react";
import Link from "next/link";

const NavIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="#F2F2F2" />
    <path
      d="M16 20H34"
      stroke="#02BDDC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 25H34"
      stroke="#02BDDC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 30H34"
      stroke="#02BDDC"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function MainNavigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-0 md:px-4 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                <img src="/images/logo.png" alt="..." />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <NavIcon />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-primary lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base text-cabiza_grey hover:font-semibold hover:text-cabiza_blue mr-5">
                    Home
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/discover">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base  text-cabiza_grey hover:font-semibold hover:text-cabiza_blue mr-5">
                    Discover
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/membership">
                  <a className="px-3 py-4 lg:py-2 flex items-center text-base text-cabiza_grey hover:font-semibold hover:text-cabiza_blue">
                    Membership
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/auth/login">
                  <a
                    className="font-medium md:px-4 py-2 hover:font-semibold focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                    style={{ transition: "all .15s ease" }}
                  >
                    Login
                  </a>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/auth/signup">
                  <a
                    className="border bg-primary border-primary text-white font-semibold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 mb-3"
                    style={{ transition: "all .15s ease" }}
                  >
                    Get Started
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
