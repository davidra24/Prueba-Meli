import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { ITEMS_SEARCH_PATH, ITEM_ID } from "../util/constants";
import { Detail } from "./Detail";
import { Main } from "./Main";
import { Results } from "./Results";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' component={Main} exact></Route>
          <Route path={ITEMS_SEARCH_PATH} component={Results} exact></Route>
          <Route path={ITEM_ID} component={Detail} exact></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
