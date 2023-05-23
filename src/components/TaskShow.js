import { useState } from "react"
import TaskCreate from "./TaskCreate"

function TasksShow({task , onDelete , onUpdate}) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick= () =>{
        onDelete(task.id);
    }
    
    const handleEditClick= () =>{
        setShowEdit(!showEdit); //bu değişken başlangıçta false tıklanınca true
    }
        
    const handleSubmit= (id,updateTitle,updateTaskDesc) =>{
        setShowEdit(false); //güncelleme işlemi gerçekteştiği için bunu false yapmamız lazım
        onUpdate(id,updateTitle,updateTaskDesc);
    }

    return ( 
        <div className="tasklar">
            {showEdit ? (
                <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} /> 
                ): (
                <div>
                    <h3>Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3>Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button className="button-delete" onClick={handleDeleteClick}>Sil</button>
                        <button className="button-edit" onClick={handleEditClick} >Güncelle</button>
                    </div>
                </div>
            )}
        </div>
     );
}

export default TasksShow;