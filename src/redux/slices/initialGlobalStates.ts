import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { GlobalSliceInterface } from './GlobalSliceInterface';

export const initialState: GlobalSliceInterface = {
  isShownPopup: false,
};
