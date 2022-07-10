import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Transition from "../../context/Transition";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  console.log("User: ", user);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current?.contains(target) ||
        trigger.current?.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative md:inline-flex px-3 ml-1 border-l border-l-secondary_sky_base h-[100%] hidden">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex items-center truncate">
          <span className="truncate ml-1 text-sm font-medium group-hover:text-slate-800 text-secondary_ink_dark mr-3">
            {user?.full_name.length > 7
              ? user?.full_name.slice(0, 7).concat("...")
              : user?.full_name}
          </span>
        </div>
        <div className="border-2 border-primary rounded-full flex items-center p-[.2rem]">
          <Image
            src={user?.profile_picture ?? "/images/avatar.png"}
            width={32}
            height={32}
            className="rounded-full"
            alt="User"
          />
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
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
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">{user?.full_name}</div>
          </div>
          <ul>
            <li>
              <Link href="/settings">
                <a
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 mt-3 mb-3"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <button
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  logout();
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
