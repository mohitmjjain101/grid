import React from 'react';
import { Table } from 'react-bootstrap'
import data from './data.json'
class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{value.firstname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.email}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Grid;