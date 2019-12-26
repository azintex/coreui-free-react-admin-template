import React, { useState, useEffect } from 'react';
import { Table, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from 'q';
import FetchLocations from '../Locations/FetchLocations';

const APIURL = 'http://api.azintex.com/inventory/hardware';

const ShowInventoryItems = (props) => {
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

  const deleteFromInventoryById= async (id) => {
      try {
          await fetch(`${APIURL}/${id}`, {method: 'DELETE'});    
      } catch (error) {
          alert(error)
      }
  }

  useEffect(() => {
      getInventoryItemsFromAPI().then(arr => fetchInventories(arr));
  }, []);

  return (
      <tbody>
          {inventoryItems.map(hardware => (
              <tr key={hardware._id.$oid}>
              <td>{hardware.type}</td>
              <td>{hardware.location}</td>
              <td>{hardware.description}</td>
              <td>{hardware.vendor}</td>
              <td>{hardware.ip_address}</td>
              <td>
                  <ButtonGroup>
                      <Button color='success' size='sm' onClick={()=> window.location=`telnet://${hardware.ip_address}`} >Connect</Button>
                      <Button outline color='primary' size='sm' className='icon-pencil' onClick={() => console.log('Edit')}></Button>
                      <Button outline color='danger' size='sm' className='icon-trash' onClick={() => deleteFromInventoryById(hardware._id.$oid)}></Button>
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

    const updateInventoryItems = (inventoryItemType) => {
        return <ShowInventoryItems inventoryItemType={inventoryItemType} />
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
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <FetchLocations />
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" placeholder="e.g. 5-th floor switch" />
            </FormGroup>
            <FormGroup>
                <Label for="vendor">Vendor</Label>
                <Input type="text" name="vendor" id="vendor" placeholder="e.g. Cisco Catalyst 2960" />
            </FormGroup>
            <FormGroup>
                <Label for="ip_address">IP address</Label>
                <Input type="text" name="ip_address" id="ip_address" placeholder="e.g. 10.16.93.33" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' onClick={updateInventoryItems} color="primary">Add</Button>{' '}
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
                    <th>Location</th>
                    <th>Notes</th>
                    <th>Vendor</th>
                    <th>Model</th>
                    <th>IP Address</th>
                    <th>Vendor</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <ShowInventoryItems />
            </Table>
            <ShowModal buttonLabel='+ Add switch'/>
        </div>
    )
  }

  export default Switches