import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]) //--> taskların tutulduğu array

  const createTask = (title,taskDesc) => { //--> TaskCreate ten onCreate (props) ile bilgiyi çektik createTask'a tanımlamamız lazım
    const createdTasks=[  
      ...tasks,{      //--> ...tasks var olan eski taskları ifade eder , yeni tasks eklerken id değeride olması lazım (array matığı) (sprat operatörğü eskileri kopyalayıp yeni arraye yapıştırır)
        id:Math.round(Math.random()*999999999),  //--> rastgele değer atar
        title:title,
        taskDesc:taskDesc,
      }  
    ];
    setTasks(createdTasks); //--> task değişkenine atamış olduk
  };

  const deleteTaskById = (id) => { //basılan butonun id değerini childden buraya aldık
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !==id; //task id si seçilen task id ye eşit olmayanlara dönücek (id arrayden çıkarıp başka bi yre kayıt etmemiz lazım bunun içinde setTask kullanıcaz)
    })
    setTasks(afterDeletingTasks)
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/> 
      <h1>Görevlerim</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById}/>
    </div>
  );
}

export default App;
