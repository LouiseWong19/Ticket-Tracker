import React from 'react';
import './Counter.scss';

const counter = () =>{
  return <div className = "counter">
    <h4>Counter</h4>
    <h4>0</h4>
    <div className="counter__button">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
}

export default counter;