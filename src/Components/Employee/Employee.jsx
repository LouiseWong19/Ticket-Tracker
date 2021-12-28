import React from 'react';
import './Employee.scss';
import Counter from "../Counter/Counter";


const Employee = (props) => {
  const {name,role} = props
  //console.log(name)

  return (
  <>
  <div className = "employee">
    <div className = "employee__detail">
      <h3 className="employee__detail--name">{name}</h3>
      <h3 className="employee__detail--role">{role}</h3>
    </div>
    <Counter />
  </div>
  </>
  );
};


export default Employee;