import React, { useState, useContext } from "react";
import { Tab } from "@headlessui/react";

import Dashboard from "@/layouts/Dashboard";
import AuthContext from "@/context/AuthContext";
import TopNav from "@/components/Navbars/DashboardNav/TopNav";

import ChangePicture from "./change-picture";
import Connections from "./connections";
import Share from "./share";
import { classNames } from "../../../../libs/helper";

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

              {/* <button className='ml-auto bg-primary px-4 py-2 rounded-3xl text-white self-center mt-[-.5rem] text-sm mr-8 pb-2 font-medium'>
                Save
              </button> */}
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
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Customize.layout = Dashboard;