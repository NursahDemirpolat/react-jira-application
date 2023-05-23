import TasksShow from "./TaskShow";

function TaskList({tasks}) {

    return (
        <div>
            {tasks.map((task) => {   ///Array fonsiyonunu dönüyoruz map ile task ile bilgiyi alıyoruz
                return (
                    <TasksShow key={task.id} task={task}/>
                )
            })}
        </div>  
    );
}

export default TaskList;