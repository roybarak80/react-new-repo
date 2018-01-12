/**
 * Created by Roy Barak on 11-Jan-18.
 */
import React, {Component} from 'react';

class AddTask extends Component {

    static defaultProps ={
        tasks: ['Shopping', 'Studying', 'Cleaning']
    }

    // Warning: this is *experimental* syntax.
    handleClick = () => {
      this.setState({
          value:this.refs.category.value
      })

       // console.log('this is:', this.refs.category.value);
    }
    render() {

//onClick={this.deleteProject.bind(this, this.props.project.id)}
        let tasksOptions = this.props.tasks.map(task => {
            return <option key={task} value={task} >{task}</option>
        });
        let message ='';
        if(this.state === null){
            message ='foo ' + 'Studying';
        } else {
            message ='foo ' + Object.values(this.state);
            console.log(Object.values(this.state));
        }



        return (
            <div>
                <h3>Add Task</h3>

                <label>Task</label><br />
                <select ref="category" onChange={this.handleClick}>
                    {tasksOptions}
                </select>
                <p>{message}</p>
                <br/>

            </div>
        );
    }
}

export default AddTask;
