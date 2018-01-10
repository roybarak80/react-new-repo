import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import AddProjects from './components/AddProjects';
import Projects from './components/projects';
import AddTask from './components/AddTask';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getToDos() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: "Business WebDesign",
                    category: "Web Design"
                },
                {
                    id: uuid.v4(),
                    title: "Social App",
                    category: "Mobile Dev"
                },
                {
                    id: uuid.v4(),
                    title: "ggffg",
                    category: "gffgfg"
                }


            ]
        });
    }

    componentWillMount() {
        this.getProjects;
        this.getToDos();
    }

    componentDidMount() {
        this.getToDos()
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects})
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects})


    }

    render() {
        return (
            <div className="App">
                <AddTask />
                <AddProjects addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            </div>
        );
    }
}

export default App;
