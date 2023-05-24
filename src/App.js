import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post('http://localhost:3004/tasks', {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data]; //--> ...tasks var olan eski taskları ifade eder , yeni tasks eklerken id değeride olması lazım (array matığı) (sprat operatörğü eskileri kopyalayıp yeni arraye yapıştırır)
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3004/tasks');
    // debugger;
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  
  const editTaskById = async (id, updateTitle, updateTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updateTitle,
      taskDesc: updateTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updateTitle, taskDesc: updateTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
