import React, { useContext } from 'react';
import TopNav from '@/components/Navbars/DashboardNav/TopNav';
import { NavContext } from '@/context/NavContext';

const FullNav = ({ title, children }) => {
  return (
    <React.Fragment>
      <TopNav title={title} showLanguage={false} />
      <div
        className="bg-secondary_sky_lightest py-4 md:h-20 h-auto px-4 sm:px-6 md:px-0 w-full max-w-9xl mx-auto shadow-lg border-b sm:mb-0 mb-8"
        style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default FullNav;
