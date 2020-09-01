import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoFrom';
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completd: !todo.completd}
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
            key = {todo.id} 
            id = {todo.id} 
            task = {todo.task} 
            remove = {this.remove} 
            update = {this.update} 
            completed = {todo.completd}
            toggleTodo = {this.toggleCompletion} />
        })
        return(
            <div className = "TodoList">
                <h2>To-do List! <span>A simple React To-Do List App</span></h2>
                <ul>{todos}</ul>
                <NewTodoForm create = {this.create}/>
            </div>
        )
    }
}

export default ToDoList;