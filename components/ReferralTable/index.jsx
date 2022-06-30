import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const WarningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="#FFB323"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V13"
      stroke="#FFB323"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9941 16H12.0031"
      stroke="#FFB323"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReferralTable = () => {
  let [categories] = useState({
    Completed: [
      {
        id: 1,
        name: "Ukpe Jacob",
        status: "Completed",
        earnings: 20,
      },
      {
        id: 2,
        name: "Umar Zakari",
        status: "Completed",
        earnings: 12,
      },
    ],
    Pending: [
      {
        id: 1,
        name: "Triumph Ojo",
        status: "Pending",
        earnings: 0,
      },
    ],
  });
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-4 rounded-4xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 text-base font-medium leading-4 rounded-4xl",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "text-white bg-primary"
                    : "text-primary hover:bg-primary/[0.12] bg-primary_brand_lightest"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <div className="mt-6">
          <div className="px-4 py-2 bg-secondary_sky_lighter flex justify-between items-center text-secondary_ink_darkest">
            <span className="text-xl font-semibold">Invites</span>
            <span className="text-xl font-semibold">Earnings</span>
          </div>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((referrals, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {referrals.map((referred) => (
                    <li
                      key={referred.id}
                      className="relative rounded-md p-3 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <div className="">
                        <h3 className="text-lg text-secondary_ink_darkest font-medium leading-5">
                          {referred.name}
                        </h3>

                        <div className="text-sm mt-1 text-secondary_ink_lighter">
                          {referred.status}
                        </div>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </div>
                      <div className="">
                        {referred.status === "Completed" && (
                          <span className="text-base font-medium text-tertiary_green_base">
                            ${referred.earnings}
                          </span>
                        )}
                        {referred.status === "Pending" && <WarningIcon />}
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default ReferralTable;
