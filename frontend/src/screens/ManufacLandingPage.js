import React from 'react';
import '../styles.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const ManufacLandingPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="p-4">
                        <h2 className="float-start">Welcome Nike India</h2>
                        <Button className="float-end">ADD PRODUCT</Button>
                    </Col>
                    <Col className="p-4">
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '15rem' }} className="float-right pt-4 m-2 shadow">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>iPhone 11</Card.Title>
                                <Card.Text><p>Seller - Ajay Kumar</p>
                                55,990
                                </Card.Text>
                                <Button className="bg-blue">EDIT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManufacLandingPage
