import React from 'react';
import { Table, Button } from 'reactstrap';


export default function Switches() {
    return (
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
                <tr>
                    <th scope="row">1</th>
                        <td>Avenue-Veraj</td>
                        <td>5-th floor</td>
                        <td>H3C</td>
                        <td>10.16.93.31</td>
                        <td><Button  outline color='info' size='sm' onClick={()=> window.location='telnet://10.16.93.29'} >Connect</Button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                        <td>Avenue-Veraj</td>
                        <td>4-th floor</td>
                        <td>Cisco 2960</td>
                        <td>10.16.93.30</td>
                        <td><Button  outline color='info' size='sm' onClick={()=> window.location='telnet://10.16.93.29'} >Connect</Button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                        <td>Avenue-Veraj</td>
                        <td>2-nd floor</td>
                        <td>Cisco 2960</td>
                        <td>10.16.93.29</td>
                        <td><Button  outline color='info' size='sm' onClick={()=> window.location='telnet://10.16.93.29'} >Connect</Button></td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                        <td>Avenue-Veraj</td>
                        <td>5-th floor</td>
                        <td>H3C</td>
                        <td>10.16.93.31</td>
                        <td><Button  outline color='info' size='sm' onClick={()=> window.location='telnet://10.16.93.29'} >Connect</Button></td>
                </tr>
            </tbody>
    </Table>
    )
}