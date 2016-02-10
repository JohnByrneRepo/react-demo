/** @jsx React.DOM */
'use strict';

var React = require('react');
var NavigationButton = require('./navigationButton.js');
var MapView = require('./mapView.js');

var HomeView = React.createClass({
  render: function() {
    return (
        <div className="view">
            <div className="title row">
                <div>
                    <h2>React Demo</h2>
                    Click ok to test routing
                    <MapView />
                </div>
            </div>

            <div className="row">
                <NavigationButton
                    handleButton={this.props.navigateToOtherView} />
            </div>
        </div>
    );
  }
});

module.exports = HomeView;
