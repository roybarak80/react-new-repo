import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// COMPONENTS

import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import NotFound from './components/404';


class App extends Component {
    render(){
        return <div>Home</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
        <header>
            <NavLink to="/" activeStyle={{color:"red"}} >Home</NavLink><br/>
            <NavLink to="/posts" activeStyle={{color:"red"}}>Posts</NavLink><br/>
            <NavLink to="/profile" activeStyle={{color:"red"}}>Profile</NavLink><br/>
            <hr/>
            </header>    
            <Switch> 
            <Route path="/posts/:id" component={PostItem}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts" component={Posts}></Route> 
            <Route exact={true} path="/" component={App}></Route>
            <Route component={NotFound}></Route>          
            </Switch>
            </div>
    </BrowserRouter>
    ,document.querySelector('#root'))

