import React from 'react'
import { Table } from 'react-bootstrap';

const Tables = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name Project</th>
                    <th>Decsription</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td></td>
                </tr>
         
            </tbody>
        </Table>
    );
};

export default Tables;
