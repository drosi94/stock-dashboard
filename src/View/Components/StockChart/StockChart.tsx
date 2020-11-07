import React from 'react';
import { useSelector } from 'react-redux';
import { CanvasJSChart } from 'canvasjs-react-charts';

import { Selectors, Types } from '../../../State/modules/stock-daily';
import Loader from '../Loader';

function StockChart() {
  const dailyStocks = useSelector(Selectors.getStockDailyData);
  const isLoading = useSelector(Selectors.isStockDailyLoading);

  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: 'dark1',
    title: {
      text: 'OHLC Chart',
    },
    axisX: {
      interval: 10,
      intervalType: 'day',
      valueFormatString: 'DD-MM-YY',
    },
    axisY: {
      prefix: '$',
      title: 'Price (in USD)',
    },
    data: [
      {
        type: 'ohlc',
        yValueFormatString: '$###0.00',
        xValueFormatString: 'DD MMM YYYY',
        dataPoints: dailyStocks.map((dailyStock: Types.DailyStockResponse) => ({
          x: dailyStock.date,
          y: [
            dailyStock.open,
            dailyStock.high,
            dailyStock.low,
            dailyStock.close,
          ],
        })),
      },
    ],
  };

  const containerProps = {
    height: '450px',
    margin: 'auto',
    width: '36%',
  };

  return isLoading ? (
    <Loader />
  ) : Object.keys(dailyStocks).length > 0 ? (
    <CanvasJSChart containerProps={containerProps} options={options} />
  ) : null;
}

export default StockChart;
