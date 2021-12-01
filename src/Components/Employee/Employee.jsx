import React from 'react';
import './Employee.scss';
import Counter from "../Counter/Counter";


const EmployeeTile = (props) => {
  const {name,role} = props
  console.log(name)

  return (
  <>
  <div className = "tiles">
    <div className = "employeeDetail">
      <h3 className="employeeName">{name}</h3>
      <h3 className="employeeRole">{role}</h3>
    </div>
    <Counter />
  </div>
  </>
  );
};


export default EmployeeTile;