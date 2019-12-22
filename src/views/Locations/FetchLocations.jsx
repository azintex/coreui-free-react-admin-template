import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FetchLocations = () => {

    const [locations, getLocations] = useState([])
    const [hasError, setErrors] = useState(false)

    async function fetchLocations() {
    const resp = await fetch('http://api.azintex.com/get/location')
    resp.json().then(response => getLocations(response)).catch(error => setErrors(error))
    }

    useEffect(() => {
        fetchLocations()
    }, [])

    return (
        <FormGroup>
            <Label for="location">Location</Label>
            <Input type="select" name="location" id="location">            
                {locations.map(item => (<option key={item.id} value={item.location}>{item.location}</option>))}
            </Input>
        </FormGroup>
    )
}

export default FetchLocations