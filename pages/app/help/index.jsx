import React, { useEffect } from 'react';
import Dashboard from '@/layouts/Dashboard';

import TawkTo from 'tawkto-react';
import TopNav from '@/components/Navbars/DashboardNav/TopNav';

export default function Help() {
  const propertyId = process.env.NEXT_PUBLIC_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_WIDGET_ID;

  useEffect(() => {
    var tawk = new TawkTo(propertyId, widgetId);

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);

  return (
    <div className="lg:w-[85%] w-[100%] ml-auto h-[100vh]">
      <TopNav title="Help" />

      <div className="px-4 sm:px-6 md:px-0 w-full max-w-9xl mx-auto">
        <main className="md:w-43/50 mx-auto mt-10 bg-white rounded-xl px-6 md:px-12 py-8 md:py-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos omnis
            corrupti blanditiis reiciendis quisquam eligendi eum, laboriosam
            itaque, quos iste at ea recusandae cum atque optio earum, tempore
            dolorum nulla?
          </p>
        </main>
      </div>
    </div>
  );
}

Help.layout = Dashboard;
