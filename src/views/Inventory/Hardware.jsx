import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';

const Hardware = () => {
    const [name, setName] = useState('')
    const [isAdded, setAdd] = useState(false)
    const [names, ] = useState([])

    useEffect(() => {
        if (isAdded) {
            names.push(name)
            setAdd(!isAdded)
        }
        console.log(name, isAdded);
    },[isAdded])

    return(
        <div>
            <ul>
                {names.map(_name => <li key={Math.random(1500)}>{_name}</li>)}
            </ul>
            <input type='text' name='name' placeholder='Type name here' value={name} onChange={(e) => setName(e.target.value)} ></input>
            <button onClick={() => setAdd(!isAdded)}>Add name</button>
        </div>
    )
}

export default Hardware;