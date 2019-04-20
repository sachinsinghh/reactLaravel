
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sachin from './components/Sachin';
import Person from './components/Person/Person';
import './components/Person/Person.css';

export default class App extends Component {

        state= {
            persons: [
            {name: 'sachin as',age: 28},
            {name: 'rahul as',age: 26},
            {name: 'rajesh as',age: 26},
            {name: 'rohit as',age: 26}
            ] ,
            showPersons: true
    }
  

componentDidMount() {
    console.log('did mount checked'); 
}
componentWillMount() {
    console.log('will checked');
}
switchNameHandler=(nameCheck) => {
    console.log('was clic done');
    this.setState({
        persons: [
            {name: nameCheck,age: 28},
            {name: 'Raj',age: 26},
            {name: 'rajesh as',age: 26},
            {name: 'rohit as',age: 26}
            ] ,
        showPersons: false
    });
}
togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

}
changTheName =(event) => {
    console.log('inside change the name');
    this.setState({
        persons: [
            {name: 'sachin',age: 28},
            {name: event.target.value,age: 26},
            {name: 'rajesh as',age: 26},
            {name: 'rohit as',age: 26}
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
                                {
                                    this.state.showPersons ?
                                    <div>
                                <Person changed={this.changTheName} name={this.state.persons[0].name} />
                                <Person changed={this.changTheName} name={this.state.persons[1].name} />
                                <Person changed={this.changTheName} name={this.state.persons[2].name} />
                                <Person changed={this.changTheName} name={this.state.persons[3].name} />
                                    </div>
                                    :
                                    null
                                }
                                
                               
                            <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}

