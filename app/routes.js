import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Containers from './containers';
import { NotFound } from './components';
// import { fetchDataForHomePage } from './route_callbacks';
import { fetchOnScroll } from './HOC';

export default (
  <Route path='/' component= {Containers.App}>

    <IndexRoute component={Containers.HomePage} />

    <Route path='login' component={Containers.LogInPage} />
    
    <Route path='signup' component={Containers.SignUpPage} />

    <Route path="*" component={NotFound} />

  </Route>
);
