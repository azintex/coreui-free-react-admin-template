import React, { useState, useEffect } from 'react';
import { Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from 'q';
import FetchLocations from '../Locations/FetchLocations';

const APIURL = 'http://api.azintex.com/inventory/hardware';

const ShowInventoryItems = (props) => {

  const [isAdded, setIsAdded] = useState(false);
  const [inventoryItems, fetchInventories] = useState([]);

  const getInventoryItemsFromAPI = async () => {
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
      getInventoryItemsFromAPI().then(arr => fetchInventories(arr));
      //setIsAdded(props.isAdded);
      console.log(inventoryItems);
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
                <td>{inventoryItem.hardware.connection_proto}</td>
                <td>
                    <ButtonGroup>
                        <Button color='success' size='sm' onClick={()=> window.location=`telnet://${inventoryItem.hardware.ip_address}`} >Connect</Button>
                        <Button outline color='primary' size='sm' className='icon-pencil' onClick={() => console.log('Edit')}></Button>
                        <Button outline color='danger' size='sm' className='icon-trash' onClick={() => deleteFromInventoryById(inventoryItem._id.$oid)}></Button>
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
            <FormGroup>
                <Label for="type">Hardware type</Label>
                <Input type="select" name="type" id="type">            
                    <option>switch</option>
                    <option>router</option>
                    <option>ups</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="role">Hardware role</Label>
                <Input type="text" name="role" id="role" placeholder="e.g. Core router" />
            </FormGroup>
            <FormGroup>
                <Label for="notes">Notes</Label>
                <Input type="text" name="notes" id="notes" placeholder="e.g. Heart of Aintex.com ISP" />
            </FormGroup>
            <FetchLocations />
            <FormGroup>
                <Label for="vendor">Vendor</Label>
                <Input type="text" name="vendor" id="vendor" placeholder="e.g. Cisco" />
            </FormGroup>
            <FormGroup>
                <Label for="model">Model</Label>
                <Input type="text" name="model" id="model" placeholder="e.g. Catalyst 2960" />
            </FormGroup>
            <FormGroup>
                <Label for="ip_address">IP address</Label>
                <Input type="text" name="ip_address" id="ip_address" placeholder="e.g. 10.16.93.33" />
            </FormGroup>
            <FormGroup>
                <Label for="proto">Connection proto</Label>
                <Input type="select" name="proto" id="proto">            
                    <option>ssh</option>
                    <option>telnet</option>
                    <option>web</option>
                </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' onClick={() => updateInventoryItems('switch', true)} color="primary">Add</Button>{' '}
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