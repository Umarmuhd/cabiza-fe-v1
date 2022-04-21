import React, { useState, useContext, useEffect } from 'react';
import { Tab } from '@headlessui/react';

import AllProductsEmpty from '@/components/Cards/AllProductsEmpty';

import Dashboard from '@/layouts/Dashboard';
import AllProducts from '@/components/Cards/AllProducts';
import Affiliated from '@/components/Cards/Affiliated';
import { classNames } from '../../../libs/helper';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import AuthContext from '@/context/AuthContext';
import axios from 'axios';
import FullNav from '@/components/Navbars/DashboardNav/FullNav';

const Products = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/products/user/${user?._id}`);

      setProducts(response.data.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProducts(), []);

  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/user/balance/me`);
      setBalance(response.data.data.wallet);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const SearchIcon = () => (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.33334 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33334 1.33333C4.01963 1.33333 1.33334 4.01962 1.33334 7.33333C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z'
        stroke='#303437'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.62 13.7932C12.9733 14.8599 13.78 14.9665 14.4 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.38 13.0665 12.62 13.7932Z'
        stroke='#303437'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  useEffect(() => fetchBalance(), []);

  return (
    <div>
      <Tab.Group>
        <FullNav title='Products'>
          <div className='flex justify-between items-center md:w-43/50 mx-auto pr-4'>
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
                All Products
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
                Affiliate
              </Tab>
            </Tab.List>

            <div className='flex flex-row-reverse items-center justify-between mt-[-.5rem]'>
              <button className='flex items-center justify-center bg-primary_brand_lightest hover:bg-slate-200 transition duration-150 p-3 rounded-full peer'>
                <SearchIcon />
              </button>
              <input
                type='search'
                className='border border-grey_80 px-4 h-10 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none w-full rounded-[100px] scale-x-0 origin-top-right mr-2 peer-focus:scale-x-100 focus:scale-x-100'
                style={{ transition: 'all 0.15s ease 0s' }}
                id='search'
                placeholder='Search...'
              />
              {/* <div className='flex rounded-[100px] shadow-sm mr-6'>
                <input
                  type='text'
                  className='border border-r-0 border-grey_80 px-4 py-2 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none w-full rounded-l-[100px]'
                  style={{ transition: 'all 0.15s ease 0s' }}
                  id='search'
                  placeholder='Search...'
                />
                <div className='inline-flex items-center px-3 border border-l-0 border-gray-300 text-gray-500 text-sm rounded-r-[100px]'>
                  <span className='rounded-full p-2 bg-primary h-7 w-7'>
                    <img src='/images/icons/search.svg' alt='...' />
                  </span>
                </div>
              </div>
              <Link href='/dashboard/products/create'>
                <a className='py-2 px-4 bg-primary flex items-center font-medium text-white rounded-[48px]'>
                  <PlusIcon /> <span className='ml-2'>New Product </span>
                </a>
              </Link> */}
            </div>
          </div>
        </FullNav>

        <Tab.Panels>
          <Tab.Panel>
            {products.length > 0 ? (
              <AllProducts products={products} balance={balance} />
            ) : (
              <AllProductsEmpty user={user} />
            )}
          </Tab.Panel>
          <Tab.Panel>
            <Affiliated />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Products;

Products.layout = Dashboard;
