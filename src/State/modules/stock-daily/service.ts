import API from '../../utils/stock-api';
import { DailyStockResponse } from './types';

const handleResults = (data: any): DailyStockResponse[] => {
  const keys = Object.keys(data);
  return keys.map(
    (key) =>
      ({
        date: new Date(key),
        open: parseFloat(data[key]['1. open']),
        high: parseFloat(data[key]['2. high']),
        low: parseFloat(data[key]['3. low']),
        close: parseFloat(data[key]['4. close']),
        volume: parseFloat(data[key]['5. volume']),
      } as DailyStockResponse)
  );
};

/**
 * Fetches the daily stocks for the selected symbol
 * @param {string} symbol, The symbol of the stock
 */
export const fetchTimeSeriesDaily = async (
  symbol: string
): Promise<DailyStockResponse[]> => {
  const apiResponse = await API.get('/query2', {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      outputsize: 'compact',
    },
  });
  if (apiResponse.data['Time Series (Daily)']) {
    return handleResults(apiResponse.data['Time Series (Daily)']);
  } else {
    return Promise.reject({
      message: 'No data found',
      code: 404,
    });
  }
};
