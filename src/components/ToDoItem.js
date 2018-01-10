
/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';


class ToDoItem extends Component {



    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category}
            </li>
        );
    }
}

export default ToDoItem;
