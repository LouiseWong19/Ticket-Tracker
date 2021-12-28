import './App.scss';
import team from "./data/team";
import EmployeeTiles from './Components/EmployeeTiles/EmployeeTiles';



const App = () => {
  
  return (
    <div className="app">
      <nav className="nav">
        <h1 className="nav__title">Ticket Tracker.</h1>
      </nav>
      <section className="tickets">
        <EmployeeTiles team={team}/>
      </section>

    </div>
  );
}

export default App;
