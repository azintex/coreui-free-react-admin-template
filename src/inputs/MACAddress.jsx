import React, { useState, useEffect } from 'react';
import { Label, FormGroup, Input } from 'reactstrap';



const MACAddress = (props) => {
    const [macAddress, setMacAddress] = useState([]);

    useEffect(() => {
        console.log(macAddress);
    }, [macAddress])

    return (
        <FormGroup>
            <Label for={props.label}>{props.label}</Label>
            <Input type="text" name={props.name} id={props.id} onChange={e => setMacAddress(e.target.value)} value={macAddress}></Input>
        </FormGroup>
    )
}

export default MACAddress;
