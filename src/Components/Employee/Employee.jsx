import React from 'react';
import './Employee.scss';
import Counter from "../Counter/Counter";


const EmployeeTile = (props) => {
  const {name,role} = props
  console.log(name)

  return (
  <>
  <div className = "tiles">
    <h3>{name}</h3>
    <h3>{role}</h3>
    <Counter />
  </div>
  </>
  );
};


export default EmployeeTile;