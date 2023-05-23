import TasksShow from "./TaskShow";

function TaskList({ tasks , onDelete }) {

    return (
        <div className="task-list">
            {tasks.map((task) => {   ///Array fonsiyonunu dönüyoruz map ile task ile bilgiyi alıyoruz
                return (
                    <TasksShow key={task.id} task={task} onDelete={onDelete}/>
                )
            })}
        </div>  
    );
}

export default TaskList;