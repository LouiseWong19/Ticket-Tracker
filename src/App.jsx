import './App.scss';
import team from "./data/team";
import EmployeeTile from "./Components/Employee/Employee";



const App = () => {
  const employeeNames = team.map((names)=>{
    return names.name;
  });
  console.log(employeeNames)

  const employeeRoles = team.map((roles)=>{
    return roles.role;
  });
  console.log(employeeRoles)

  return (
    <div className="app">
      <nav className="nav">
        <h1 className="nav__title">Ticket Tracker.</h1>
      </nav>
      <section className="tickets">
        <div className="tickets__employee-tiles">
          {team.map((employee)=>{
            return <EmployeeTile name = {employee.name} role = {employee.role}/>
          })}
        </div>
      </section>

    </div>
  );
}

export default App;
