import React, {Component} from 'react';

import $ from 'jquery';
import NameSelect from './components/NameSelect';


import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    // getToDos() {
    //     $.ajax({
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         dataType: 'json',
    //         cache: false,
    //         success: function (data) {
    //             this.setState({todos: data}, function () {
    //                 console.log(this.state);
    //             });
    //         }.bind(this),
    //         error: function (xhr, status, err) {
    //             console.log(err);
    //         }
    //     });
    // }


    render() {
        console.log(todos);
        return (
            <div className="App">
           <NameSelect/>
            </div>
        );
    }
}

export default App;
