import { useState } from 'react';

function TaskCreate({onCreate}) {

    const [title,setTitle]= useState('');
    const [taskDesc,setTaskDesc]= useState('');

    const handleTextInput = (event) => {
        setTitle(event.target.value) //--> inputtan alınan değer alınıp setTitle a basar
    }

    const handleTextArea = (event) => {
        setTaskDesc(event.target.value) //--> inputtan alınan değer alınıp setTitle a basar
    }

    const handleButton = (event) => {
        event.preventDefault(); //--> sayfayı yenileme özelliğini kapatma
        onCreate(title,taskDesc); //---> props childen parenta gidicez TaskCreate-->App.js
        setTitle('');  //--> butona bastıktan sonra inputun içini boşaltma
        setTaskDesc(''); //--> butona bastıktan sonra textareanın içini boşaltma
    }

    return ( 
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
    );
}

export default TaskCreate;