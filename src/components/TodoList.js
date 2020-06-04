import React from 'react';
import Todo from './Todo';

//TodoList is the child of App and the parent of Todo
const TodoList = props => {
    console.log(props.list);
    //Todo props are being assigned here and the map function is grabbing each 'key' and assigning it to a prop
    return (
        <div className='TodoList'>
            {props.list.map(item => (
                <div key={item.id}>
                    <Todo item={item} />
                </div>
                
            ))}
        </div>
    )}


export default TodoList;
