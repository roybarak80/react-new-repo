import React, {Component} from 'react';

import $ from 'jquery';

import Projects from './components/projects';


import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            //projects:[
            //    {name:"roy"},
            //    {name:"trt"},
            //    {name:"trttr"}
            //]
            projects :[{name:'Jhon', age:28, city:'HO'},{name:'Onhj', age:82, city:'HN'},{name:'Nohj', age:41, city:'IT'}]
        }
    }



    render() {
        return (
            <div className="App">

                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default App;
