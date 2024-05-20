'use client'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function ProjectComponent() {

    return (
        <>
            <h1 className='text-center mt-3'>Projects</h1>
            <div className="row p-4 m-auto d-flex justify-content-between">
                <Card style={{ width: '45%' }} bg='dark' text='light' className="col-sm-6 mb-3 mb-sm-0">
                    <Card.Body>
                        <Card.Title>Project</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Card.Link href="#">Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '45%' }} bg='dark' text='light' className="col-sm-6 mb-3 mb-sm-0">
                    <Card.Body>
                        <Card.Title>Project</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Card.Link href="#">Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '45%' }} bg='dark' text='light' className="col-sm-6 mb-3 mb-sm-0 my-4">
                    <Card.Body>
                        <Card.Title>Project</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Card.Link href="#">Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '45%' }} bg='dark' text='light' className="col-sm-6 mb-3 mb-sm-0 my-4">
                    <Card.Body>
                        <Card.Title>Project</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Card.Link href="#">Link</Card.Link>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
