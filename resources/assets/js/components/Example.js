import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sachin from './Sachin';
import Person from './Person/Person';
import './Person/Person.css';

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
switchNameHandler=(nameCheck) => {
    console.log('was clic done');
    this.setState({
        persons: [
            {name: nameCheck,age: 28},
            {name: 'Raj',age: 26}
            ]    
    });
}
changTheName =(event) => {
    console.log('inside change the name');
    this.setState({
        persons: [
            {name: 'sachin',age: 28},
            {name: event.target.value,age: 26}
            ]    
    });

}




    
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">
                         
                                I'm an example sachin component!
                                <Person changed={this.changTheName} name={this.state.persons[1].name} />
                            <button style={style} onClick={()=>this.switchNameHandler('sachin done this time')}>Switch Name</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
