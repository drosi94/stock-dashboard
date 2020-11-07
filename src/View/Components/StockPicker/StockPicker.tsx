import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Actions } from '../../../State/modules/stock-daily';
import companies from './companies';

function StockPicker() {
  const [selectedSymbol, setSelectedSymbol] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSymbol) {
      dispatch(Actions.fetchDailyStocksBySymbol(selectedSymbol));
    }
  }, [selectedSymbol]);

  const _onStockChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedSymbol(e.target.value);
  };

  return (
    <select onChange={_onStockChange}>
      <option value="">Select Company</option>
      {companies.map((company) => (
        <option key={company['Symbol']} value={company['Symbol']}>
          {company['Company Name']}
        </option>
      ))}
    </select>
  );
}

export default StockPicker;
