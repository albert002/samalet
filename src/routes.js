import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './pages/notFoundPage';

import Regions from './pages/regions/regions';
import Libraries from './pages/libraries/libraries';


export default () => (
  <Switch>
    <Route exact path="/" component={Regions} />
    <Route exact path="/:libraryId" component={Libraries} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
