import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '@/components/Cards/Card';
import Toggle from '@/components/Toggle/Toggle';

import AuthContext from '@/context/AuthContext';

export default function Advance() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const [productPricingSettings, setProductPricingSettings] = useState(false);

  const handleTogglePricingSettings = () => {
    setProductPricingSettings((prev) => !prev);
  };

  return (
    <form>
      <Card title='Custom Domain'>
        <div>
          <label htmlFor='uname' className='text-secondary_ink_darkest'>
            Username
          </label>
          <div className='border border-sky_light mt-3 h-10 rounded text-secondary_ink_lighter bg-white px-4 pr-1 w-[100%] mr-2 text-left flex justify-between items-center shadow overflow-hidden'>
            <input
              id='uname'
              name='uname'
              className='w-[100%] py-6 outline-none peer'
              placeholder='Your domain name (example.com)'
            />
            <button className='bg-sky_light text-secondary_sky_dark px-3 py-1 rounded peer-focus:bg-primary peer-focus:text-white'>
              Verify
            </button>
          </div>
          <a className='text-primary my-4 px-4 float-right'>Learn more</a>
        </div>

        <div className='flex bg-secondary_sky_lighter py-3 pl-4 mt-20 rounded-xl justify-between'>
          <p className='text-secondary_ink_lighter'>
            Verify domain in third-party service
          </p>
          <Toggle
            label='verify-domain'
            classes='text-left mr-[-1.2rem] mt-[-.4rem]'
          />
        </div>

        <div className='mt-8'>
          <button className='bg-primary py-3 w-[100%] rounded-full text-white'>
            Update account details
          </button>
        </div>
      </Card>

      <Card>
        <div className='text-tertiary_red_darkest bg-[transparent] w-[max-content] mx-auto'>
          <button className='text-lg'>Delete your Cabiza Account</button>
        </div>
        <p className='mt-2 text-center text-secondary_ink_dark'>
          Deleting your account will delete all of your products and product
          files, as well as any credit card and payout information.
        </p>
      </Card>
    </form>
  );
}
