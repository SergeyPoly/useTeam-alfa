import React from 'react';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Navbar } from '../../../client/navbar/components/Navbar';

export const App = () => {
  return (
      <>
          <Navbar/>
          <AppRoutes />
      </>
  );
};
