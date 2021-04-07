import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ITEMS_SEARCH_PATH, ITEM_ID } from '../util/constants';
import { Detail } from './Detail';
import { Main } from './Main';
import { NotFound } from './NotFound';
import { Results } from './Results';

/**
 *
 * @returns Componente principal de renderizado de aplicación React
 */
export const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path={ITEMS_SEARCH_PATH} component={Results} exact></Route>
        <Route path={ITEM_ID} component={Detail} exact></Route>
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  </>
);
