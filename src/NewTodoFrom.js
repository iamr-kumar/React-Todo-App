import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.create({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ""
        });
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className = "NewTodoForm">
                <label htmlFor='task'>New Todo</label>
                <input type="text" 
                placeholder = 'New Todo' 
                name = "task"
                value = {this.state.task}
                id = "task"
                onChange = {this.handleChange}
                ></input>
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;