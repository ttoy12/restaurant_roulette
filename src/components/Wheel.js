import React, { useState } from 'react';
import './Wheel.css';

const Wheel = () => {
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 3000); // Reset after spin duration
  };

  return (
    <div>
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        <div className="segment" style={{ transform: 'rotate(0deg)' }}>something new</div>
        <div className="segment" style={{ transform: 'rotate(90deg)' }}>else</div>
        <div className="segment" style={{ transform: 'rotate(180deg)' }}>nothing</div>
        <div className="segment" style={{ transform: 'rotate(270deg)' }}>where</div>
      </div>
      <button onClick={spinWheel}>Spin</button>
    </div>
  );
};

export default Wheel;
