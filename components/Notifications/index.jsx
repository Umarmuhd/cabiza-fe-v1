/* eslint-disable react/no-unknown-property */
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Transition from "../../context/Transition";

function Notifications() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex pl-3 ml-5 border-l border-l-secondary_sky_base h-[100%] items-center">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.02 2.91016C8.71003 2.91016 6.02003 5.60016 6.02003 8.91016V11.8002C6.02003 12.4102 5.76003 13.3402 5.45003 13.8602L4.30003 15.7702C3.59003 16.9502 4.08003 18.2602 5.38003 18.7002C9.69003 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702L18.58 13.8602C18.28 13.3402 18.02 12.4102 18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016Z"
            stroke="#303437"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
            stroke="#303437"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
            stroke="#303437"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>

        <div className="absolute top-[30%] right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
            Notifications
          </div>
          <ul>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="#0">
                <a
                  className="block py-2 px-4 hover:bg-slate-50"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="block text-sm mb-2">
                    📣{" "}
                    <span className="font-medium text-slate-800">
                      Edit your information in a swipe
                    </span>{" "}
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">
                    Feb 12, 2021
                  </span>
                </a>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="#0">
                <a
                  className="block py-2 px-4 hover:bg-slate-50"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="block text-sm mb-2">
                    📣{" "}
                    <span className="font-medium text-slate-800">
                      Edit your information in a swipe
                    </span>{" "}
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">
                    Feb 9, 2021
                  </span>
                </a>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="#0">
                <a
                  className="block py-2 px-4 hover:bg-slate-50"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="block text-sm mb-2">
                    🚀
                    <span className="font-medium text-slate-800">
                      Say goodbye to paper receipts!
                    </span>{" "}
                    Sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">
                    Jan 24, 2020
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Notifications;
