import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        //console.log(e.target.value)
        this.setState({item: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.addItem(e, this.state.item)
    }


   render(){
        return(
            <form>
                <input 
                    type='text'
                    name='task'
                    value= {this.state.item}
                    onChange={this.handleChanges} 
                />
                <button onSubmit={handleSubmit}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
} 

export default TodoForm;