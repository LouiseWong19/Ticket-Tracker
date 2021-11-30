import React from 'react';
import './Employee.scss';
import Counter from "../Counter/Counter";

const employeeTile = (props) => {
  return <div className = "tiles">
    <h3>{props.employeeName}</h3>
    <h3>{props.employeeRole}</h3>
    <Counter />
  </div>
}

export default employeeTile;