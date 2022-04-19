import React from 'react';

const Card = ({title, children, image}) => {
    return (
      <div className='bg-white rounded-2xl p-10 md:w-43/50 mx-auto mt-10 shadow mb-5'>
        <div className='flex items-center'>
          {image ? (
            <img
              src={image}
              className='mr-20 h-[100%] w-[25rem] rounded-xl shadow-lg'
            />
          ) : null}
          <div className='w-[100%]'>
            {title ? (
              <h3 className='text-2xl text-primary_brand_light font-semibold mb-5'>
                {title}
              </h3>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    );
}

export default Card;
