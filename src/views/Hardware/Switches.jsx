import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { async } from 'q';
import FetchLocations from '../Locations/FetchLocations';

const ShowSwitchModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false)
    //const [hardware, setHardware] = useState({})
    const [formData, setFormData] = useState(null)

    async function handleSubmit(formData) {
        const _formData = formData.target.value
        _formData = new FormData(_formData)
        //const req = await fetch('http://api.azintex.com/add/hardware', {method: 'POST', body: _formData})
        //req.json().then(request => setFormData(request)).catch(error => console.log(error))
        //const _formData = formData.target.value;
        console.log(_formData)
    }

    //const handleSubmit = () => setFormData(formData)
  
    const toggle = () => setModal(!modal)

    // useEffect(() => {
    //     console.log(formData)
    // })
    
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

export default class Swithces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
        }
    }

    componentDidMount() {
        fetch('http://api.azintex.com/get/hardware').then(res => res.json()).then((result) => this.setState({items: result}))
    }

    addSwitch() {
        fetch('http://api.azintex.com/add/hardware')
    }

    render() {
        return (
            <div>
                <Table size='sm' responsive striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Vendor</th>
                        <th>IP Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(item => (
                        <tr key={item._id.$oid}>
                            <th scope="row">{item._id.$oid}</th>
                            <td>{item.location}</td>
                            <td>{item.description}</td>
                            <td>{item.vendor}</td>
                            <td>{item.ip_address}</td>
                            <td><Button  outline color='info' size='sm' onClick={()=> window.location='telnet://'+item.ip_address} >Connect</Button></td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                <ShowSwitchModal buttonLabel='+ Add switch'/>
            </div>
        )
    }
}
