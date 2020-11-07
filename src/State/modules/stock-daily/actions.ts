import * as Service from './service';
import * as Types from './types';

/**
 * Executes the actions required to get the daily stocks for the specified symbol
 * @param {string} symbol, The symbol of the stock
 */
export const fetchDailyStocksBySymbol = (stock: string) => (
  dispatch: Function
) => {
  return new Promise(async (resolve: Function, reject: Function) => {
    dispatch({ type: Types.STOCK_DAILY_REQUEST });
    try {
      const data: Types.DailyStockResponse[] = await Service.fetchTimeSeriesDaily(
        stock
      );
      console.log('STOCK_DAILY_SUCCESS', data);
      dispatch({ type: Types.STOCK_DAILY_SUCCESS, data: data });
      resolve(data);
    } catch (error) {
      console.log('STOCK_DAILY_FAILURE', error);
      dispatch({ type: Types.STOCK_DAILY_FAILURE, error: error });
      reject(error);
    }
  });
};
