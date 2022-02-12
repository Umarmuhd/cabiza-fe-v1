import React from "react";
import { useForm } from "react-hook-form";
import { Tab } from "@headlessui/react";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "../../../libs/helper";

import Payout from "@/components/Settings/Payout";
import Password from "@/components/Settings/Password";
import Setting from "@/components/Settings/Setting";

export default function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Tab.Group>
        <div className="bg-grey_95 border-b border-grey_60 py-6 md:px-0 px-4">
          <div className="flex justify-start items-center md:w-4/5 mx-auto">
            <Tab.List as={"div"} className="flex items-center">
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Settings
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Payout
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Payment
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Password
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-0",
                    selected
                      ? " font-bold text-cabiza_blue"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Advance
              </Tab>
            </Tab.List>
          </div>
        </div>

        <Tab.Panels>
          <Tab.Panel>
            <Setting />
          </Tab.Panel>
          <Tab.Panel>
            <Payout />
          </Tab.Panel>
          <Tab.Panel>{/* <WorkFlow /> */}</Tab.Panel>
          <Tab.Panel>
            <Password />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Settings.layout = Dashboard;
