import React from 'react'
import { InputGroup, Input } from 'reactstrap'

const Searchbox = (props) => {
    const searchPerson = props.setSearch;

    const searchRobot = (event) => {
        return searchPerson(event.target.value)
    }

    return (
        <>
            <div style={{ width: '75%', zIndex: 2 }}>
                <InputGroup size='lg' className='m-3'>
                    <Input onChange={searchRobot} className='shadow-none border-0' type='search' placeholder='Wanted Search..' />
                </InputGroup>
            </div>
        </>
    )
}

export default Searchbox

{/* <i className='fas fa-search mx-2'></i> */ }
