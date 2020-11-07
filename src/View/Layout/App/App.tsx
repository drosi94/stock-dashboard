import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import classes from './styles.module.css';

import store from '../../../State/store';

import DashboardPage from '../../Pages/DashboardPage';
import Header from '../Header';

function App() {
  return (
    <ReduxProvider store={store}>
      <Header />
      <main className={classes.container}>
        <DashboardPage />
      </main>
    </ReduxProvider>
  );
}

export default App;
