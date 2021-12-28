import React from 'react'
import './EmployeeTiles.scss';
import Employee from '../Employee/Employee';

const EmployeeTiles = (props) => {
  const {team} = props
  return (
    <div className="employee-tiles">
    {team.map((employee)=>{
      return <Employee key={employee.id} name={employee.name} role={employee.role}/>
    })}
  </div>
  )
}

export default EmployeeTiles
