import React, { Component } from 'react';

class UserComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            age:this.props.age
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>Birthday!</button>
            </div>
        )
    }
    birthday = (e) => {
        this.setState({age: parseInt(this.state.age) +1})
    }
}

export default UserComponent;