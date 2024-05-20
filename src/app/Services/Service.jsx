'use client'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Service() {
    return (
        <Container >
            <div className='mt-4 mb-5'>
                <h1 className='text-center'>Our Services</h1>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>Web Design</Card.Title>
                                <Card.Text>
                                    Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>Digital Marketing</Card.Title>
                                <Card.Text>
                                    Degital marketing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>Photography</Card.Title>
                                <Card.Text>
                                    Photography refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>Graphic Designing</Card.Title>
                                <Card.Text>
                                    Graphic designing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>Web Development</Card.Title>
                                <Card.Text>
                                    Web development refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px" }}>
                            <Card.Body>
                                <Card.Title>MS Office</Card.Title>
                                <Card.Text>
                                    MS office refers to the design of websites. It usually formula refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}
