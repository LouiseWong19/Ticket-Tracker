import './App.scss';
import team from "./data/team";
import Tile from "./Components/Employee/Employee";


const App = () => {
  console.log(team)

  // const boxes = () => {
  //   for (let i=0; i < team.length; i++){
  //     <Tile employeeName= {team[i].name}  employeeRole = {team[i].role}/>
  //   }
  // }

  return (
    <div className="app">
      <h1>Ticket Tracker</h1>
      <section className="tickets">
        <Tile employeeName= {team[0].name}  employeeRole = {team[0].role}/>
      </section>

    </div>
  );
}

export default App;
