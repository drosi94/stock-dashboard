export const STOCK_DAILY_REQUEST = 'STOCK_DAILY_REQUEST';
export const STOCK_DAILY_SUCCESS = 'STOCK_DAILY_SUCCESS';
export const STOCK_DAILY_FAILURE = 'STOCK_DAILY_FAILURE';

export interface DailyStockResponse {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface DailyStockState {
  isLoading: boolean;
  data: DailyStockResponse[];
  hasError: boolean;
  error: { message?: string; code?: number; [key: string]: any };
}
