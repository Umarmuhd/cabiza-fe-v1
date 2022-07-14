import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileIcon from "../Icons/ProfileIcon";
import ProductsIcon from "../Icons/ProductsIcon";
import PostsIcon from "../Icons/PostsIcon";
import PayoutIcon from "../Icons/PayoutIcon";
import CommunityIcon from "../Icons/CommunityIcon";
import HelpIcon from "../Icons/HelpIcon";
import SettingsIcon from "../Icons/SettingsIcon";

const menus = [
  { path: "/profile", title: "Profile", icon: ProfileIcon },
  { path: "/products", title: "Products", icon: ProductsIcon },
  { path: "/posts", title: "Posts", icon: PostsIcon },
  { path: "/payout", title: "Payout", icon: PayoutIcon },
  // { path: "/community", title: "Community", icon: CommunityIcon },
  { path: "/help", title: "Help", icon: HelpIcon },
  { path: "/settings", title: "Settings", icon: SettingsIcon },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();
  const { pathname } = router;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="w-[max-content]">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`!fixed border-r border-sec flex flex-col z-[102] left-0   top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-[#F2F4F5] md:bg-white p-4 transition-all duration-200 ease-in-out h-[100vh] ${
          sidebarOpen ? "translate-x-0 !w-full" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Logo */}
          <Link href="/profile">
            <a className="block">
              <svg
                width="43"
                height="36"
                viewBox="0 0 43 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2489 7.87925C19.2736 6.16921 24.5476 8.02628 26.0275 12.0281C27.5074 16.0299 24.6338 20.6614 19.6092 22.3715C14.5845 24.0815 9.31059 22.2244 7.83068 18.2226C6.35078 14.2208 9.22429 9.58929 14.2489 7.87925Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1531 23.4359C17.2375 23.1897 19.8617 24.5258 20.0152 26.4212C20.1654 28.3167 17.7873 30.0523 14.7028 30.2984C11.6184 30.5445 8.99417 29.2084 8.84074 27.313C8.68732 25.4176 11.0654 23.682 14.1531 23.4359Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.6279 18.9961C28.5238 17.1518 31.8544 17.219 33.0658 19.1464C34.2804 21.0738 32.9155 24.1295 30.0196 25.9738C27.1238 27.818 23.7932 27.7509 22.5818 25.8235C21.3703 23.8961 22.7352 20.8404 25.6279 18.9961Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.7179 30.6468C22.0704 30.2888 24.1704 31.1774 24.4069 32.6349C24.6435 34.0924 22.927 35.5628 20.5745 35.9208C18.222 36.2788 16.122 35.3902 15.8855 33.9326C15.649 32.4751 17.3654 31.0048 19.7179 30.6468Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9964 13.1852C26.4174 10.8934 26.6891 8.22766 28.6037 7.2304C30.5183 6.23314 33.3535 7.28154 34.9325 9.57651C36.5115 11.8683 36.2398 14.534 34.3252 15.5313C32.4106 16.5254 29.5786 15.477 27.9964 13.1852Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.52792 21.9879C2.0197 20.019 2.87313 18.261 4.43614 18.0564C5.99916 17.8518 7.68043 19.2838 8.18865 21.2496C8.69687 23.2185 7.84343 24.9765 6.28042 25.181C4.71741 25.3856 3.03933 23.9569 2.52792 21.9879Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.84076 28.3422C1.50515 27.0445 2.0677 25.8843 3.10012 25.75C4.13254 25.6158 5.23847 26.5587 5.57729 27.8564C5.9129 29.1541 5.35035 30.3144 4.31793 30.4486C3.28551 30.5829 2.17638 29.64 1.84076 28.3422Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.27316 11.3345C5.28321 9.81304 6.86858 9.08107 7.8179 9.69797C8.76721 10.3149 8.71608 12.0473 7.70923 13.5656C6.69919 15.087 5.11379 15.819 4.16448 15.2021C3.21517 14.5852 3.26312 12.8528 4.27316 11.3345Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9252 4.26738C13.6384 3.32126 15.5498 3.33404 16.1955 4.29614C16.838 5.25824 15.9686 6.80527 14.2553 7.75139C12.5421 8.69751 10.6307 8.68472 9.98501 7.72262C9.34255 6.76052 10.212 5.21349 11.9252 4.26738Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4448 2.80985C26.0083 2.63725 28.2681 3.42354 28.4886 4.56464C28.7124 5.70573 26.8137 6.76693 24.2503 6.93953C21.6868 7.11213 19.427 6.32582 19.2064 5.18473C18.9827 4.04364 20.8781 2.98245 23.4448 2.80985Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.8918 19.2934C38.6914 17.9925 41.0215 18.1363 42.0987 19.613C43.1758 21.0897 42.5909 23.3399 40.7914 24.6377C38.9918 25.9386 36.6617 25.7947 35.5845 24.318C34.5074 22.8445 35.0923 20.5943 36.8918 19.2934Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.0215 1.86053C35.3927 2.34638 36.2397 3.58016 35.9105 4.61578C35.5813 5.65459 34.2037 6.10208 32.8324 5.61623C31.4612 5.13039 30.6142 3.8966 30.9434 2.86099C31.2726 1.82218 32.6503 1.37469 34.0215 1.86053Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.6055 0.243188C19.737 -0.153159 20.9069 -0.0540745 21.2201 0.460537C21.5334 0.975148 20.8717 1.7103 19.7402 2.10665C18.6087 2.4998 17.4389 2.40391 17.1256 1.8893C16.8156 1.37469 17.4772 0.639534 18.6055 0.243188Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.07272 6.93633C6.91016 6.10848 7.96175 5.59387 8.41883 5.78565C8.8791 5.97743 8.57226 6.80528 7.73482 7.63313C6.89738 8.46099 5.84578 8.9756 5.3887 8.78382C4.92843 8.59204 5.23528 7.76418 6.07272 6.93633Z"
                  fill="#5B44E9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.111509 16.634C0.380002 15.5473 1.04805 14.6523 1.60102 14.6331C2.15718 14.6139 2.38731 15.4802 2.11882 16.5637C1.85033 17.6505 1.18228 18.5454 0.629315 18.5646C0.0763481 18.587 -0.156983 17.7208 0.111509 16.634Z"
                  fill="#5B44E9"
                />
              </svg>
            </a>
          </Link>
          <div></div>

          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#EDEFFC" />
              <path
                d="M23 13L13 23M13 13L23 23"
                stroke="#090A0A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="">
              {menus.map((menu) => (
                <li
                  className={`px-3 py-2 rounded-4xl mb-4 last:mb-0 ${
                    pathname.includes(menu.path) && " bg-primary"
                  }`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  key={menu.title}
                >
                  <Link href={menu.path}>
                    <a
                      className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes(menu.path) && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center">
                        {menu.icon({ pathname })}

                        <span
                          className={
                            " ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-lg font-medium " +
                            (pathname.includes(menu.path)
                              ? "text-white"
                              : "text-secondary_ink_dark")
                          }
                        >
                          {menu.title}
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:hidden 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
