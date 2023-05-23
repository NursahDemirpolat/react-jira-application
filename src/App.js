import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const createTask = (title,taskDesc) => { //--> TaskCreate ten onCreate (props) ile bilgiyi çektik createTask'a tanımlamamız lazım
   console.log(title,taskDesc);
}

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/> 
      <h1>Görevlerim</h1>
      <TaskList/>
    </div>
  );
}

export default App;
