import React from "react";
import Link from "next/link";

import styles from "./styles/index.module.css";

export default function AuthNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={`w-full flex flex-wrap items-center justify-between px-0 md:px-4 py-3 bg-white fixed ${styles.shadow} z-30`}
      >
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8946 16.2652 11 16 11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10ZM3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14H16C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15C17 15.2652 16.8946 15.5196 16.7071 15.7071C16.5196 15.8946 16.2652 16 16 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15Z"
                  fill="#FFFFFF"
                />
              </svg>
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
                    className="border bg-secondary border-secondary text-white font-semibold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 mb-3"
                    style={{ transition: "all .15s ease" }}
                  >
                    Signup
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
