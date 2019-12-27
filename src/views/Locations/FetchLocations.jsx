import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const APIURL = 'http://api.azintex.com/location';

const FetchLocations = () => {

    const [locations, fetchLocations] = useState([]);

    const getLocationsFromAPI = async () => {
        try {
            const response = await fetch(APIURL);
            const json = response.json();
            return json;   
        } catch (error) {
            console.log(`${error} occur`);
        }
    }

    useEffect(() => {
        getLocationsFromAPI().then(_locations => fetchLocations(_locations))
    }, [])

    return (
        <FormGroup>
            <Label for="location">Location</Label>
            <Input type="select" name="location" id="location">            
                {locations.map(location => (<option key={location._id.$oid} value={location.name}>{location.name}</option>))}
            </Input>
        </FormGroup>
    )
}

export default FetchLocations;