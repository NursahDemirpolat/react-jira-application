import TasksShow from "./TasksShow";
import { useContext } from "react";
import TasksContext from "../context/Task";

function TaskList() {

   const {tasks} = useContext(TasksContext);

    return (
        <div className="task-list">
            {tasks.map((task,index) => {   ///Array fonsiyonunu dönüyoruz map ile task ile bilgiyi alıyoruz
                return (
                    <TasksShow key={index} task={task}/>
                )
            })}
        </div>  
    );
}

export default TaskList;