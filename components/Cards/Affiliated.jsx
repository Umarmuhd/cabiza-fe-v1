import React from "react";

export default function Affiliated() {
  return (
    <div className='md:w-43/50 mx-auto bg-white rounded-3xl text-center p-10 mt-8 shadow'>
      <div className='mb-4'>
        <h3 className='text-2xl font-bold text-dark_ mb-2'>No Affiliate Yet</h3>
        <p>You don’t have any affiliate yet!</p>
      </div>
      <div className='w-3/4 mx-auto'>
        <img
          src='/images/affiliated.svg'
          alt='...'
          className='w-48 h-52 mx-auto'
        />
      </div>
    </div>
  );
}
