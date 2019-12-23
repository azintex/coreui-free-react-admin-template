import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const apiUrl = 'http://api.azintex.com/hardware';

const FetchHardwares = () => {
    const [hardwares, fetchHardwares] = useState([]);

    const getHardwaresFromAPI = async () => {
        try {
            const response = await fetch(`${apiUrl}`);
            const json = await response.json();
            return json;   
        } catch (error) {
            alert(error)
        }
    }

    const deleteHardwareById= async (id) => {
        try {
            await fetch(`${apiUrl}/${id}`, {method: 'DELETE'});    
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        getHardwaresFromAPI().then(arr => fetchHardwares(arr));
    }, [hardwares.ip_address]);

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