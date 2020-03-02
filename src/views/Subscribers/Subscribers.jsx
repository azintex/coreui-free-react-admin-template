import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import * as data from '../../_data.json';
//import { FaUser, FaBriefcase } from 'react-icons/fa';



const ShowModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal)

    async function handleSubmit(e) {    
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            await fetch('https://api.azintex.com/v1/subscribers', {method: 'POST', body: formData});
        } catch (error) {
            alert(error)
        }
        toggle();
    }

        return (
            <div>
              <Button color="info" outline onClick={toggle}>{buttonLabel}</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
              <Form onSubmit={handleSubmit}>
                <ModalHeader toggle={toggle}>New subscriber</ModalHeader>
                <ModalBody>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="subscriberType">Subscriber type</Label>
                            <Input type="select" name="subscriberType" id="subscriberType" bsSize="sm">            
                                <option value='private'>Private</option>
                                <option value='company'>Company</option>
                                <option value='other'>Other</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="subscriberSID">SID</Label>
                            <Input type="text" name="subscriberSID" id="subscriberSID" bsSize="sm" placeholder="e.g. AZX 201050" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="doc">Document </Label>
                            <Input type="select" name="doc" id="doc" bsSize="sm" placeholder="e.g. ID" >
                                <option value='nationalId'>ID</option>
                                <option value='driverLicense'>Driver license</option>
                                <option value='passport'>Passport</option>
                            </Input>>
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="docSerial">Document serial</Label>
                            <Input type="text" name="docSerial" id="docSerial" bsSize="sm" placeholder="e.g. AZE 1700623" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="docName">Name</Label>
                            <Input type="text" name="docName" id="docName" bsSize="sm" placeholder="e.g. Haji" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="docLastName">MAC address</Label>
                            <Input type="text" name="docLastName" id="docLastName" bsSize="sm" placeholder="e.g. Uzdenov" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="patronymic">MAC address</Label>
                            <Input type="text" name="patronymic" id="patronymic" bsSize="sm" placeholder="e.g. Balamirza oglu" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="birthPlace">IP address</Label>
                            <Input type="text" name="birthPlace" id="birthPlace" bsSize="sm" placeholder="e.g. Baku city, Azerbaijan" />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="birthDate">IP address</Label>
                            <Input type="date" name="birthDate" id="birthDate" bsSize="sm" placeholder="e.g. 29/05/1985" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="issuedBy">Issued by</Label>
                            <Input type="text" name="issuedBy" id="issuedBy" bsSize="sm" placeholder="e.g. ASAN 4" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="issuedDate">MAC address</Label>
                            <Input type="date" name="issuedDate" id="issuedDate" bsSize="sm" placeholder="e.g. 29-05-2016" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="expireDate">MAC address</Label>
                            <Input type="text" name="expireDate" id="expireDate" bsSize="sm" placeholder="e.g. 29-05-2025" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="connectionProtocol">Name</Label>
                            <Input type="text" name="connectionProtocol" id="connectionProtocol" bsSize="sm" placeholder="e.g. PPPoE">
                                <option value="pppoe">PPPoE</option>
                                <option value="ipoe">IPoE</option>
                                <option value="staticIp">Static IP</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="cid">CID</Label>
                            <Input type="number" name="cid" id="cid" bsSize="sm" placeholder="e.g. 100500" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="connectedBy">Connected by</Label>
                            <Input type="number" name="connectedBy" id="connectedBy" bsSize="sm" placeholder="e.g. Nerimanov Perviz" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="connectionType">Connection type</Label>
                            <Input type="select" name="connectionType" id="connectionType" bsSize="sm" placeholder="e.g. FTTx">
                                <option value='fttx'>FTTx</option>
                                <option value='adsl'>ADSL</option>
                                <option value='twistedPair'>Twisted pair</option>
                                <option value='vpls'>VPLS</option>                                
                            </Input>                            
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="connectionDate">Connection date</Label>
                            <Input type="date" name="connectionDate" id="connectionDate" bsSize="sm" placeholder="e.g. 02/03/2020" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" bsSize="sm" placeholder="e.g. ppp1026" />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" bsSize="sm" placeholder="e.g. abcd1234" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="vlanId">Username</Label>
                            <Input type="number" name="vlanId" id="vlanId" bsSize="sm" placeholder="e.g. 578" />
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Label for="network">Password</Label>
                            <Input type="password" name="network" id="network" bsSize="sm" placeholder="e.g. 85.132.29.0/24" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="ipAddress">Connected by</Label>
                            <Input type="number" name="ipAddress" id="ipAddress" bsSize="sm" placeholder="e.g. 85.132.29.165" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="subnetMask">Connection type</Label>
                            <Input type="text" name="subnetMask" id="subnetMask" bsSize="sm" placeholder="e.g. 255.255.255.0" />                           
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="gateway">Connection date</Label>
                            <Input type="date" name="gateway" id="gateway" bsSize="sm" placeholder="e.g. 85.132.29.1" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="pstn">Connected by</Label>
                            <Input type="number" name="pstn" id="pstn" bsSize="sm" placeholder="e.g. 93" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="connectionType">Connection type</Label>
                            <Input type="select" name="connectionType" id="connectionType" bsSize="sm" placeholder="e.g. FTTx">
                                <option value='fttx'>FTTx</option>
                                <option value='adsl'>ADSL</option>
                                <option value='twistedPair'>Twisted pair</option>
                                <option value='vpls'>VPLS</option>                                
                            </Input>                            
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <Label for="connectionDate">Connection date</Label>
                            <Input type="date" name="connectionDate" id="connectionDate" bsSize="sm" placeholder="e.g. 02/03/2020" />
                        </FormGroup>
                    </Col>
                </Row>
                </ModalBody>
                <ModalFooter>
                  <Button type='submit' onClick={() => handleSubmit} color="primary">Add</Button>{' '}
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </Form>
              </Modal>
            </div>
          );
  }


const Subscribers = () => {
    const [subscribers, setSubscribers] = useState([]);

    const fetchSubscribers = async () => {
        try {
            const response = await fetch('https://api.azintex.com/v1/subscribers');
            const json = await response.json();
            return json;   
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchSubscribers().then(arr => setSubscribers(arr));
    }, [])


    return(
        <Table size="sm" responsive hover striped>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>SID</th>
                    <th>Doc serial</th>
                    <th>Protocol</th>
                    <th>Connection Type</th>
                    <th>CID</th>
                    <th>Username</th>
                    <th>VLAN</th>
                    <th>Topology</th>
                    <th>Currency</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {subscribers.map(s => (
                    <tr key={s.subscriber.sid}>
                        <td>{s.subscriber.type}</td>
                        <td>{s.subscriber.sid}</td>
                        <td>{s.subscriber.inform.docSerial}</td>
                        <td>{s.subscriber.connection.protocol}</td>
                        <td>{s.subscriber.connection.detail.connectionType}</td>                        
                        <td>{s.subscriber.connection.detail.cid}</td>
                        <td>{s.subscriber.connection.detail.username}</td>
                        <td>{s.subscriber.connection.detail.vlanId}</td>
                        <td>{s.subscriber.connection.topology.pstn}</td>
                        <td>{s.subscriber.payment.currency}</td>
                        <td>{s.subscriber.payment.price}</td>
                    </tr>
                ))}
            </tbody>
            <ShowModal buttonLabel = '+ New subscriber' />
        </Table>
    )
}

export default Subscribers;