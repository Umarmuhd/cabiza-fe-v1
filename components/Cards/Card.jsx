import React from 'react';

const Card = ({title, children, image}) => {
    return (
      <div className='bg-white rounded-2xl p-10 max-w-[1100px] mx-auto mt-10 shadow-md mb-5'>
        <div className='flex items-center'>
          {image ? <img src={image} className="mr-20 h-[100%] w-[25rem] rounded-xl shadow-lg"/> : null}
          {title ? (
            <div>
              <h3 className='text-2xl text-primary_brand_light font-semibold mb-5'>
                {title}
              </h3>
              {children}
            </div>
          ) : null}
        </div>

      </div>
    );
}

export default Card;
