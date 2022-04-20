import React, { useState } from "react";
import { Tab } from "@headlessui/react";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "../../../libs/helper";

import Payout from "@/components/Settings/Payout";
import Password from "@/components/Settings/Password";
import Setting from "@/components/Settings/Setting";
import Payment from "@/components/Settings/Payment";
import TopNav from '@/components/Navbars/DashboardNav/TopNav';
import Advance from '@/components/Settings/Advance';

export default function Settings() {  
  return (
    <div>
      <TopNav title='Settings' />
      <Tab.Group>
        <div className='md:px-0 pt-3 py-2 shadow shadow-secondary_sky_base bg-secondary_sky_lightest z-30'>
          <div className='flex justify-start items-end mr-auto md:w-43/50 mx-auto'>
            <Tab.List as={'div'} className='flex items-center py-[.5rem]'>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Settings
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Payout
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Payment
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
                  )
                }
              >
                Password
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-md mr-10 pb-2 font-medium',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' text-secondary'
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
          <Tab.Panel>
            <Payment />
          </Tab.Panel>
          <Tab.Panel>
            <Password />
          </Tab.Panel>
          <Tab.Panel>
            <Advance />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Settings.layout = Dashboard;
