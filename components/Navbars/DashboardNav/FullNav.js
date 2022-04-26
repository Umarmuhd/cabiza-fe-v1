import React from 'react';
import TopNav from '@/components/Navbars/DashboardNav/TopNav';

const FullNav = ({ title, children }) => {
  return (
    <>
    <TopNav title={title} showLanguage={true}/>
      <div
        className='bg-secondary_sky_lightest py-4 h-20'
        style={{
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FullNav;
