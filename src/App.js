import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const allTasks = [
  {
    task: 'Go To The Beach',
    id: 1,
    completed: false
  },
  {
    task: 'Buy A House',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      allTasks: allTasks
    }
  }

  addTask = (name) => {
    const newTask = {
      task: name,
      id: this.state.allTasks.length,
      completed: false
    };
    
    this.setState({
      allTasks: [...this.state.allTasks, newTask]
    })
  } 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Jessica's Tasks</h2>
        <TodoList allTasks={this.state.allTasks} />
        <TodoForm />
      </div>

    );
  }
}

export default App;
