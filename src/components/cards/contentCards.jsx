import React from 'react'
import { Button, Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap'
import './contentCards.scss'


const contentCards = ({
    uid,first_name, 
    last_name,phone_number, 
    country,state, 
    city, street_address,avatar }) => {

    return (
        <div key={uid} className='d-flex flex-wrap flex-row align-items-center justify-content-center'>
            <Card className='card-container m-4' style={{ width: '50vh', height: '50vh' }}>
                <CardBody>
                    <CardTitle>
                        <h5>{first_name}{last_name}</h5>
                    </CardTitle>
                    <CardImg src={avatar} alt={first_name} />
                    <CardText>
                        <address>
                            Street/No: {street_address}
                            City: {city}
                            State: {state}
                            Country: {country}
                            Phone Number: {phone_number}
                            
                        </address>
                    </CardText>
                    <Button variant="primary">Go somewhere</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default contentCards


