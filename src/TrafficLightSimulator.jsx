import React from 'react';
import './app.css';

const TrafficLightSimulator = () => {
  return (
    <div className="traffic-light-container">
      <h2>Traffic Light Simulator</h2>
      <div className="traffic-light">
        <div className="light red"></div>
        <div className="light yellow"></div>
        <div className="light green"></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;