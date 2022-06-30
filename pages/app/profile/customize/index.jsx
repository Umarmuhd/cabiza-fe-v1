import React, { useState, useContext } from "react";
import { Tab } from "@headlessui/react";

import Dashboard from "@/layouts/Dashboard";
import AuthContext from "@/context/AuthContext";
import TopNav from "@/components/Navbars/DashboardNav/TopNav";

import ChangePicture from "./change-picture";
import Connections from "./connections";
import Share from "./share";
import { classNames } from "../../../../libs/helper";
import Referral from "./referral";
import ReferralStats from "./referral-stats";

export default function Customize() {
  const { user } = useContext(AuthContext);

  return (
    <div className="lg:w-[85%] w-[100%] ml-auto">
      <TopNav title="Settings" />
      <Tab.Group>
        <div className="md:px-0 pt-5">
          <div className="flex justify-start items-end mr-auto md:w-43/50 mx-auto">
            <Tab.List as={"div"} className="flex w-[100%]">
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-8 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Change Picture
              </Tab>
              {/* <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-8 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Connections
              </Tab> */}
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-8 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Share
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-8 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Referral
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-md mr-8 pb-2 font-medium",
                    selected
                      ? " font-bold text-primary border-b border-b-primary"
                      : " text-secondary"
                  )
                }
              >
                Referral Stats
              </Tab>
            </Tab.List>
          </div>
        </div>

        <Tab.Panels>
          <Tab.Panel>
            <ChangePicture user={user} />
          </Tab.Panel>
          {/* <Tab.Panel>
            <Connections />
          </Tab.Panel> */}
          <Tab.Panel>
            <Share />
          </Tab.Panel>
          <Tab.Panel>
            <Referral />
          </Tab.Panel>
          <Tab.Panel>
            <ReferralStats />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Customize.layout = Dashboard;
