import { combineReducers } from '@reduxjs/toolkit';

import { reducer as stockDailyReducer } from './modules/stock-daily';

export default combineReducers({
  stockDaily: stockDailyReducer,
});
