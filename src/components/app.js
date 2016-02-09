/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var App = React.createClass({
	getInitialState: function() {
		return {};
	},
	componentWillMount: function() {

	},
  navigateToOtherView: function () {
		Router.transitionTo('other');
	},
  navigateToHomeView: function () {
    Router.transitionTo('home');
  },
	render: function () {
		return (
	      	<div className="content">
	      		{this.props.activeRouteHandler({
	      			navigateToOtherView: this.navigateToOtherView,
	      			navigateToHomeView: this.navigateToHomeView
	      		})}
	      	</div>
		);
	}
});

module.exports = App;
