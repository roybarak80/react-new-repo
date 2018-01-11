/**
 * Created by Roy Barak on 11-Jan-18.
 */
import React, {Component} from 'react';

class AddTask extends Component {
    constructor(){
        super();
        //this.state = {
        //    newProject:{}
        //}
    }
    static defaultProps ={
        tasks: ['Shopping', 'Studying', 'Cleaning']
    }

    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this.refs);
    }
    render() {

//onClick={this.deleteProject.bind(this, this.props.project.id)}
        let tasksOptions = this.props.tasks.map(task => {
            return <option key={task} value={task} >{task}</option>
        });


        return (
            <div>
                <h3>Add Task</h3>

                <label>Task</label><br />
                <select ref="category" onChange={this.handleClick}>
                    {tasksOptions}
                </select>

                <br/>

            </div>
        );
    }
}

export default AddTask;
