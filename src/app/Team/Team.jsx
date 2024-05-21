'use client'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Team() {
    return (
        <Container>
            <div className='p-3 mt-3 mb-5'>
                <h1 className='text-center' style={{ fontWeight: "bold" }}>Our Team</h1>
                <Row >
                    <Col xs={12} md={4}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" style={{ aspectRatio: "3/2", objectFit: "cover" }} src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" />
                            <Card.Body>
                                <Card.Title>Alyssa Healy</Card.Title>
                                <Card.Title>Senior Developer</Card.Title>
                                <Card.Text>
                                    A senior developer is a software engineering professional who works for a companys software development or information technology department.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" style={{ aspectRatio: "3/2", objectFit: "cover" }} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_become_a_marketing_manager.jpg" />
                            <Card.Body>
                                <Card.Title>Eion Morgan</Card.Title>
                                <Card.Title>Manager</Card.Title>
                                <Card.Text>
                                    An Information Systems manager is an integral cog in the service of field engineering. An individual needs to be responsible for the computer systems .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='mt-3'>
                            <Card.Img variant="top" style={{ aspectRatio: "3/2", objectFit: "cover" }} src="https://static.vecteezy.com/system/resources/thumbnails/006/694/117/small/freelance-man-working-on-laptop-at-home-at-night-man-freelancing-smiling-relaxing-after-finishing-work-at-home-at-night-freelance-work-and-work-from-home-concept-photo.jpg" />
                            <Card.Body>
                                <Card.Title>Pet Cummins</Card.Title>
                                <Card.Title>Freelancer</Card.Title>
                                <Card.Text>
                                    Freelancing is doing specific work for clients without committing to fulltime employment. Freelancers often take on multiple projects with different clients
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}