import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Card from '@/components/Cards/Card';
import Toggle from '@/components/Toggle/Toggle';

import AuthContext from "@/context/AuthContext";

export default function Setting() {
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
              <Card title='User details'>
                <div>
                  <div className='flex flex-col'>
                    <label
                      htmlFor='uname'
                      className='text-secondary_ink_darkest'
                    >
                      Username
                    </label>
                    <input
                      type='text'
                      name='uname'
                      id='uname'
                      className='border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4'
                      placeholder='jakecabiza'
                    />
                    <p className='mt-2 text-secondary_ink_lighter text-sm'>
                      View your profile at:{' '}
                      <a className='text-primary'>ukpejacob.cabiza.com</a>
                    </p>
                  </div>

                  <div className='flex flex-col mt-8'>
                    <label
                      htmlFor='email'
                      className='text-secondary_ink_darkest'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4'
                      placeholder='jakecabiza@gmail.com'
                    />
                  </div>
                </div>
              </Card>

              <Card title='Notifications'>
                <p className='mb-5 text-secondary_ink_lighter'>
                  Depending on your preferences, you can choose whether to
                  receive mobile notifications or email notifications. If you
                  want to get notifications on a mobile device, install the
                  Cabiza Dashboard app over on the App Store or Google Play.
                </p>

                <div className='border border-sky_light p-6 rounded-xl'>
                  <table
                    className='w-[100%]'
                    style={{
                      borderSpacing: '0 10px',
                      borderCollapse: 'separate',
                    }}
                  >
                    <tr className='h-12 text-lg'>
                      <th className='text-left px-6'>Notifications</th>
                      <th className='text-left px-6'>Email</th>
                      <th className='text-left px-6'>Mobile</th>
                    </tr>
                    <tr className='h-12 bg-secondary_sky_lighter text-secondary'>
                      <td className='text-left px-6'>Purchases</td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Purchases-email'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                          checked
                        />
                      </td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Purchases-mobile'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                          checked
                        />
                      </td>
                    </tr>
                    <tr className='h-12 bg-secondary_sky_lighter text-secondary'>
                      <td className='text-left px-6'>Recurring payments</td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Recurring-payments-email'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                          checked
                        />
                      </td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Recurring-payments-mobile'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                        />
                      </td>
                    </tr>
                    <tr className='h-12 bg-secondary_sky_lighter text-secondary'>
                      <td className='text-left px-6'>Free downloads</td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='free-downloads-email'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                        />
                      </td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='free-downloads-mobile'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                          checked
                        />
                      </td>
                    </tr>
                    <tr className='h-12 bg-secondary_sky_lighter text-secondary'>
                      <td className='text-left px-6'>
                        Personalized product announcements
                      </td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Personalized-product-email'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                        />
                      </td>
                      <td className='text-left px-6'>
                        <Toggle
                          label='Personalized-product-mobile'
                          click={handleTogglePricingSettings}
                          classes='text-left mt-[-.5rem]'
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </Card>

              <Card title='Local'>
                <div>
                  <div className='flex flex-col'>
                    <label
                      htmlFor='language'
                      className='text-secondary_ink_darkest'
                    >
                      Language
                    </label>
                    <select
                      name='language'
                      id='language'
                      className='border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 mt-3'
                    >
                      <option value='English' defaultValue>
                        English
                      </option>
                    </select>
                  </div>

                  <div className='flex flex-col mt-8'>
                    <label
                      htmlFor='t-zone'
                      className='text-secondary_ink_darkest'
                    >
                      Time Zone
                    </label>
                    <select
                      name='t-zone'
                      id='t-zone'
                      className='border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 mt-3'
                    >
                      <option value='English' defaultValue>
                        +01:00 | West African Time (Lagos, Nigeria)
                      </option>
                    </select>
                  </div>

                  <div className='flex flex-col mt-8'>
                    <label
                      htmlFor='sell-in'
                      className='text-secondary_ink_darkest'
                    >
                      Sell in ...
                    </label>
                    <select
                      name='sell-in'
                      id='sell-in'
                      className='border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 mt-3'
                    >
                      <option value='English' defaultValue>
                        $ (US Dollars)
                      </option>
                    </select>
                    <p className='mt-2 text-secondary_ink_lighter'>
                      Applies only to new products.
                      <br />
                      Charges will happen in USD, using an up-to-date exchange
                      rate. Customers may incur an additional foreign
                      transaction fee according to their cardmember agreement.
                    </p>
                  </div>

                  <div className='flex flex-col mt-8'>
                    <label
                      htmlFor='sell-in'
                      className='text-secondary_ink_darkest'
                    >
                      Apply sales tax in...
                    </label>
                    <select
                      name='sell-in'
                      id='sell-in'
                      className='border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 mt-3'
                    >
                      <option value='English' defaultValue>
                        Nexus
                      </option>
                    </select>
                    <p className='mt-2 text-secondary_ink_lighter'>
                      <a className='text-primary mr-2'>Learn more</a>
                      about nexus, permits, and taxable goods.
                    </p>
                  </div>
                </div>
              </Card>

              <Card title='Discover'>
                <p className='mb-5 text-secondary_ink_lighter'>
                  Grow beyond your core audience through recommendations of
                  related products. When enabled, your top-selling and
                  best-reviewed products will be recommended to likely buyers.
                </p>
                <div>
                  <div className='bg-secondary_sky_lighter p-3 rounded flex items-center justify-between px-5 mb-2'>
                    <p className='text-secondary'>
                      Show my products in Discover
                    </p>
                    <Toggle label='discoverMyProducts' />
                  </div>                  

                  <div className='flex flex-col mt-8'>
                    <label
                      htmlFor='sell-in'
                      className='text-secondary_ink_darkest'
                    >
                      Sell in ...
                    </label>
                    <select
                      name='sell-in'
                      id='sell-in'
                      className='border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 mt-3'
                    >
                      <option value='English' defaultValue>
                        Design & Tech Products
                      </option>
                    </select>
                                       <p className='mt-2 text-secondary_ink_lighter'>
                      Sales made via a Cabiza Discover purchase are subject to an additional 10% fee.
                      Products sold directly to your audience or otherwise outside of the Cabiza Discover feature will not be affected.
                    </p>
                      <a className='text-primary mr-2 mt-5'>Learn more</a>
                  </div>                  
                </div>
              </Card>

              <div className='max-w-[1100px] mx-auto mb-5'>
                <button className="bg-primary py-3 w-[100%] rounded-full text-white">Update settings</button>
              <div className='rounded-2xl bg-secondary_sky_light mt-7 p-5 text-center'>
                <a className="text-primary underline">Sign out from all active sessions</a>
                <p className="mt-2">You will be signed out from all your active sessions including this session.</p>
              </div>
              </div>

            </form>
  );
}
