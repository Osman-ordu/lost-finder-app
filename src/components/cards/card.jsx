import React from 'react'
import './contentCards.scss'

const card = ({
    first_name, last_name,
    phone_number,
    avatar, city, street_address, state, country, lat, lng
}) => {

    return (
        <>
            <div className='card-item mx-4 my-2'>
                <img  className='card-img' src={avatar} alt={first_name + last_name} />
                    <h4 className='mt-2 fw-bold'>{(first_name + ' ' + last_name)}</h4>
                        <p>Coordinates:{lat.toFixed(4)}/{lng.toFixed(4)}</p>
                        <p>{country} / {state} / {city} / {street_address}</p>
                        <p>Phone Number:{phone_number}</p>
            </div>
        </>
    )
}

export default card


