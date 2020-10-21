import React from 'react';
import './style.css';

const Task = function({task, increment, decrement, deleteTask}){
    let task = props.task
    return(
        <div className="card-task">
        <h2>{props.task.title}</h2>
        <p>{props.task.description}</p>
        <div className="status">
            <span style={{width: task.status+'%'}}></span>
        </div>
        <button 
            className= "btn-sm"
            onClick={()=> increment(task.id)}
            >
            <span className="material-icons">add</span>
        </button>
        <button className= "btn-sm"
        onClick={()=> decrement(task.id)}
        >
            <span className="material-icons">remove</span>
        </button>
        <button className= "btn-sm btn-danger"
        onClick={()=> deleteTask(task.id)}
        >
            <span className="material-icons">delete</span>
        </button>
        <p>{task.project}</p>
    </div>
    );
}

export default Task;