import React, {useState} from 'react';

const Sachin = props =>  {
   const [getState,setSachin] = useState({
        persons: [
            {name: 'Ram',age: 28},
            {name: 'Raj',age: 26}
            ]    
    });
   const switchN = ()=> {
    setSachin( getState.persons[0].name = 'Ramveer');
   
console.log('inside switch');
    console.log(getState);
    }

    

        return (
            <div className="sddddachin">
            <h1>My name is Sachin Singh sachin</h1>
            <button onClick={switchN}></button>
            </div>
        );
}

export default Sachin;