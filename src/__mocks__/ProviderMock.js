import React from 'react'
import { ItemsContextProvider } from '../frontend/context/ItemsContext';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

const history = createBrowserHistory();

export const ProviderMock = ({children}) => (
    <ItemsContextProvider>
      <Router history={history}>
        {children}
      </Router>
    </ItemsContextProvider>
  );