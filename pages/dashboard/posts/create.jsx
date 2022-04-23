import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FullNav from "@/components/Navbars/DashboardNav/FullNav";

import Dashboard from '@/layouts/Dashboard';
import { API_URL } from '@/config/index';
import AuthContext from '@/context/AuthContext';
import FormGroup from '@/components/Forms/FormGroup';
import DashboardNav from '@/components/Navbars/DashboardNav';
import CheckSwitch from '@/components/checkSwitch';

const CheckIcon = ({ classes }) => (
  <svg
    width='12'
    height='9'
    viewBox='0 0 12 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`${classes}`}
  >
    <path
      d='M11 1.25L4.125 8.125L1 5'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M4 8H12'
      stroke='#5B44E9'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 12V4'
      stroke='#5B44E9'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default function CreatePost() {
  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required'),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: { audience: 0 },
  };

  const { register, handleSubmit, watch, formState } = useForm(formOptions);
  const { errors } = formState;

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handlePublish = async (values) => {
    setLoading(true);

    const { title, description, call_to_action, attachment, audience } = values;

    const form_data = new FormData();

    form_data.append('title', title);
    form_data.append('description', description);
    form_data.append('call_to_action', call_to_action);
    form_data.append('attachment', attachment[0]);
    form_data.append('audience', audience);
    form_data.append('send_email', values.send_email);
    form_data.append('post_to_profile', values.post_to_profile);
    form_data.append('allow_comments', values.allow_comments);
    form_data.append('allow_likes', values.allow_likes);

    try {
      const response = await axios.post(`${API_URL}/posts/new`, form_data);

      setLoading(false);
      toast.custom(
        <div className='rounded-lg py-4 px-8 bg-[#24C78C] flex items-center'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z'
              fill='white'
            />
          </svg>
          <span className='ml-2.5 font-medium text-lg text-white'>
            {response.data.message} !
          </span>
        </div>
      );

      router.push('/dashboard/posts');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <FullNav title='Posts'>
        <div
          className='bg-secondary_sky_lightest py-2 md:px-0 px-4'
          style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
        >
          <div className='flex justify-between items-center md:w-43/50 mx-auto'>
            <div className='flex'>
              <a className='leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.7449 6.36857L13.7448 6.36839C12.2745 4.05784 10.1649 2.78662 8 2.78662C6.91371 2.78662 5.8504 3.10332 4.86923 3.70546C3.88753 4.31459 2.99282 5.21107 2.25505 6.36857H13.7449ZM13.7449 6.36857C14.0161 6.79423 14.1667 7.3838 14.1667 7.99912C14.1667 8.61458 14.016 9.2018 13.7457 9.62345L13.745 9.62455C13.0072 10.7821 12.1125 11.6786 11.1308 12.2878C10.1496 12.8899 9.08628 13.2066 8 13.2066C5.83453 13.2066 3.72534 11.9415 2.25549 9.62537L2.25505 9.62468M13.7449 6.36857L2.25505 9.62468M2.25505 9.62468C1.98379 9.1988 1.83333 8.61081 1.83333 7.99662M2.25505 9.62468L1.83333 7.99662M1.83333 7.99662C1.83333 7.3825 1.98376 6.79455 2.25497 6.36869L1.83333 7.99662ZM4.80666 7.99995C4.80666 9.76196 6.22971 11.1933 8 11.1933C9.77028 11.1933 11.1933 9.76196 11.1933 7.99995C11.1933 6.23795 9.77028 4.80662 8 4.80662C6.22971 4.80662 4.80666 6.23795 4.80666 7.99995Z'
                    fill='#5B44E9'
                    stroke='#5B44E9'
                  />
                  <path
                    d='M8.00001 6.09326C6.95334 6.09326 6.10001 6.94659 6.10001 7.99993C6.10001 9.04659 6.95334 9.89993 8.00001 9.89993C9.04667 9.89993 9.90667 9.04659 9.90667 7.99993C9.90667 6.95326 9.04667 6.09326 8.00001 6.09326Z'
                    fill='#5B44E9'
                  />
                </svg>

                <span className='ml-2'>Preview</span>
              </a>
            </div>

            <div className='flex items-center justify-between'>
              <Link href='/dashboard/posts'>
                <a className='leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center mr-6'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.83331 7.99992C1.83331 4.60273 4.60279 1.83325 7.99998 1.83325C11.3972 1.83325 14.1666 4.60273 14.1666 7.99992C14.1666 11.3971 11.3972 14.1666 7.99998 14.1666C4.60279 14.1666 1.83331 11.3971 1.83331 7.99992ZM10.5935 10.5935C10.9821 10.2049 10.9821 9.56829 10.5935 9.1797L9.41375 7.99992L10.5935 6.82014C10.9821 6.43154 10.9821 5.79496 10.5935 5.40637C10.2049 5.01777 9.56835 5.01777 9.17976 5.40637L7.99998 6.58615L6.8202 5.40637C6.4316 5.01777 5.79502 5.01777 5.40643 5.40637C5.01783 5.79496 5.01783 6.43154 5.40643 6.82014L6.58621 7.99992L5.40643 9.1797C5.01783 9.56829 5.01783 10.2049 5.40643 10.5935C5.60514 10.7922 5.8612 10.8866 6.11331 10.8866C6.36543 10.8866 6.62149 10.7922 6.8202 10.5935L7.99998 9.41369L9.17976 10.5935C9.37847 10.7922 9.63453 10.8866 9.88665 10.8866C10.1388 10.8866 10.3948 10.7922 10.5935 10.5935Z'
                      fill='#5B44E9'
                      stroke='#5B44E9'
                    />
                  </svg>
                  <span className='ml-2'>Cancel</span>
                </a>
              </Link>

              <a className='leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center'>
                <span className='mr-2'>Publish</span>
                <svg
                  width='14'
                  height='7'
                  viewBox='0 0 14 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.28 0.966553L7.9333 5.31322C7.41997 5.82655 6.57997 5.82655 6.06664 5.31322L1.71997 0.966553'
                    stroke='#5B44E9'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>

              <button
                className='leading-4 text-base font-medium text-white py-2 px-3 rounded-4xl border border-primary bg-primary'
                type='submit'
                form='post-form'
                disabled={loading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </FullNav>

      <main className='w-full h-full relative'>
        <form id='post-form' onSubmit={handleSubmit(handlePublish)}>
          <div className='w-43/50 mx-auto md:py-10 flex justify-between'>
            <div className='w-[34%]'>
              <h1 className='font-semibold mb-6 text-secondary_ink_dark text-4xl'>
                New post
              </h1>
              <div
                className='bg-white rounded-2xl py-8 h-[37.5rem]'
                style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}
              >
                <button className='bg-secondary_sky_lighter text-primary rounded-xl flex w-[100%] p-3 mb-5 w-[87%] mx-auto'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-4 ml-2'
                  >
                    <path
                      d='M21.3 7.08018H15.72C15.6061 7.08018 15.52 6.99403 15.52 6.88018C15.52 6.76632 15.6061 6.68018 15.72 6.68018H21.3C21.4139 6.68018 21.5 6.76632 21.5 6.88018C21.5 6.99403 21.4139 7.08018 21.3 7.08018Z'
                      fill='#8E7FF0'
                      stroke='#8E7FF0'
                    />
                    <path
                      d='M6.42 7.58018H2.7C2.31 7.58018 2 7.27018 2 6.88018C2 6.49018 2.31 6.18018 2.7 6.18018H6.42C6.81 6.18018 7.12 6.49018 7.12 6.88018C7.12 7.27018 6.8 7.58018 6.42 7.58018Z'
                      fill='#8E7FF0'
                    />
                    <path
                      d='M10.14 10.8302C12.3215 10.8302 14.09 9.0617 14.09 6.88018C14.09 4.69865 12.3215 2.93018 10.14 2.93018C7.95848 2.93018 6.19 4.69865 6.19 6.88018C6.19 9.0617 7.95848 10.8302 10.14 10.8302Z'
                      fill='#8E7FF0'
                    />
                    <path
                      d='M21.3 17.8102H17.58C17.19 17.8102 16.88 17.5002 16.88 17.1102C16.88 16.7202 17.19 16.4102 17.58 16.4102H21.3C21.69 16.4102 22 16.7202 22 17.1102C22 17.5002 21.69 17.8102 21.3 17.8102Z'
                      fill='#8E7FF0'
                    />
                    <path
                      d='M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z'
                      fill='#8E7FF0'
                    />
                    <path
                      d='M13.86 21.0699C16.0415 21.0699 17.81 19.3014 17.81 17.1199C17.81 14.9384 16.0415 13.1699 13.86 13.1699C11.6785 13.1699 9.91 14.9384 9.91 17.1199C9.91 19.3014 11.6785 21.0699 13.86 21.0699Z'
                      fill='#8E7FF0'
                    />
                  </svg>
                  Post settings
                </button>
                <div className='mb-8 border-t border-t-secondary_sky_base pt-5 w-[87%] mx-auto'>
                  <h2 className='text-secondary_ink_darkest font-medium mb-5 text-base'>
                    Audience
                  </h2>
                  <div className='flex items-center justify-between mb-2'>
                    <CheckSwitch
                      label='Everyone'
                      id='everyone'
                      name='push-notifications'
                      {...register('audience', { required: true })}
                      styles='rounded bg-white w-[100%] text-left flex justify-between items-center cursor-pointer block text-secondary !mb-0'
                      checked
                    />
                  </div>
                </div>
                <div className='mb-8 w-[87%] mx-auto'>
                  <h2 className='text-secondary_ink_darkest font-medium mb-5 text-base'>
                    Channel
                  </h2>
                  <FormGroup className='my-2'>
                    <div className='w-full flex items-center justify-between relative'>
                      <label
                        className='text-secondary leading-4'
                        htmlFor='send-email'
                      >
                        Send Email
                      </label>
                      <input
                        type='checkbox'
                        id='send-email'
                        defaultChecked={false}
                        className='appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer'
                        {...register('send_email')}
                        name='channel'
                      />
                      <CheckIcon classes='absolute right-[.4rem] hidden peer-checked:block' />
                    </div>
                  </FormGroup>
                  <FormGroup className='my-2 mt-4'>
                    <div className='w-full flex items-center justify-between relative'>
                      <label
                        className='text-secondary leading-4 flex items-center'
                        htmlFor='post-to-profile'
                      >
                        Post to profile{' '}
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='ml-2'
                        >
                          <path
                            d='M8.00001 14.6668C11.6667 14.6668 14.6667 11.6668 14.6667 8.00016C14.6667 4.3335 11.6667 1.3335 8.00001 1.3335C4.33334 1.3335 1.33334 4.3335 1.33334 8.00016C1.33334 11.6668 4.33334 14.6668 8.00001 14.6668Z'
                            stroke='#979C9E'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M8 5.3335V8.66683'
                            stroke='#979C9E'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M7.99634 10.6665H8.00233'
                            stroke='#979C9E'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </label>
                      <input
                        type='checkbox'
                        id='post-to-profile'
                        defaultChecked={true}
                        className='appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer'
                        {...register('post_to_profile')}
                        name='channel'
                      />
                      <CheckIcon classes='absolute right-[.4rem] hidden peer-checked:block' />
                    </div>
                  </FormGroup>
                </div>
                <div className='mb-0 w-[87%] mx-auto'>
                  <h2 className='text-secondary_ink_darkest font-medium mb-5 text-base'>
                    Engagements
                  </h2>
                  <FormGroup className='my-2'>
                    <div className='w-full flex items-center justify-between relative'>
                      <label
                        className='text-secondary leading-4'
                        htmlFor='allow-comments'
                      >
                        Allow Comments
                      </label>
                      <input
                        type='checkbox'
                        name='allow-comments'
                        defaultChecked={true}
                        className='appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer'
                        {...register('allow_comments')}
                      />
                      <CheckIcon classes='absolute right-[.4rem] hidden peer-checked:block' />
                    </div>
                  </FormGroup>
                  <FormGroup className='my-2 mt-4'>
                    <div className='w-full flex items-center justify-between relative'>
                      <label
                        className='text-secondary leading-4'
                        htmlFor='allow-likes'
                      >
                        Allow Likes
                      </label>
                      <input
                        type='checkbox'
                        name='allow-likes'
                        defaultChecked={false}
                        className='appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer'
                        {...register('allow_likes')}
                      />
                      <CheckIcon classes='absolute right-[.4rem] hidden peer-checked:block' />
                    </div>
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className='w-[62%]'>
              <div
                className='rounded-3xl p-8 bg-white'
                style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.06)' }}
              >
                <div className='mb-6 relative'>
                  <label
                    className='block text-secondary_ink_darkest font-medium mb-4 leading-4'
                    htmlFor='title'
                  >
                    Post Title
                  </label>
                  <input
                    type='text'
                    className='border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-lg'
                    style={{ transition: 'all 0.15s ease 0s' }}
                    id='title'
                    placeholder='Enter your post title'
                    {...register('title', { required: true })}
                  />
                  {errors.title?.type === 'required' && (
                    <p className='text-left text-red-600 text-xs mt-1'>
                      Post title is required
                    </p>
                  )}
                </div>
                <div className='mb-6 relative'>
                  <label
                    className='block text-secondary_ink_darkest font-medium mb-4 leading-4'
                    htmlFor='description'
                  >
                    Description
                  </label>
                  <div className="flex text-lg items-end border rounded-t-lg border-secondary_sky_light sm:px-4 lg:px-4 py-1 pb-3">
                    <div className="flex items-center">
                      <button className="mr-2 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="10" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 14V0H5.25239C6.32196 0 7.17826 0.143247 7.82128 0.429741C8.47067 0.709868 8.97681 1.14598 9.3397 1.73806C9.70896 2.32378 9.89359 2.93815 9.89359 3.58117C9.89359 4.17963 9.73124 4.74307 9.40655 5.27149C9.08186 5.79991 8.59163 6.22647 7.93588 6.55116C8.78263 6.79945 9.43201 7.22283 9.88404 7.82128C10.3424 8.41974 10.5716 9.12642 10.5716 9.94134C10.5716 10.5971 10.4316 11.2083 10.1514 11.7749C9.87767 12.3352 9.53706 12.7681 9.1296 13.0737C8.72215 13.3793 8.20964 13.6116 7.59209 13.7708C6.9809 13.9236 6.22965 14 5.33834 14H0ZM1.85266 5.88267H4.87995C5.70123 5.88267 6.29013 5.82856 6.64666 5.72033C7.11778 5.58026 7.47112 5.34789 7.70669 5.02319C7.94861 4.6985 8.06958 4.29104 8.06958 3.80082C8.06958 3.33606 7.95816 2.9286 7.73533 2.57844C7.51251 2.22192 7.19418 1.97999 6.78035 1.85266C6.36653 1.71896 5.65666 1.65211 4.65075 1.65211H1.85266V5.88267ZM1.85266 12.3479H5.33834C5.93679 12.3479 6.35698 12.3256 6.59891 12.281C7.02547 12.2046 7.38199 12.0773 7.66849 11.899C7.95498 11.7208 8.19054 11.4629 8.37517 11.1255C8.5598 10.7817 8.65211 10.387 8.65211 9.94134C8.65211 9.41928 8.51842 8.96726 8.25102 8.58527C7.98363 8.19691 7.61119 7.92633 7.1337 7.77353C6.66257 7.61437 5.98136 7.53479 5.09004 7.53479H1.85266V12.3479Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-2 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="9" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.44629 13.618L6.33272 14H0.571655L0.716198 13.618C1.29437 13.6042 1.67638 13.556 1.86222 13.4735C2.16507 13.3564 2.38876 13.1947 2.53331 12.9882C2.76045 12.6647 2.99447 12.0865 3.23537 11.2537L5.67195 2.80826C5.87844 2.10619 5.98168 1.5762 5.98168 1.21829C5.98168 1.03933 5.93695 0.887906 5.84747 0.764012C5.75799 0.640118 5.62033 0.547198 5.43449 0.485251C5.25553 0.416421 4.90106 0.382006 4.37107 0.382006L4.49496 0H9.90499L9.79142 0.382006C9.35091 0.375123 9.02397 0.423304 8.81059 0.526549C8.50086 0.664208 8.2634 0.860374 8.0982 1.11504C7.9399 1.36971 7.73341 1.93412 7.47873 2.80826L5.05248 11.2537C4.83223 12.0315 4.7221 12.527 4.7221 12.7404C4.7221 12.9125 4.7634 13.0605 4.84599 13.1844C4.93547 13.3014 5.07313 13.3943 5.25897 13.4631C5.45169 13.5251 5.84747 13.5767 6.44629 13.618Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-3 h-6 w-4 flex items-end mt-[.25rem]">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.123 0H10.5465V6.21488C10.5465 7.29595 10.4242 8.15444 10.1796 8.79036C9.93502 9.42628 9.49232 9.94479 8.85151 10.3459C8.21559 10.7421 7.37911 10.9403 6.34208 10.9403C5.33439 10.9403 4.51014 10.7666 3.86933 10.4193C3.22852 10.072 2.77115 9.57058 2.49721 8.91509C2.22328 8.25472 2.08631 7.35465 2.08631 6.21488V0H3.50979V6.20755C3.50979 7.14186 3.59539 7.83159 3.7666 8.27673C3.9427 8.71698 4.2411 9.05695 4.66178 9.29665C5.08736 9.53634 5.60588 9.65618 6.21734 9.65618C7.26416 9.65618 8.01014 9.41894 8.45528 8.94444C8.90043 8.46995 9.123 7.55765 9.123 6.20755V0Z" fill="#090A0A" />
                          <path d="M0.904968 12.8994H11.7572V14H0.904968V12.8994Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-3 h-6 w-4 flex items-end mt-[.05rem]">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.89962 9.27177L1.20965 9.41953C1.23427 10.3245 1.48054 11.1372 1.94843 11.8575C2.42249 12.5717 3.072 13.1073 3.89698 13.4644C4.72812 13.8215 5.75626 14 6.98142 14C7.94799 14 8.81607 13.8245 9.58564 13.4736C10.3614 13.1165 10.9555 12.6209 11.368 11.9868C11.7804 11.3465 11.9867 10.6662 11.9867 9.94591C11.9867 9.21944 11.7989 8.57916 11.4234 8.02507C11.3856 7.96866 11.3457 7.91325 11.3037 7.85884H12.5777C12.9041 7.85884 13.1688 7.59423 13.1688 7.26781C13.1688 6.94139 12.9041 6.67678 12.5777 6.67678H9.7567C9.7307 6.66436 9.70446 6.65204 9.67799 6.63984C9.13621 6.39358 8.13577 6.1073 6.67667 5.781C5.22372 5.44855 4.32486 5.12533 3.9801 4.81135C3.62917 4.49736 3.45371 4.09719 3.45371 3.61082C3.45371 3.05057 3.69997 2.57344 4.1925 2.17942C4.69118 1.77924 5.4823 1.57916 6.56585 1.57916C7.60631 1.57916 8.39127 1.79771 8.92073 2.23483C9.45635 2.67194 9.77033 3.31838 9.86268 4.17414L11.5804 4.04486C11.5496 3.25066 11.3279 2.53958 10.9155 1.91161C10.503 1.28364 9.91193 0.809587 9.14237 0.489446C8.37895 0.163149 7.49549 0 6.49197 0C5.5808 0 4.75274 0.153914 4.0078 0.461741C3.26286 0.769569 2.69646 1.22208 2.30859 1.81926C1.92073 2.41029 1.7268 3.04749 1.7268 3.73087C1.7268 4.35268 1.88379 4.91601 2.19777 5.42084C2.51792 5.91953 3.0012 6.33817 3.64764 6.67678H1.34817C1.02175 6.67678 0.757141 6.94139 0.757141 7.26781C0.757141 7.59423 1.02175 7.85884 1.34817 7.85884H7.59826C8.10344 7.99236 8.46115 8.1001 8.67139 8.18206C9.23779 8.39754 9.64412 8.66535 9.89039 8.98549C10.1366 9.29947 10.2598 9.66887 10.2598 10.0937C10.2598 10.5123 10.1305 10.9002 9.87192 11.2573C9.6195 11.6082 9.23164 11.8852 8.70833 12.0884C8.18502 12.2916 7.58168 12.3931 6.8983 12.3931C6.12873 12.3931 5.43612 12.2608 4.82047 11.996C4.20481 11.7252 3.74923 11.3742 3.45371 10.9433C3.16435 10.5062 2.97966 9.94899 2.89962 9.27177Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-3 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="14" height="14" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.92138 14.07L1.7182 9.10179C0.985616 8.51506 0.985616 7.55494 1.7182 6.96821L7.92138 2M16.4841 14.07L22.6872 9.10179C23.4198 8.51506 23.4198 7.55494 22.6872 6.96821L16.4841 2" stroke="#090A0A" strokeWidth="2.14067" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end ">
                        <svg width="16" height="12" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.50818 14V1.65211H0.236694V0H12.9188V1.65211H7.62551V14H5.50818Z" fill="#090A0A" />
                          <path d="M17.0989 14V6.59127H13.936V5.6H21.5453V6.59127H18.3693V14H17.0989Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.79416 0.981901C8.18933 1.6365 6.81678 2.6184 5.67651 3.9276C5.12749 4.56109 4.85298 5.33183 4.85298 6.23982C4.85298 6.66214 4.90577 7.01056 5.01135 7.28507C5.0747 7.43288 5.33865 7.79186 5.80321 8.36199C6.28888 8.91101 6.59506 9.32278 6.72176 9.59729C6.86957 9.95626 6.94348 10.3152 6.94348 10.6742C6.94348 11.5611 6.62674 12.3424 5.99325 13.0181C5.35977 13.6727 4.59959 14 3.71271 14C2.84695 14 2.09732 13.6621 1.46384 12.9864C0.851472 12.2896 0.545288 11.3816 0.545288 10.2624C0.545288 9.01659 0.872588 7.73907 1.52719 6.42986C2.18179 5.12066 3.15313 3.9276 4.44122 2.85068C5.32809 2.11161 6.86957 1.16139 9.06565 0L9.79416 0.981901ZM24.3326 0.981901C22.1999 2.1644 20.8379 3.1463 20.2466 3.9276C19.6554 4.68778 19.3598 5.42685 19.3598 6.1448C19.3598 6.58824 19.4337 6.96833 19.5815 7.28507C19.6448 7.454 19.9088 7.81297 20.3733 8.36199C20.859 8.91101 21.1546 9.2911 21.2602 9.50226C21.408 9.86124 21.4819 10.2308 21.4819 10.6109C21.4819 11.54 21.1652 12.3424 20.5317 13.0181C19.8982 13.6727 19.1381 14 18.2512 14C17.3643 14 16.6041 13.6727 15.9706 13.0181C15.3583 12.3424 15.0521 11.4344 15.0521 10.2941C15.0521 8.47813 15.7067 6.70437 17.0159 4.97285C18.3251 3.24133 20.5528 1.65762 23.6991 0.221719L24.3326 0.981901Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.892642 0C0.583362 0 0.332642 0.250721 0.332642 0.56V2.24C0.332642 2.54928 0.583362 2.8 0.892642 2.8H2.57264C2.88192 2.8 3.13264 2.54928 3.13264 2.24V0.56C3.13264 0.250721 2.88192 0 2.57264 0H0.892642Z" fill="#090A0A" />
                          <path d="M0.892642 5.6C0.583362 5.6 0.332642 5.85072 0.332642 6.16V7.84C0.332642 8.14928 0.583362 8.4 0.892642 8.4H2.57264C2.88192 8.4 3.13264 8.14928 3.13264 7.84V6.16C3.13264 5.85072 2.88192 5.6 2.57264 5.6H0.892642Z" fill="#090A0A" />
                          <path d="M0.332642 11.76C0.332642 11.4507 0.583362 11.2 0.892642 11.2H2.57264C2.88192 11.2 3.13264 11.4507 3.13264 11.76V13.44C3.13264 13.7493 2.88192 14 2.57264 14H0.892642C0.583362 14 0.332642 13.7493 0.332642 13.44V11.76Z" fill="#090A0A" />
                          <path d="M6.49264 0C6.18336 0 5.93264 0.250721 5.93264 0.56V2.24C5.93264 2.54928 6.18336 2.8 6.49264 2.8H17.9726C18.2819 2.8 18.5326 2.54928 18.5326 2.24V0.56C18.5326 0.250721 18.2819 0 17.9726 0H6.49264Z" fill="#090A0A" />
                          <path d="M5.93264 6.16C5.93264 5.85072 6.18336 5.6 6.49264 5.6H22.1726C22.4819 5.6 22.7326 5.85072 22.7326 6.16V7.84C22.7326 8.14928 22.4819 8.4 22.1726 8.4H6.49264C6.18336 8.4 5.93264 8.14928 5.93264 7.84V6.16Z" fill="#090A0A" />
                          <path d="M6.49264 11.2C6.18336 11.2 5.93264 11.4507 5.93264 11.76V13.44C5.93264 13.7493 6.18336 14 6.49264 14H13.7726C14.0819 14 14.3326 13.7493 14.3326 13.44V11.76C14.3326 11.4507 14.0819 11.2 13.7726 11.2H6.49264Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="23" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.9326 0.56C4.9326 0.250721 5.18333 0 5.49261 0H16.9726C17.2819 0 17.5326 0.250721 17.5326 0.56V2.24C17.5326 2.54928 17.2819 2.8 16.9726 2.8H5.4926C5.18332 2.8 4.9326 2.54928 4.9326 2.24V0.56Z" fill="#090A0A" />
                          <path d="M4.9326 6.16C4.9326 5.85072 5.18333 5.6 5.49261 5.6H21.1726C21.4819 5.6 21.7326 5.85072 21.7326 6.16V7.84C21.7326 8.14928 21.4819 8.4 21.1726 8.4H5.4926C5.18332 8.4 4.9326 8.14928 4.9326 7.84V6.16Z" fill="#090A0A" />
                          <path d="M4.9326 11.76C4.9326 11.4507 5.18333 11.2 5.49261 11.2H12.7726C13.0819 11.2 13.3326 11.4507 13.3326 11.76V13.44C13.3326 13.7493 13.0819 14 12.7726 14H5.49261C5.18333 14 4.9326 13.7493 4.9326 13.44V11.76Z" fill="#090A0A" />
                          <path d="M1.84276 0V2.8H1.41893V0.423828H1.40253L0.732605 0.861328V0.456641L1.43124 0H1.84276Z" fill="#090A0A" />
                          <path d="M0.735302 8.4V8.09788L1.66998 7.12948C1.76979 7.02428 1.85207 6.93211 1.91681 6.85299C1.98244 6.77296 2.03145 6.69698 2.06382 6.62505C2.09619 6.55311 2.11237 6.47669 2.11237 6.39576C2.11237 6.30405 2.09079 6.22492 2.04763 6.15838C2.00447 6.09094 1.94558 6.03924 1.87095 6.00328C1.79632 5.96641 1.71225 5.94798 1.61873 5.94798C1.51982 5.94798 1.4335 5.96821 1.35977 6.00867C1.28604 6.04913 1.22939 6.10623 1.18983 6.17996C1.15027 6.25369 1.13049 6.34001 1.13049 6.43892H0.732605C0.732605 6.27078 0.771269 6.12376 0.848597 5.99788C0.925925 5.872 1.03203 5.77444 1.1669 5.7052C1.30178 5.63507 1.45508 5.6 1.62682 5.6C1.80036 5.6 1.95322 5.63462 2.0854 5.70385C2.21848 5.77219 2.32233 5.8657 2.39696 5.98439C2.47159 6.10218 2.50891 6.23526 2.50891 6.38362C2.50891 6.48613 2.48957 6.58638 2.45091 6.68439C2.41314 6.7824 2.34706 6.89165 2.25264 7.01214C2.15823 7.13173 2.02695 7.27694 1.85881 7.44778L1.30987 8.02235V8.04258H2.55341V8.4H0.735302Z" fill="#090A0A" />
                          <path d="M1.69477 14C1.51201 14 1.34876 13.9685 1.20504 13.9055C1.0622 13.8425 0.949082 13.7551 0.865685 13.6433C0.783175 13.5307 0.738815 13.4003 0.732605 13.2521H1.15048C1.1558 13.3328 1.18286 13.4029 1.23165 13.4624C1.28134 13.5209 1.3461 13.5662 1.42595 13.5981C1.5058 13.63 1.59452 13.646 1.69211 13.646C1.79946 13.646 1.89439 13.6274 1.9769 13.5901C2.0603 13.5529 2.12551 13.5009 2.17253 13.4344C2.21955 13.367 2.24306 13.2894 2.24306 13.2015C2.24306 13.1101 2.21955 13.0298 2.17253 12.9606C2.12639 12.8906 2.05852 12.8356 1.96892 12.7956C1.8802 12.7557 1.77285 12.7357 1.64686 12.7357H1.41664V12.4004H1.64686C1.748 12.4004 1.83672 12.3822 1.91302 12.3458C1.99021 12.3094 2.05054 12.2589 2.09401 12.1941C2.13748 12.1285 2.15922 12.0517 2.15922 11.9639C2.15922 11.8796 2.14015 11.8064 2.102 11.7443C2.06473 11.6813 2.0115 11.6321 1.9423 11.5966C1.87399 11.5611 1.79325 11.5433 1.7001 11.5433C1.61138 11.5433 1.52842 11.5598 1.45124 11.5926C1.37494 11.6245 1.31283 11.6707 1.26492 11.731C1.21702 11.7904 1.19129 11.8618 1.18774 11.9452H0.789829C0.794265 11.798 0.837738 11.6684 0.920248 11.5567C1.00364 11.4449 1.11366 11.3575 1.25029 11.2945C1.38691 11.2315 1.53863 11.2 1.70542 11.2C1.8802 11.2 2.03102 11.2342 2.15789 11.3025C2.28565 11.3699 2.38413 11.4599 2.45333 11.5726C2.52342 11.6853 2.55802 11.8086 2.55713 11.9426C2.55802 12.0952 2.51543 12.2247 2.42937 12.3312C2.3442 12.4376 2.23064 12.5091 2.08869 12.5454V12.5667C2.26968 12.5942 2.40985 12.6661 2.50922 12.7823C2.60947 12.8985 2.65916 13.0427 2.65827 13.2148C2.65916 13.3648 2.61746 13.4992 2.53318 13.6181C2.44978 13.7369 2.33577 13.8305 2.19116 13.8989C2.04655 13.9663 1.88108 14 1.69477 14Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="23" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.9826 0.7C5.9826 0.313401 6.29601 0 6.68261 0H15.7826C16.1692 0 16.4826 0.313401 16.4826 0.7V2.8C16.4826 3.1866 16.1692 3.5 15.7826 3.5H6.68261C6.29601 3.5 5.9826 3.1866 5.9826 2.8V0.7Z" fill="#090A0A" />
                          <path d="M0.732605 5.95C0.732605 5.5634 1.04601 5.25 1.43261 5.25H21.0326C21.4192 5.25 21.7326 5.5634 21.7326 5.95V8.05C21.7326 8.4366 21.4192 8.75 21.0326 8.75H1.4326C1.046 8.75 0.732605 8.4366 0.732605 8.05V5.95Z" fill="#090A0A" />
                          <path d="M5.9826 11.2C5.9826 10.8134 6.29601 10.5 6.68261 10.5H15.7826C16.1692 10.5 16.4826 10.8134 16.4826 11.2V13.3C16.4826 13.6866 16.1692 14 15.7826 14H6.68261C6.29601 14 5.9826 13.6866 5.9826 13.3V11.2Z" fill="#090A0A" />
                        </svg>

                      </button>

                      <button className="mr-4 h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="16" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.08668 7.38286L7.11567 4.35387M2.38297 4.9219L1.81503 5.48984C0.667805 6.63707 0.667805 8.50747 1.81503 9.65469C2.95848 10.7981 4.83266 10.8019 5.97989 9.65469L6.54783 9.08676M8.8158 6.81879L9.38752 6.24706C10.531 5.10362 10.5348 3.22943 9.38752 2.0822C8.24408 0.938761 6.3699 0.934975 5.22267 2.0822L4.65094 2.65393" stroke="#090A0A" strokeWidth="1.77856" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                      </button>

                      <button className="h-6 w-4 flex items-end mt-[.1rem]">
                        <svg width="16" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.0032 7.72929L13.0032 7.72928C12.6446 7.42124 12.0394 7.42124 11.6808 7.72928L11.6806 7.72943L8.76877 10.2283L13.0032 7.72929ZM13.0032 7.72929L13.006 7.73169L13.097 7.80869L13.92 8.50506V7.427V4.067C13.92 2.99593 13.636 2.09546 13.0053 1.4647C12.3745 0.833929 11.474 0.55 10.403 0.55H4.53697C3.4659 0.55 2.56543 0.833929 1.93467 1.4647C1.3039 2.09546 1.01997 2.99593 1.01997 4.067V9.933C1.01997 10.5235 1.12126 11.0409 1.2996 11.4948L1.52706 12.0738L2.0436 11.7272L4.6616 9.97017L4.66271 9.96942C5.04108 9.71402 5.58161 9.74976 5.90209 10.0296L5.90754 10.0344L5.91312 10.039L6.14743 10.2319L13.0032 7.72929ZM1.47433 12.016L1.47526 12.015L1.33062 11.699C1.16371 11.3342 1.04611 10.9263 1.00268 10.4733L0.995855 10.4739C0.978747 10.3018 0.969971 10.1215 0.969971 9.933V4.067C0.969971 2.89244 1.31815 2.01493 1.90152 1.43155C2.4849 0.848178 3.36241 0.5 4.53697 0.5H10.403C11.5775 0.5 12.455 0.848178 13.0384 1.43155C13.6218 2.01493 13.97 2.89244 13.97 4.067V9.933C13.97 11.1076 13.6218 11.9851 13.0384 12.5684C12.455 13.1518 11.5775 13.5 10.403 13.5H4.53697C3.05604 13.5 2.02889 12.948 1.47433 12.016ZM6.53592 4.19974C6.53592 4.8437 6.01389 5.36574 5.36992 5.36574C4.72596 5.36574 4.20392 4.8437 4.20392 4.19974C4.20392 3.55578 4.72596 3.03374 5.36992 3.03374C6.01389 3.03374 6.53592 3.55578 6.53592 4.19974Z" fill="#090A0A" stroke="#090A0A" />
                        </svg>

                      </button>
                    </div>

                    <div className="lg:flex items-center ml-auto hidden">
                      <button className="h-6 w-5 flex items-end mt-[.1rem] mr-2">
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.43772 2.33498C6.97187 1.80082 6.97187 0.934778 6.43772 0.400619C5.90356 -0.13354 5.03751 -0.13354 4.50336 0.400619L1.39085 3.51312C1.13434 3.76963 0.990234 4.11754 0.990234 4.4803C0.990234 4.84306 1.13434 5.19097 1.39085 5.44748L4.50336 8.55998C5.03751 9.09414 5.90356 9.09414 6.43772 8.55998C6.97187 8.02583 6.97187 7.15978 6.43772 6.62562L5.73299 5.92089H16.0482C18.6484 5.92089 20.7595 8.03195 20.7595 10.6322C20.7595 11.3876 21.3719 12 22.1273 12C22.8827 12 23.4951 11.3876 23.4951 10.6322C23.4951 6.52112 20.1593 3.1853 16.0482 3.1853H5.5874L6.43772 2.33498Z" fill="#CDCFD0" />
                        </svg>

                      </button>

                      <button className="h-6 w-5 flex items-end mt-[.1rem]">
                        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5525 2.33498C17.0184 1.80082 17.0184 0.934778 17.5525 0.400619C18.0867 -0.13354 18.9527 -0.13354 19.4869 0.400619L22.5994 3.51312C22.8559 3.76963 23 4.11754 23 4.4803C23 4.84306 22.8559 5.19097 22.5994 5.44748L19.4869 8.55998C18.9527 9.09414 18.0867 9.09414 17.5525 8.55998C17.0184 8.02583 17.0184 7.15978 17.5525 6.62562L18.2572 5.92089L7.94204 5.92089C5.34179 5.92089 3.23074 8.03195 3.23074 10.6322C3.23074 11.3876 2.61835 12 1.86294 12C1.10752 12 0.49514 11.3876 0.49514 10.6322C0.49514 6.52112 3.83096 3.1853 7.94204 3.1853L18.4028 3.1853L17.5525 2.33498Z" fill="#CDCFD0" />
                        </svg>

                      </button>
                    </div>
                  </div>
                  <textarea
                    type='text'
                    className='border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-b-lg resize-none'
                    style={{ transition: 'all 0.15s ease 0s' }}
                    id='description'
                    placeholder='Post Description'
                    rows={4}
                    {...register('description', { required: true })}
                  ></textarea>
                  {errors.description?.type === 'required' && (
                    <p className='text-left text-red-600 text-xs mt-1'>
                      Post description is required
                    </p>
                  )}
                </div>

                <div className='mb-6 relative'>
                  <input
                    className='rounded-lg py-3 w-full border border-secondary_sky_light bg-secondary_sky_lightest text-lg text-secondary_ink_darkest placeholder-secondary_ink_darkest cursor-text text-center outline-none'
                    placeholder='Add call-to-action-button'
                    autoComplete='off'
                    {...register('call_to_action', { required: true })}
                    style={{ 'box-shadow': '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
                  />
                  {errors.call_to_action?.type === 'required' && (
                    <p className='text-left text-red-600 text-xs mt-1'>
                      Post call to action is required
                    </p>
                  )}
                </div>

                <div className='relative'>
                  <span
                    className='block text-secondary_ink_darkest font-medium mb-4 leading-4'
                    htmlFor='Files'
                  >
                    Files
                  </span>
                  <div className='w-full relative border-dashed rounded-lg border-2 border-darkGrey flex justify-center items-center bg-secondary_sky_lightest flex-col py-6'>
                    <p className='font-medium text-secondary mb-2'>
                      {watch('attachment') !== undefined &&
                        watch('attachment').length > 0
                        ? watch('attachment')[0].type
                        : 'Add Files'}
                    </p>

                    <span className='block text-secondary_brand_light font-normal mt-2 mx-4 mb-2'>
                      {watch('attachment') !== undefined &&
                        watch('attachment').length > 0
                        ? watch('attachment')[0].name
                        : 'Upload your post files here'}
                    </span>

                    <label
                      htmlFor='upload-file'
                      className='text-secondary_brand_light font-normal mt-2 mx-4 flex items-center bg-primary_brand_lightest rounded-full p-2 px-3 cursor-pointer'
                    >
                      {watch('attachment') !== undefined &&
                        watch('attachment').length > 0 ? (
                        watch('attachment')[0].name
                      ) : (
                        <>
                          <PlusIcon />
                          <span className='text-primary ml-3'>
                            Upload files
                          </span>
                        </>
                      )}
                    </label>

                    {/* <div className='absolute'>
                      <div className='flex flex-col items-center text-center'>
                        <p className='font-medium text-secondary mb-4 cursor-pointer'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].type
                            : 'Add Files'}
                        </p>
                        <span className='block text-secondary_brand_light font-normal mt-2 mx-4'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].name
                            : 'Upload your post files here'}
                        </span>

                        <button className='block text-secondary_brand_light font-normal mt-2 mx-4'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].name
                            : 'Upload your post files here'}
                        </button>
                      </div>
                    </div> */}
                    <input
                      type='file'
                      className='h-full w-full opacity-0 hidden'
                      id='upload-file'
                      {...register('attachment', { required: false })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

CreatePost.layout = Dashboard;
