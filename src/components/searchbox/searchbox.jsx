import React from 'react'
import { InputGroup, Input, Button } from 'reactstrap'
import axios from 'axios'

const Searchbox = (props) => {
    const peoplePieces = 4 * 12;
    const url = `https://random-data-api.com/api/v2/users?size=${peoplePieces}&is_xml=true`

    const getPerson = async () => {
        try {
            const response = await axios.get(url);
            props.setUserData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const searchElement = (e) => {
        props.setUserData(e.target.value)
      } 
    return (
        <>
            <div style={{ width: '75%', zIndex: 2 }}>
                <InputGroup size='lg' className='mb-3'>
                    <Input onChange={searchElement} className='shadow-none border-0' type='search' placeholder='Wanted Search..' />
                    <Button onClick={getPerson} className='btn-dark shadow-none' style={{ color: '#f4d35e' }}>
                        search
                    </Button>
                </InputGroup>
            </div>
        </>
    )
}

export default Searchbox

{/* <i className='fas fa-search mx-2'></i> */ }
