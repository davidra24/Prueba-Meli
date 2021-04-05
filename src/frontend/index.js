import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './pages/App';
import { ItemsContextProvider } from './context/ItemsContext';
import { createBrowserHistory } from "history";
import { Router } from "react-router";

const history = createBrowserHistory()

/**
 * Renderizado principal de aplicación React
 */
ReactDOM.hydrate(
  <React.StrictMode>
    <ItemsContextProvider>
      <Router history={history}>
        <App />
      </Router>
    </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);