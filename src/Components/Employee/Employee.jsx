import React from 'react';
import './Employee.scss';
import Counter from "../Counter/Counter";


const EmployeeTile = (props) => {
  const {name,role} = props
  console.log(name)

  return (
  <>
  <div className = "tiles">
    <div className = "tiles__employeeDetail">
      <h3 className="tiles__employeeDetail--employeeName">{name}</h3>
      <h3 className="tiles__employeeDetail--employeeRole">{role}</h3>
    </div>
    <Counter />
  </div>
  </>
  );
};


export default EmployeeTile;