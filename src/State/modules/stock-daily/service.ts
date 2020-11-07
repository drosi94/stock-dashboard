import API from '../../utils/stock-api';
import { DailyStockResponse } from './types';

/**
 * Fetches the daily stocks for the selected symbol
 * @param {string} symbol, The symbol of the stock
 */
export const fetchTimeSeriesDaily = async (
  symbol: string
): Promise<DailyStockResponse[]> => {
  const apiResponse = await API.get('/query', {
    params: { function: 'TIME_SERIES_DAILY', symbol },
  });
  console.log('API response', apiResponse);
  return apiResponse.data as DailyStockResponse[];
};
