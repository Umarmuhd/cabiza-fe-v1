import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '@/components/Cards/Card';
import Toggle from '@/components/Toggle/Toggle';

import AuthContext from '@/context/AuthContext';

export default function Password() {
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
      <Card title='Change password'>       
        <div>
          <div className='flex flex-col mb-8'>
            <div className='w-[100%]'>
              <input type="password" name="old-password" className='border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 w-[100%] mr-2 text-left flex justify-between items-center' placeholder="Old Password"/>                

              <input type="password" name="new-password" className='border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center' placeholder="New Password"/>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <button className='bg-primary py-3 w-[100%] rounded-full text-white'>
            Change password
          </button>
        </div>
      </Card>
    </form>
  );
}
