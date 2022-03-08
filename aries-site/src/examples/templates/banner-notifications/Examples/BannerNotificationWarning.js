import React from 'react';
import { Notification } from 'grommet';

export const BannerNotificationWarning = () => (
  <Notification
    actions={[
      {
        href: '#',
        label: 'Refresh',
      },
    ]}
    status="warning"
    message="Your session has timed out due to inactivity."
  />
);
