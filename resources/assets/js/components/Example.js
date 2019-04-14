import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sachin from './Sachin';
import Person from './Person/Person';

export default class Example extends Component {

        state= {
            persons: [
            {name: 'sachin as',age: 28},
            {name: 'rahul as',age: 26}
            ]     
    }
  

componentDidMount() {
    console.log('did mount'); 
}
componentWillMount() {
    console.log('will');
}
switchNameHandler=() => {
    console.log('was clic done');
    this.setState({
        persons: [
            {name: 'Ram',age: 28},
            {name: 'Raj',age: 26}
            ]    
    });
}




    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                            <Person name={this.state.persons[0].name} />
                                I'm an example component!
                                <Person name={this.state.persons[1].name} />
                            <button onClick={this.switchNameHandler}>Switch Name</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Sachin />, document.getElementById('example'));
}
