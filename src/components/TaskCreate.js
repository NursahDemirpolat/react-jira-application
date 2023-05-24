import { useState } from 'react';

function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {

    const [title,setTitle]= useState(task ? task.title : ''); //task var ise (düzenleme basıldıysa) title ı ata yoksa boş string ata
    const [taskDesc,setTaskDesc]= useState(task ? task.title : '');

    const handleTextInput = (event) => {
        setTitle(event.target.value) //--> inputtan alınan değer alınıp setTitle a basar
    }

    const handleTextArea = (event) => {
        setTaskDesc(event.target.value) //--> inputtan alınan değer alınıp setTitle a basar
    }

    const handleButton = (event) => {
        event.preventDefault(); //--> sayfayı yenileme özelliğini kapatma
        if(taskformUpdate){ //--> güncellemeye basıldıysa (false , true döndürüyo)  
            onUpdate(task.id,title,taskDesc);
        }
        else {
            onCreate(title,taskDesc); //---> props childen parenta gidicez TaskCreate-->App.js
        }            
        setTitle('');  //--> butona bastıktan sonra inputun içini boşaltma
        setTaskDesc(''); //--> butona bastıktan sonra textareanın içini boşaltma

    }

    return ( 
        <div>
            { ' ' }
            {taskformUpdate ? (
            <div className="task-update">
                <h3>Taskı Düzenleme Alanı</h3>
                <form className="form" >
                    <label className="form-label">Başlığı Düzenleyin!</label>
                    <input value={title} onChange={handleTextInput} className="form-text-area"/>
                    <label className="form-label">Taskı Düzenleyin!</label>
                    <textarea value={taskDesc} onChange={handleTextArea} rows={5} className="form-text-area"/>
                    <button className="update-button" onClick={handleButton}>Düzenle</button>
                </form>
            </div>
            ) :(
            <div className="task-create">
                <h3>Lütfen Task Ekleyiniz!</h3>
                <form className="form" >
                    <label className="form-label">Başlık</label>
                    <input value={title} onChange={handleTextInput} className="form-text-area"/>
                    <label className="form-label">Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTextArea} rows={5} className="form-text-area"/>
                    <button className="form-button" onClick={handleButton}>Oluştur</button>
                </form>
            </div>
            )}
        </div>
    );
}

export default TaskCreate;