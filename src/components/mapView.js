/** @jsx React.DOM */
'use strict';

var React = require('react');

var MapView = React.createClass({
    componentDidMount: function() {
      var sitepoint = new google.maps.LatLng(-37.805723, 144.985360);
      var mapOptions = {
              zoom: 3,
              center: sitepoint
          },
          map = new google.maps.Map(this.getDOMNode(), mapOptions),
          marker = new google.maps.Marker({
           map:map,
           draggable:true,
           animation: google.maps.Animation.DROP,
           position: sitepoint
      });
      this.setState({
        map: map
      });
    },
    render: function() {
        return (
            <div id="map"><span>Map</span></div>
        );
    }
});

module.exports = MapView;
