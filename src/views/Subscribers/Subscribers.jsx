import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
//import { FaUser, FaBriefcase } from 'react-icons/fa';

const NewSubscriber = (props) => {
    const [step, setStep] = useState(null);

    return(
        <Row className='mt-2'>
            <Col sm={6}>
                <Card className='text-center mb-2'>
                    <CardBody></CardBody>
                    <Button value='Private' onClick={(e) => { props.setSubscriber(e.target.value); props.goTo('Connection') }} block>Fiziki şəxs</Button>
                </Card>
            </Col>
            <Col sm={6}>
                <Card className='text-center'>
                    <CardBody></CardBody>
                    <Button value='Company' onClick={(e) => { props.setSubscriber(e.target.value); props.goTo('Connection') }} block>Şirkət</Button>
                </Card>
            </Col>
        </Row>
    )
}

const Subscribers = () => {
    const [subscriberType, setSubscriberType] = useState('company');
    console.log(subscriberType);
    return(
        <React.Fragment>
            <select onChange = {e => setSubscriberType(e.target.value)}>
                <option disabled>--Seçim edin</option>
                <option value='company'>Şirkət</option>
                <option value='private'>Fiziki şəxs</option>
                <option value='all'>Bütun</option>
            </select>
            <Button value='New subscriber'>New subscriber</Button>
        </React.Fragment>
    )
}

export default Subscribers;