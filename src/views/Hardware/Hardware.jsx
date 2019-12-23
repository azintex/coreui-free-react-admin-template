import React, { useState, useEffect } from 'react';
//import useFetch from './FetchHook';


const Hardware = () => {

    const [hardwares, getHardwares] = useState([])

    useEffect(() => {
        fetch('http://api.azintex.com/hardware').then(res => res.json())
    }, []);

    return(
        <div>
            <button onClick={() => getHardwares()}>Click</button>
        </div>
    )
}

export default Hardware