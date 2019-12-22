import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const apiUrl = 'http://api.azintex.com/hardware';

const FetchHardwares = () => {
    const [hardwares, fetchHardwares] = useState([]);

    const getHardwaresFromAPI = async () => {
        const response = await fetch(`${apiUrl}`);
        const json = await response.json();
        return json;
    }

    const deleteHardwareById= async (id) => {
        const request = await fetch(`${apiUrl}/${id}`, {method: 'DELETE'});
        const result = await request.status;
        console.log(result);                
    }

    useEffect(() =>{
        getHardwaresFromAPI().then(arr => fetchHardwares(arr));
    }, []);

    return (
        <tbody>
            {hardwares.map(hardware => (
                <tr key={hardware._id.$oid}>
                <td>{hardware.location}</td>
                <td>{hardware.description}</td>
                <td>{hardware.vendor}</td>
                <td>{hardware.ip_address}</td>
                <td>
                    <ButtonGroup>
                        <Button color='success' size='sm' onClick={()=> window.location=`telnet://${hardware.ip_address}`} >Connect</Button>
                        <Button outline color='primary' size='sm' className='icon-pencil' onClick={() => console.log('Edit')}></Button>
                        <Button outline color='danger' size='sm' className='icon-trash' onClick={() => deleteHardwareById(hardware._id.$oid)}></Button>
                    </ButtonGroup>
                </td>
                </tr>))}
        </tbody>
    )
}

export default FetchHardwares