import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ITEMS_SEARCH_PATH, ITEM_ID } from '../util/constants';
import { Main } from './Main';
import { Loading } from "../components/Loading";
import { Layout } from '../containers/Layout';

/**
 *
 * @returns Componente principal de renderizado de aplicación React
 */
export const App = () => (
  <Suspense fallback={
    <Layout>
      <Loading/>
    </Layout>
  }>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} exact></Route>
        <Route path={ITEMS_SEARCH_PATH} component={lazy(() => import('./Results'))} exact></Route>
        <Route path={ITEM_ID} component={lazy(() => import('./Detail'))} exact></Route>
        <Route path='/404' component={lazy(() => import('./NotFound'))} />
        <Redirect to='/404' />
      </Switch>
    </BrowserRouter>
  </Suspense>
);
