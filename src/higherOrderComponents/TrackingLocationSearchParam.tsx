import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setTestPopup } from '../redux/slices/globalSlice';
import convertQueryParametersToJson from '../utils/convertQueryParametersToJson';

const TrackingLocationSearchParam = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location: any = useLocation();
  const dispatch = useDispatch();
  const resetEvent = () => {
    dispatch(setTestPopup(false));
  };
  useEffect(() => {
    if (location?.search) {
      const jsonObject = convertQueryParametersToJson(location.search);
      console.log('decoding', jsonObject);
      if (jsonObject.popup === 'admin') {
        dispatch(setTestPopup(true));
      } else {
        dispatch(setTestPopup(false));
      }
    } else {
      resetEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return <>{children}</>;
};

export default TrackingLocationSearchParam;
