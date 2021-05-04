import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskText: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.input);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add Todo:
                    <input
                        name='taskText'
                        type='text'
                        onChange={this.handleChanges} 
                    />
                    <button>Add Task</button>
                </label>
            </form>
        )
    }
}

