import API from '../../utils/stock-api';
import { DailyStockResponse } from './types';

/**
 * Fetches the daily stocks for the selected symbol
 * @param {string} symbol, The symbol of the stock
 */
export const fetchTimeSeriesDaily = async (
  symbol: string
): Promise<DailyStockResponse[]> => {
  const apiResponse = await API.get('/query2', {
    params: { function: 'TIME_SERIES_DAILY', symbol },
  });
  if (apiResponse.data['Time Series (Daily)']) {
    return apiResponse.data as DailyStockResponse[];
  } else {
    return Promise.reject({
      message: 'No data found',
      code: 404,
    });
  }
};
