'use client'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function ProjectComponent() {

    return (
        <div className="row p-4 m-auto d-flex justify-content-between">
            <Card style={{ width: '45%' }} className="col-sm-6 mb-3 mb-sm-0">
                <Card.Body>
                    <Card.Title>Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '45%' }} className="col-sm-6 mb-3 mb-sm-0">
                <Card.Body>
                    <Card.Title>Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '45%' }} className="col-sm-6 mb-3 mb-sm-0 my-4">
                <Card.Body>
                    <Card.Title>Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '45%' }} className="col-sm-6 mb-3 mb-sm-0 my-4">
                <Card.Body>
                    <Card.Title>Project</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Link</Card.Link>
                </Card.Body>
            </Card>

        </div>
    )
}
