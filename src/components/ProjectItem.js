
/**
 * Created by Roy Barak on 10-Jan-18.
 */
import React, { Component } from 'react';


class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

export default ProjectItem;
