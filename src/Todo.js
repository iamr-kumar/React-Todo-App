import React, { Component } from 'react';
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;

        if(this.state.isEditing) {
            result = (
                <div className = "Todo">
                    <form onSubmit = {this.handleUpdate} className = "Todo-edit-form">
                        <input type = "text"
                        value = {this.state.task}
                        onChange = {this.handleChange}
                        name = "task"
                        ></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className = "Todo">
                    <li className = {this.props.completed ? "Todo-task completed" : "Todo-task"} onClick = {this.handleToggle}>
                        {this.props.task}
                        </li> 
                    <div className="Todo-buttons">
                        <button onClick = {this.toggleForm}><i class="fas fa-pen" /></button>
                        <button onClick = {this.handleRemove}><i class="fas fa-trash" /></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;