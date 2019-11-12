import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const FetchHardwares = () => {

    const [hardwares, getHardwares] = useState([])
    const [hasError, setErrors] = useState(false)

    async function fetchHardwares() {
    const res = await fetch('http://api.azintex.com/hardware')
    res.json().then(response => getHardwares(response)).catch(error => setErrors(error))
    }

    async function deleteHardware(id) {
        const req = await fetch(`http://api.azintex.com/hardware/${id}`, {method: 'DELETE'})
        req.then(() => console.log(`${id} deleted`)).catch(error => setErrors(error))
    }

    useEffect(() => {
        fetchHardwares()
    }, [])

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
                        <Button outline color='info' size='sm' onClick={()=> window.location=`telnet://${hardware.ip_address}`} >Connect</Button>
                        <Button outline color='secondary' size='sm' className='icon-pencil'></Button>
                        <Button outline color='danger' size='sm' className='icon-trash' onClick={() => deleteHardware(hardware._id.$oid)}></Button>
                    </ButtonGroup>
                </td>
                </tr>))}
        </tbody>
    )
}

export default FetchHardwares