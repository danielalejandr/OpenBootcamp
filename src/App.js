import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting'
// import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
import ListTask from './components/container/list_task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/*<Greeting name={"DANIEL"}></Greeting>*/}
      {/* <GreetingF name="ANTHONELA"></GreetingF> */}
      {/*<TaskListComponent></TaskListComponent>*/}
      <ListTask></ListTask>
      </header>
    </div>
  );
}

export default App;
