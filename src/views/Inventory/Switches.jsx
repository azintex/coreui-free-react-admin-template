import React, { useState, useEffect } from 'react';
import { Col, Row, Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from 'q';
import FetchLocations from '../Locations/FetchLocations';
import { url, version } from '../../_api.json';
import MACAddress from '../../inputs/MACAddress';

//const APIURL = 'https://api.azintex.com/inventory/hardware';
const APIURL = `${url}/${version}/inventory`;

const ShowInventoryItems = (props) => {

  const [isAdded, setIsAdded] = useState(false);
  const [inventoryItems, fetchInventoryItems] = useState([]);

  const getInventoryItems = async () => {
      try {
          const response = await fetch(`${APIURL}`);
          const json = await response.json();
          return json;   
      } catch (error) {
          alert(error)
      }
 }

  const deleteFromInventoryById = async (id) => {
      try {
          await fetch(`${APIURL}/${id}`, {method: 'DELETE'});
      } catch (error) {
          alert(error)
      }
  }

  useEffect(() => {
      getInventoryItems().then(arr => fetchInventoryItems(arr));
      //setIsAdded(props.isAdded);
      //console.log(inventoryItems);
  }, []);

  return (
      <tbody>
          {inventoryItems.map(inventoryItem => (
              <tr key={inventoryItem._id.$oid}>
                <td>{inventoryItem.hardware.type}</td>
                <td>{inventoryItem.hardware.role}</td>
                <td>{inventoryItem.hardware.notes}</td>
                <td>{inventoryItem.hardware.location}</td>                
                <td>{inventoryItem.hardware.vendor}</td>
                <td>{inventoryItem.hardware.model}</td>
                <td>{inventoryItem.hardware.ip_address}</td>
                <td>{inventoryItem.hardware.proto}</td>
                <td>
                    <ButtonGroup>
                        <Button color='success' bssize='sm' onClick={()=> window.location=`${inventoryItem.hardware.proto}://${inventoryItem.hardware.ip_address}`} >Connect</Button>
                        <Button outline color='primary' bssize='sm' className='icon-pencil' onClick={() => console.log('Edit')}></Button>
                        <Button outline color='danger' bssize='sm' className='icon-trash' onClick={() => deleteFromInventoryById(inventoryItem._id.$oid)}></Button>
                    </ButtonGroup>
                </td>
              </tr>))}
      </tbody>
  )
}

const ShowModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal)

    const updateInventoryItems = (inventoryItemType, isAdded) => {
        return <ShowInventoryItems inventoryItemType={inventoryItemType} isAdded={!isAdded}/>
    }

    async function handleSubmit(e) {    
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            await fetch(APIURL, {method: 'POST', body: formData});
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
                <ModalHeader toggle={toggle}>New hardware</ModalHeader>
                <ModalBody>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="type">Hardware type</Label>
                            <Input type="select" name="type" id="type" bsSize="sm">            
                                <option value='switch'>Switch</option>
                                <option value='router'>Router</option>
                                <option value='ups'>UPS</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="role">Hardware role</Label>
                            <Input type="text" name="role" id="role" bsSize="sm" placeholder="e.g. Core router" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="vendor">Vendor</Label>
                            <Input type="text" name="vendor" id="vendor" bsSize="sm" placeholder="e.g. Cisco" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="model">Model</Label>
                            <Input type="text" name="model" id="model" bsSize="sm" placeholder="e.g. Catalyst 2960" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="serialNumber">Serial number</Label>
                            <Input type="text" name="serialNumber" id="serialNumber" bsSize="sm" placeholder="e.g. FCQ1707X0EF" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="macAddress">MAC address</Label>
                            <Input type="text" name="macAddress" id="macAddress" bsSize="sm" placeholder="e.g. 50:06:04:49:E0:80" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="ip_address">IP address</Label>
                            <Input type="text" name="ip_address" id="ip_address" bsSize="sm" placeholder="e.g. 10.16.93.33" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="proto">Connection protocol</Label>
                            <Input type="select" name="proto" id="proto" bsSize="sm">            
                                <option value='ssh'>ssh</option>
                                <option value='telnet'>telnet</option>
                                <option value='http'>http</option>
                                <option value='https'>https</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FetchLocations />
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="notes">Notes</Label>
                            <Input type="text" name="notes" id="notes" bsSize="sm" placeholder="e.g. Heart of Aintex.com ISP" />
                        </FormGroup>
                    </Col>
                </Row>
                <MACAddress label="MAC address" name="macAddress" />
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

  const Switches = () => {
        return (
            <div>
                <Table size='sm' responsive striped hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Role</th>
                        <th>Notes</th>
                        <th>Location</th>                
                        <th>Vendor</th>
                        <th>Model</th>
                        <th>IP address</th>
                        <th>Protocol</th>
                    </tr>
                </thead>
                    <ShowInventoryItems />
                </Table>
                <ShowModal buttonLabel='+ Add'/>
            </div>
        )
  }

  export default Switches