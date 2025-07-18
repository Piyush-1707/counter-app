import React, { useState } from 'react';
import './Counter.css';

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <h3>{count}</h3>
      <div className="btns">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
