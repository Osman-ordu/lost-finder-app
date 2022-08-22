import React from 'react'
import { Button, Card, CardTitle, CardText, CardBody } from 'reactstrap'
import './contentCards.scss'


const contentCards = () => {
    return (
        <div className='d-flex flex-wrap flex-row align-items-center justify-content-center'>
            <Card className='card-container m-4' style={{ width: '50vh', height: '50vh' }}>
                <CardBody>
                    <CardTitle>
                        <h5>Card Title</h5>
                    </CardTitle>
                    <CardText>
                        Some quick example text
                    </CardText>
                    <Button variant="primary">Go somewhere</Button>
                </CardBody>
            </Card>
            <Card className='card-container m-4' style={{ width: '50vh', height: '50vh' }}>
                <CardBody>
                    <CardTitle>
                        <h5>Card Title</h5>
                    </CardTitle>
                    <CardText>
                        Some quick example text
                    </CardText>
                    <Button variant="primary">Go somewhere</Button>
                </CardBody>
            </Card>

        </div>
    )
}

export default contentCards


