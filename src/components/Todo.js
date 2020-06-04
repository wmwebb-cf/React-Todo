import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        <div className={`todo${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.completedTask(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;