function TasksShow({task , onDelete}) {

    const handleDeleteClick= () =>{
        onDelete(task.id)
    }

    console.log(task)

    return ( 
        <div className="tasklar">
            <h3>Göreviniz</h3>
            <p>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="button-delete" onClick={handleDeleteClick}>Sil</button>
                <button className="button-edit">Güncelle</button>
            </div>
        </div>
     );
}

export default TasksShow;