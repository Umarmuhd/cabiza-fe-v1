import React, { useEffect } from 'react';
import Dashboard from '@/layouts/Dashboard';

import TawkTo from 'tawkto-react';

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
    <div>
      <p>Help page</p>{' '}
    </div>
  );
}

Help.layout = Dashboard;
