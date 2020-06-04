import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


//setting up the original data for the App to work with
const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

// App is the paren to TodoList and passes props down to it
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList
    }
  }

    // The reason why we put the addItem function in App is because we will be manipulating the state of the app when we add a new task 
  addItem = (e, task) => {
    e.preventDefault();
    // Below we setup how the new task will look. It will be the same as our oringinal tasks.
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    //Here we use the spread operator on the original state and then add the newItem
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  completedTask = (id) => {
    console.log(id);
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (id === item.id){
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      }) 
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.state.todoList} completedTask={this.completedTask} clearCompleted={this.clearCompleted} />        
      </div>
    );
  }
}

export default App;
