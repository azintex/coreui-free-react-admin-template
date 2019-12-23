import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from 'q';
import FetchLocations from '../Locations/FetchLocations';
import FetchHardwares from './FetchHardwares';

const apiUrl = 'http://api.azintex.com/hardware';

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
            await fetch(apiUrl, {method: 'POST', body: formData});
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
            <Button type='submit' color="primary">Add</Button>{' '}
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
                    <th>Location</th>
                    <th>Description</th>
                    <th>Vendor</th>
                    <th>IP Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <FetchHardwares />
            </Table>
            <ShowModal buttonLabel='+ Add switch'/>
        </div>
    )
  }

  export default Switches