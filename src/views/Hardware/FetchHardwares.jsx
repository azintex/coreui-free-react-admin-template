import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const FetchHardwares = () => {

    const [hardwares, getHardwares] = useState([])
    const [hasError, setErrors] = useState(false)

    async function fetchHardwares() {
        const res = await fetch('http://api.azintex.com/hardware')
        res.json().then(response => getHardwares(response)).catch(error => setErrors(error))
    }

    async function deleteHardware(ip_address) {
        //const req = await fetch(`http://api.azintex.com/hardware/${ip_address}`, {method: 'DELETE'})
        //req.then(() => console.log(`${ip_address} deleted`)).catch(error => setErrors(error))
        fetch('http://api.azintex.com/hardware', {method: 'DELETE'}).then(data => console.log('Request succeeded with JSON data ', data)).catch(err => console.log('Request failed ', err))
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
                        <Button outline color='danger' size='sm' className='icon-trash' onClick={() => deleteHardware(hardware.ip_address)}></Button>
                    </ButtonGroup>
                </td>
                </tr>))}
        </tbody>
    )
}

export default FetchHardwares