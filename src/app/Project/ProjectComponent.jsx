'use client'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function ProjectComponent() {

    return (
        <>
            <h1 className='text-center mt-3' style={{ fontWeight: "bold" }}>Projects</h1>
            <div className="p-4 m-0">
                <Row>
                    <Col xs={12} md={6}>
                        <Card className='mt-3'>
                            <Card.Body className='p-2'>
                                <Card.Img variant='top' style={{ aspectRatio: "4/2" }} src='https://media.geeksforgeeks.org/wp-content/uploads/20240207150433/ach.jpg' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='mt-3'>
                            <Card.Body className='p-2'>
                                <Card.Img variant='top' style={{ aspectRatio: "4/2" }} src='https://miro.medium.com/v2/resize:fit:1400/1*mpcgiB4uuL7apoNsbk5wtw.png' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='mt-3'>
                            <Card.Body className='p-2'>
                                <Card.Img variant='top' style={{ aspectRatio: "4/2" }} src='https://www.freecodecamp.org/news/content/images/2021/01/5-Projects-To-Include-in-Your-Frontend-Portfolio.png' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className='mt-3'>
                            <Card.Body className='p-2'>
                                <Card.Img variant='top' style={{ aspectRatio: "4/2" }} src='https://www.refrens.com/grow/wp-content/uploads/2023/01/Featured-Images-71-1024x576.png' />
                            </Card.Body>
                        </Card>
                    </Col >
                </Row >

            </div >
        </>
    )
}
