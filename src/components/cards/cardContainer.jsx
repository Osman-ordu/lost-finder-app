import React from 'react'
import Card from './card'
import { personData } from '../../mock/personData'

const cardContainer = ({ search }) => {

  const searchArea = search;

  return (
    <>
      <div className='card-container d-flex flex-wrap align-items-center justify-content-center'>
        {personData.filter((result) => {
          if (searchArea === '') {
            return result
          } else if (result.first_name.toLocaleLowerCase().includes(searchArea.toLocaleLowerCase())) {
            return result
          }
        }).map((person, index) => (

          searchArea !== '' ?
            <Card
              key={index} first_name={person.first_name}
              last_name={person.last_name} phone_number={person.phone_number}
              avatar={person.avatar} city={person.address.city}
              street_address={person.address.street_address} state={person.address.state}
              country={person.address.country} lat={person.address.coordinates.lat} lng={person.address.coordinates.lng} />
            : null
        ))
        }

      </div>
    </>
  )
}

export default cardContainer