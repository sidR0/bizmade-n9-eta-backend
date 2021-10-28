import React from 'react'
import { Container, Table, Image } from 'react-bootstrap'
import '../styles.css';

const DealerOrderHistory = () => {
    return (
        <div>
            <Container>
                <h2 className="p-4">Orders</h2>
                <Table className="table">
                        <thead className="bg-lightblue">
                            <tr>
                            <th scope="col">Order name</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">QTY</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="p-5">
                                <td><Image src=""/>Cooking Oil</td>
                                <td>#2290</td>
                                <td>Confirmed</td>
                                <td>1</td>
                                <td>2,290</td>
                                </tr>
                                <tr className="p-5">
                                <td><Image src=""/>Whole Wheat</td>
                                <td>#2305</td>
                                <td>Processing</td>
                                <td>1</td>
                                <td>3,290</td>
                                </tr>
                                <tr className="p-5">
                                <td><Image src=""/>Corn Flakes</td>
                                <td>#2306</td>
                                <td>Processing</td>
                                <td>2</td>
                                <td>3,590</td>
                                </tr>
                        </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default DealerOrderHistory
