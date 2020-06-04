import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        //console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    };

    //item from state is being reset to an empty after the submit event
    //handleSubmit takes the function addItem from App as a prop
    handleSubmit = e => {
        e.preventDefault();
        this.setState({task: ''});
        this.props.addItem(e, this.state.task) 
    };


   render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='task'
                    value= {this.state.task}
                    onChange={this.handleChanges} 
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
} 

export default TodoForm;