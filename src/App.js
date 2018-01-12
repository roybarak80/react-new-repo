import IntlTelInput from 'react-intl-tel-input'; // eslint-disable-line import/no-extraneous-dependencies
import 'react-intl-tel-input/dist/main.js';
import 'react-intl-tel-input/dist/main.css';

const loadJSONP = (url, callback) => {
    const ref = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');

    script.src = `${url + (url.indexOf('?') + 1 ? '&' : '?')}callback=${callback}`;
    ref.parentNode.insertBefore(script, ref);
    script.onload = () => {
        script.remove();
    };
};

const lookup = (callback) => {
    loadJSONP('http://ipinfo.io', 'sendBack');
    window.sendBack = (resp) => {
        const countryCode = (resp && resp.country) ? resp.country : '';

        callback(countryCode);
    };
};

function log(...args) {
    console.log(args);
}

const handler = (status, value, countryData, number, id) => {
    console.log(status, value, countryData, number, id);
};
import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import AddProjects from './components/AddProjects';
import Projects from './components/projects';
import AddTask from './components/AddTask';
import ToDos from './components/ToDos';



import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone1: '',
            phone2: '',
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
                  //  console.log(this.state);
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


    changePhone1(){
        console.log(this);
    }

    blurHandler1(){
        console.log(this);
    }
    render() {
        return (
            <div className="App">
                <IntlTelInput
                    onPhoneNumberChange={ this.changePhone1 }
                    onPhoneNumberBlur={ this.blurHandler1 }

                    defaultCountry={ 'auto' }
                    value={ this.state.phone1 }

                    css={ ['intl-tel-input', 'form-control'] }
                    utilsScript="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js"

                    />
                <div>Phone Number: {this.state.phone1 }</div>
                <AddTask />
                <AddProjects addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <ToDos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
