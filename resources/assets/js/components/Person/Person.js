import React from 'react';
import './Person.css';

const person = (props) => {
    return (<div className="Person"><p>I'm a {props.name}!
    <input type="text" onChange={props.changed} value={props.name} />
    
    </p></div>)
};

export default person;