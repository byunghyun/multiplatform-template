import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AnimatedPage from './higherOrderComponents/AnimationRoute';
import LoginMain from './pages/login/LoginMain';
import ReservationMain from './pages/reservation/ReservationMain';

const RoutesMain = () => {
  const location = useLocation();

  const routesList = [
    {
      element: (
        <AnimatedPage>
          <ReservationMain />
        </AnimatedPage>
      ),
      path: '/',
    },
    {
      element: (
        <AnimatedPage>
          <LoginMain />
        </AnimatedPage>
      ),
      path: '/:login',
    },
  ];
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        {routesList.map((route, index) => {
          return <Route key={location.pathname} {...route} />;
        })}
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
