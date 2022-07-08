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

  const [tabsDetails] = useState({
    "Change Picture": {
      id: 1,
      component: <ChangePicture user={user} />,
    },
    Share: {
      id: 1,
      component: <Share />,
    },
    Referral: {
      id: 1,
      component: <Referral />,
    },
    "Referral Stats": {
      id: 1,
      component: <ReferralStats />,
    },
    // Connections: {}
  });

  return (
    <div className="lg:w-[85%] w-[100%] ml-auto">
      <TopNav title="Settings" />
      <Tab.Group>
        <div className="md:px-0 pt-5">
          <div className="flex justify-start items-end mr-auto md:w-43/50 mx-auto">
            <Tab.List
              as={"div"}
              className="mx-4 md:mx-0 flex w-full overflow-x-auto"
            >
              {Object.keys(tabsDetails).map((detail) => (
                <Tab
                  key={detail}
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md mr-8 pb-2 font-medium min-w-max",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  {detail}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>

        <Tab.Panels as={"div"} className="px-4 md:px-0">
          {Object.values(tabsDetails).map((detail, idx) => (
            <Tab.Panel key={idx}>{detail.component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Customize.layout = Dashboard;
