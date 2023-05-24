import TasksShow from "./TasksShow";

function TaskList({ tasks , onDelete , onUpdate}) {

    return (
        <div className="task-list">
            {tasks.map((task,index) => {   ///Array fonsiyonunu dönüyoruz map ile task ile bilgiyi alıyoruz
                return (
                    <TasksShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
                )
            })}
        </div>  
    );
}

export default TaskList;