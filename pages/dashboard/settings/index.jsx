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
        <div className='bg-secondary_sky_lightest h-22 shadow-md pt-8 md:px-0 px-20'>
          <div className='flex justify-start items-center w-[max-content] mr-auto ml-20 pl-7 pb-2'>
            <Tab.List as={'div'} className='flex items-center'>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Settings
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Payout
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Payment
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Password
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
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
