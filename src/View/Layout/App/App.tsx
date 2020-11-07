import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import classes from './App.module.css';

import store from '../../../State/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div>
        <span>Test</span>
      </div>
    </ReduxProvider>
  );
}

export default App;
