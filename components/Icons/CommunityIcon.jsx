import React from "react";

const CommunityIcon = ({ pathname }) => {
  return (
    <svg
      width="24"
      height="24"
      className="shrink-0 h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z"
        stroke={pathname === "/community" ? "#fff" : "#5B44E9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
        stroke={pathname === "/community" ? "#fff" : "#5B44E9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommunityIcon;
