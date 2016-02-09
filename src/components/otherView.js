/** @jsx React.DOM */
'use strict';

var React = require('react');

var NavigationButton = require('./navigationButton.js');

var OtherView = React.createClass({
  render: function() {
    return (
        <div className="view">
            <div className="title row">
                <div>
                  <h2>React Demo</h2>
                    Another route
                </div>
            </div>

            <div className="row">
                <NavigationButton
                    handleButton={this.props.navigateToHomeView} />
            </div>
        </div>
    );
  }
});

module.exports = OtherView;
