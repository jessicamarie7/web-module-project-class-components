import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.toggleItem(props.item.id);
    }

    return (
        // <div onClick={handleClick} className={`project${props.project.completed ? 'completed' : ''}`}>
        <div>
            <p>{props.todo.task}</p>
        </div>
    );
};


export default Todo;