'use client'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Service() {
    return (
        <Container >
            <div className='p-3 mt-3 mb-4'>
                <h1 className='text-center' style={{ fontWeight: "bold" }}>Our Services</h1>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>Web Design</Card.Title><hr />
                                <Card.Text className='text-center'>
                                    Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>Digital Marketing</Card.Title><hr />
                                <Card.Text className='text-center'>
                                    Degital marketing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>Photography</Card.Title><hr />
                                <Card.Text className='text-center'>
                                    Photography refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>Graphic Designing</Card.Title><hr />
                                <Card.Text className='text-center'>
                                    Graphic designing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>Web Development</Card.Title><hr />
                                <Card.Text className='text-center'>
                                    Web development refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                            <Card.Body>
                                <Card.Title className='text-primary text-center'>MS Office</Card.Title><hr />
                                <Card.Text className='text-center'>
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
