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

    

    render() {
        return (
            <form>
                <label>Add Todo:
                    <input
                        name='taskText'
                        type='text'
                        onChange={this.handleChanges} 
                    />
                </label>
            </form>
        )
    }
}

