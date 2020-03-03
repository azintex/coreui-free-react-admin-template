import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Button, Input, InputGroup } from 'reactstrap';

const Private = React.lazy(() => import('./PrivateSubscriber'));
const Company = React.lazy(() => import('./CompanySubscriber'));

const Subscriber = () => {
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
        <div>
            {props.subscriberType == 'private' ? <Private lbl="Private subscriber" name="subscriberType" /> : null}
            {props.subscriberType == 'company' ? <Company lbl="Company subscriber" name="subscriberType" charLimit={12} /> : null}
        </div>
    )
}

export default Subscriber;