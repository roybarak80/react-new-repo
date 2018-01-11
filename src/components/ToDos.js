/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {

    render() {
        let todoItems;
        if(this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                //console.log(project);
                return (

                    <ToDoItem key={todo.title} todo={todo} />
                );
            });
        }
        return (
            <div className="ToDos">
                <h3>Latest Todos</h3>
                {todoItems}
            </div>
        );
    }
}

export default ToDos;
