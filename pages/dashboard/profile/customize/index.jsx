import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

import Dashboard from '@/layouts/Dashboard';
import { classNames } from '../../../../libs/helper';

import Payout from '@/components/Settings/Payout';
import Password from '@/components/Settings/Password';
import Setting from '@/components/Settings/Setting';
import Payment from '@/components/Settings/Payment';
import TopNav from '@/components/Navbars/DashboardNav/TopNav';
import Advance from '@/components/Settings/Advance';
import ChangePicture from './change-picture';
import Connections from './connections';

export default function Customize() {
  return (
    <div>
      <TopNav title='Settings' />
      <Tab.Group>
        <div className='h-22 pt-8 md:px-0 px-20'>
          <div className='flex justify-start items-center w-[85%] mr-auto ml-20 pl-7 pb-2'>
            <Tab.List as={'div'} className='flex w-[100%]'>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-8 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Change Picture
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-8 pb-5',
                    selected
                      ? ' font-bold text-primary border-b border-b-primary'
                      : ' font-medium text-secondary'
                  )
                }
              >
                Connections
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
                Share
              </Tab>

              <button className='text-lg ml-auto bg-primary px-4 py-2 rounded-3xl text-white self-center mt-[-1.2rem]'>
                Save
              </button>
            </Tab.List>
          </div>
        </div>

        <Tab.Panels>
          <Tab.Panel>
            <ChangePicture/>
          </Tab.Panel>
          <Tab.Panel>
            <Connections />
          </Tab.Panel>
          <Tab.Panel>
            <Payment />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Customize.layout = Dashboard;
