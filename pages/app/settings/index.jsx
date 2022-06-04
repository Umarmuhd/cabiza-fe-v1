import React from "react";
import { Tab } from "@headlessui/react";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "../../../libs/helper";

import Payout from "@/components/Settings/Payout";
import Password from "@/components/Settings/Password";
import Setting from "@/components/Settings/Setting";
import Payment from "@/components/Settings/Payment";
import FullNav from "@/components/Navbars/DashboardNav/FullNav";
import Advance from "@/components/Settings/Advance";

export default function Settings() {
  return (
    <div className="md:w-[85%] w-[100%] ml-auto">
      <Tab.Group>
        <FullNav title="Settings">
          <div className="flex justify-start items-end mr-auto md:w-43/50 mx-auto">
            <Tab.List as={"div"} className="flex items-center py-[.5rem]">
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-10 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Settings
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-10 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Payout
              </Tab>
              {false && (
                <Tab
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Payment
                </Tab>
              )}
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-10 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Password
              </Tab>
              {false && (
                <Tab
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Advance
                </Tab>
              )}
            </Tab.List>
          </div>
        </FullNav>

        <Tab.Panels>
          <Tab.Panel>
            <Setting />
          </Tab.Panel>
          <Tab.Panel>
            <Payout />
          </Tab.Panel>
          {false && (
            <Tab.Panel>
              <Payment />
            </Tab.Panel>
          )}
          <Tab.Panel>
            <Password />
          </Tab.Panel>
          {false && (
            <Tab.Panel>
              <Advance />
            </Tab.Panel>
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Settings.layout = Dashboard;
