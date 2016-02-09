/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var NavigationButton = React.createClass({
	render: function () {
		return (
			<div
				className="navigation-button"
				onClick={this.props.handleButton}>
					OK
			</div>
		);
	}
});

module.exports = NavigationButton;
