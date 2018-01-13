import React,{Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state ={
            title:'The keywords are : ',
            keywords:''}


    }

    inputChange(event){

        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value);


    }
    render() {

        return (

            <header>
                <div className="logo" onClick={()=>{console.log('rere');}}>Logo</div>
                <input onChange={this.inputChange.bind(this)}></input>
<p>{this.val}</p>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }

}


export default Header;