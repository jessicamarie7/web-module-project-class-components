import React from 'react';
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            {props.allTasks.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </div>
    )
}






// your components will all go in this `component` directory.

