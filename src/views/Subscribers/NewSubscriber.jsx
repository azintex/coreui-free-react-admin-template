import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Button, Input, InputGroup } from 'reactstrap';
import PrivateSubscriber from './PrivateSubscriber';

const NewSubscriber = () => {
    const [subscriberType, setSubscriberType] = useState(null);

    return(
        <div>
            <Form>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="subscriberType">Subscriber type</Label>
                            <Input type="select" name="subscriberType" id="subscriberType" bsSize="sm" onChange={e => setSubscriberType(e.target.value)}>
                                <option>--Select</option>
                                <option value="private">Private</option>
                                <option value="company">Company</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <NextStep subscriberType={subscriberType} />
            </Form>
        </div>
    )
}

const NextStep = (props) => {
    return (
        props.subscriberType == 'private' ? <PrivateSubscriber label="Private subscriber" name="subscriberType" inputType="text" /> : null
    )
}

export default NewSubscriber;