import React, { useEffect, useState } from 'react';
import './app.css';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');
  useEffect(() => {
    const count = setInterval(() => {
      setActiveLight(preLight => {
        if (preLight === 'red') return 'yellow';
        if (preLight === 'yellow') return 'green';
        if (preLight === 'green') return 'red';
        return preLight;
      });
    }, 3000);

    return () => clearInterval(count);
  }, []);


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


