/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, {Component} from 'react';

class ToDoItem extends Component {


    render() {
        return (
            <option className="ToDo">
               {this.props.todo.title}
            </option>
        );
    }
}

export default ToDoItem;
