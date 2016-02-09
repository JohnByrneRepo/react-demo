/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app.js');
var HomeView = require('./components/homeView.js');
var OtherView = require('./components/otherView.js');

var routes = (
  <Routes>
    <Route handler={App}>
        <Route name="home" handler={HomeView}/>
        <Route name="other" handler={OtherView}/>
        <DefaultRoute handler={HomeView}/>
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById('container'));
