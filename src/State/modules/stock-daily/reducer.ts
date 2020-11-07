import * as Types from './types';

const initialState: Types.DailyStockState = {
  isLoading: false,
  data: [],
  hasError: false,
  error: {},
};

export default function reducer(
  state: Types.DailyStockState = initialState,
  action: { type: string; [key: string]: any }
) {
  switch (action.type) {
    case Types.STOCK_DAILY_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
        hasError: false,
        error: {},
      };
    case Types.STOCK_DAILY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        hasError: false,
        error: {},
      };
    case Types.STOCK_DAILY_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        hasError: true,
        error: action.error,
      };
    default:
      return state;
  }
}
