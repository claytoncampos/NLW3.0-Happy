import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphangesMap from './pages/OrphanagesMap'
import Orphange from './pages/Orphanage'
import CreateOrphange from './pages/CreateOrphanage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphangesMap} />
        <Route path="/orphanages/create" component={CreateOrphange} />
        <Route path="/orphanages/:id" component={Orphange} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;