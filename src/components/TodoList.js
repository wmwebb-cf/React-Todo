import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.list);
    return (
        <div className='TodoList'>
            {props.list.map(item => (
                <Todo key={item.id} task={item.task} completed={item.completed} />
            ))}
        </div>
    )}


export default TodoList;
