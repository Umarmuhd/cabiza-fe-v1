import React from 'react';

const Card = ({title, children}) => {
    return (
      <div className='bg-white rounded-2xl p-10 max-w-[1100px] mx-auto mt-10 shadow-md mb-5'>
       {title ? <h3 className='text-2xl text-primary_brand_light font-semibold mb-5'>{title}</h3> : null}

        {children}        
      </div>
    );
}

export default Card;
