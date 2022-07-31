import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';

const ReservationMain = () => {
  const { isShownPopup } = useSelector((state: RootState) => state.global);
  const location: any = useLocation();
  const navigation = useNavigate();

  return (
    <div className='w-full h-full bg-[blue]'>
      <h1>ReservationMain</h1>
      {isShownPopup && (
        <button
          onClick={() => {
            navigation(`${location.pathname}`);
          }}
        >
          wefwef
        </button>
      )}
      <button
        onClick={() => {
          navigation({
            pathname: location.pathname,
            search: createSearchParams({
              popup: ['customer', 'admin'],
              checked: ['customer'],
            }).toString(),
          });
        }}
      >
        ㄴㄴ
      </button>
    </div>
  );
};

export default ReservationMain;
