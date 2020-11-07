import React from 'react';

import StockChart from '../../Components/StockChart';
import StockPicker from '../../Components/StockPicker';

import classes from './styles.module.css';

function DashboardPage() {
  return (
    <div className={classes.container}>
      <div className={classes.chartContainer}>
        <StockChart />
      </div>
      <div className={classes.pickerContainer}>
        <StockPicker />
      </div>
    </div>
  );
}

export default DashboardPage;
