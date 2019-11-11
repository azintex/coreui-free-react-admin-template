import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const AddSwitchModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
    //const locations = null
  
    const toggle = () => setModal(!modal);
    //const addSwitch = () => fetch('http://api.azintex.com', {body: }).then(res => res.json().then((result)))

    useEffect(() => {
        fetch('http://api.azintex.com/list/location').then(res => res.json()).then((result) => console.log(result))
        //console.log(locations)
    }) 
        
  
    return (
      <div>
        <Button color="info" outline onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Form>

            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                </Input>
            </FormGroup>
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
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' color="primary" onClick={toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
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
        fetch('http://api.azintex.com/list/hardware').then(res => res.json()).then((result) => this.setState({items: result}))
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
                <AddSwitchModal buttonLabel='+ Add switch'/>
            </div>
        )
    }
}
