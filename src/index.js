import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//components

import Header from './components/header';
import NewsList from './components/new_list';

import JSON from './db.json';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){

        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })

        this.setState({filtered});
    }

    render() {

        return (

            <div>
                <Header newsSearch={keywords=>this.filterNews(keywords)}/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }

}


ReactDOM.render(<App/>, document.getElementById('root'))
