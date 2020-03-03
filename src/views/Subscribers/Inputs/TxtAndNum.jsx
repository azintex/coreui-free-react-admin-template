import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { func } from 'prop-types';

const TxtAndNum = (props) => {

    const [value, setValue] = useState("");

    // const updateValue = _input => {
    //     const regExp = new RegExp(/[a-zəıüöğçşA-ZƏIİÜÖĞÇŞ \s\d]$/gm);
    //     if (regExp.test(_input) && _input.length <= props.charLimit) {
    //         setValue(_input)
    //     }
        
    // }
    function updateValue(val) {
        // var regExp = new RegExp(/[a-zəıüöğçşA-ZƏIİÜÖĞÇŞ \s\d]$/gm);
        // if (regExp.test(val)) {
        //     setValue(val)
        // }
        setValue(val);
    }

    console.log(value);
    return (
        <FormGroup>
            <Label for={props.lbl}>{props.lbl}</Label>
            <Input type="text" pattern="[a-zA-Z0-9{8}]" title="Hello" name={props.name} id={props.name} placeholder={props.plh} value={value} onChange={e => updateValue(e.target.value)}  />
        </FormGroup>
    )
}

export default TxtAndNum;