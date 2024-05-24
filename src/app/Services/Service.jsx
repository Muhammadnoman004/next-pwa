'use client'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Service() {
    return (
        <Container >
            <div className='p-3 mt-3 mb-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-center' style={{ fontWeight: "bold" }}>Our Services</h1>
                </motion.div>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>Web Design</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>Digital Marketing</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        Degital marketing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>Photography</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        Photography refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>Graphic Designing</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        Graphic designing refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>Web Development</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        Web development refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <Card style={{ marginTop: "20px", minHeight: "250px" }} bg='dark' text='light'>
                                <Card.Body>
                                    <Card.Title className='text-primary text-center'>MS Office</Card.Title><hr />
                                    <Card.Text className='text-center'>
                                        MS office refers to the design of websites. It usually formula refers to the user experience aspects of website development rather than software development.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}
