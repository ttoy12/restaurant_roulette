import React, { Component } from 'react';

class GeoLocation extends Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      // Geolocation API is available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Function is called after the user gives permission
          console.log("Latitude: " + position.coords.latitude);
          console.log("Longitude: " + position.coords.longitude);
        }, 
        (error) => {
          // Handle errors
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      // Geolocation API is not supported by the browser
      console.log("Geolocation API is not supported by your browser.");
    }
  }
  render() {
    return (
      <div>GeoLocation Component Loaded</div>
    );
  }
}

export default GeoLocation;
