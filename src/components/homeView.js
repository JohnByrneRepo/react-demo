/** @jsx React.DOM */
'use strict';

var React = require('react');

var NavigationButton = require('./navigationButton.js');

var HomeView = React.createClass({
  render: function() {
    return (
        <div className="view">
            <div className="title row">
                <div>
                    <h2>React Demo</h2>
                    Routing demo, click ok to test
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
