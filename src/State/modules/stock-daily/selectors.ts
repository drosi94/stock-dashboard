import { createSelector } from '@reduxjs/toolkit';
import * as Types from './types';

export const stockDailyState = (state: any) => state.stockDaily;

export const getStockDailyData = createSelector(
  stockDailyState,
  (stockDailyState) => {
    const { data } = stockDailyState;
    return data;
  }
);

export const isStockDailyLoading = createSelector(
  stockDailyState,
  (stockDailyState: Types.DailyStockState) => {
    const { isLoading } = stockDailyState;
    return isLoading;
  }
);

export const hasStockDailyError = createSelector(
  stockDailyState,
  (stockDailyState: Types.DailyStockState) => {
    const { hasError } = stockDailyState;
    return hasError;
  }
);

export const getStockDailyError = createSelector(
  stockDailyState,
  (stockDailyState: Types.DailyStockState) => {
    const { error } = stockDailyState;
    return error;
  }
);
