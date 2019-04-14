import React from 'react';

const person = (props) => {
    return <p>I'm a {props.name}!
    <input type="text" onChange={props.changed} value={props.name} />
    
    </p>
};

export default person;