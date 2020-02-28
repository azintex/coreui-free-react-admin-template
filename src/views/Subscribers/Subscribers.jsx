import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import {} from '../../_data.json';
//import { FaUser, FaBriefcase } from 'react-icons/fa';


const Subscribers = () => {
    const [subscribers, getSubscribers] = useState([]);

    // const fetchSubscribers = () => {
    //     try {
    //         const response = await fetch('https://api.azintex.com/v1/subscribers', {method : 'GET'});
    //         const json = await response.json();
    //         return json;
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    useEffect(() => {
        getSubscribers([{
            subscriber: {
                type: 'private',
                sid: 'AZX 201500',
                inform: {
                    docType: 'ID',
                    docSerial: 'AZE 17006023',
                    name: 'Haji',
                    lastName: 'Uzdenov',
                    patronymic: 'Balamirza',
                    birthPlace: 'Baku, Azerbaijan',
                    birthDate: '29-05-1985',
                    issuedBy: 'ASAN 4',
                    issuedDate: '29-06-2016',
                    expireDate: '29-05-2045',
                },
                connection: {
                    protocol: 'PPPoE',
                    detail: {
                        cid: '1234567',
                        connectionType: 'FTTx',
                        connectionDate: '2020-28-02',
                        connectedBy: 'Nerimanov Perviz',
                        username: 'ppp1234',
                        password: 'abcd1234',
                        network: '85.132.30.0/24',
                        vlanId: 984,
                        ipAddress: '85.132.30.226',
                        subnet: '255.255.255.0',
                        gateway: '85.132.30.1',                        
                    },
                    topology: {
                        pstn: 93
                    }
                },
                payment: {
                    rate: '30Mb/s',
                    currency: 'manat',
                    price: 150,
                    purchaseDate: '28-02-2020',
                    purchaseExpireDate: '28-03-2020',
                    lastPaymentDate: '27-02-2020'
                }
            }
        }])
    })


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
        </Table>
    )
}

export default Subscribers;