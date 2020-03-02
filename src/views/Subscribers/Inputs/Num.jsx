import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const TxtInput = (props) => {
    return (
        <FormGroup>
            <Label for={props.lbl}>{props.lbl}</Label>
            <Input type="number" name={props.name} id={props.name} placeholder={props.plh} />
        </FormGroup>
    )
}