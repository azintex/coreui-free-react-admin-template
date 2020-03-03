import React, { useState, useEffect } from 'react';
import { Table,  } from 'reactstrap';




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
        </Table>
    )
}

export default Subscribers;