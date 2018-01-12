/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
    handleClickSelect = () => {
        this.setState({
            title:this.refs.title.value
        })

        //console.log(this.refs.title.value);
    }
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

       let message ='';
        if(this.state === null){
            message ='foo ';
        } else {
            message ='foo ' + this.refs.title.value;
            ///console.log(Object.values(this.state));
        }
        return (
            <div className="ToDos">
                <h3>Latest Todos</h3>
                <select ref="title" onChange={this.handleClickSelect}>{todoItems}</select>
                <p>{message}</p>
            </div>
        );
    }
}

export default ToDos;
