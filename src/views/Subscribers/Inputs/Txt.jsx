import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TxtInput = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [inputHandler, setInputHandler] = useState(false);

    const handleInput = _input => {
        const regExp = new RegExp(/[a-zəıüöğçşA-ZƏIİÜÖĞÇŞ \s]$/gm);
        if (regExp.test(_input) && _input.length <= props.charLimit) {
            if(inputValue.length == 1) {
                setInputValue('')
            }
            setInputValue(_input)
        }
        console.log(inputValue);
    }

    return (
        <FormGroup>
            <Label for={props.lbl}>{props.lbl}</Label>
            <Input type="text" name={props.name} id={props.name} placeholder={props.plh} value={inputValue} onChange={e => handleInput(e.target.value)} />
        </FormGroup>
    )
}

export default TxtInput;