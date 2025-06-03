import React, { useState } from 'react';
import './app.css';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  return (
    <div className="traffic-light-container">
      <h2>Traffic Light Simulator</h2>
      <div className="traffic-light">
        <div 
          className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        ></div>
        <div 
          className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        ></div>
        <div 
          className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLightSimulator;


