import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '../components/Sidebar/index';

import { Toaster } from 'react-hot-toast';
import AuthContext from '@/context/AuthContext';
import { NavContext, NavProvider } from '@/context/NavContext';

export default function Dashboard({ children }) {
  const { user } = useContext(AuthContext);
  const { showNav, setShowNav } = useContext(NavContext);

  const router = useRouter();

  if (typeof window !== 'undefined') {
    if (!user) router.push('/auth/login');
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar user={user} sidebarOpen={showNav} setSidebarOpen={setShowNav} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden bg-secondary_sky_lighter w-[50%] ml-auto">
        {children}
      </div>
    </div>
  );
}
