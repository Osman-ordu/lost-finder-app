import React from 'react'
import { InputGroup, Input, Button } from 'reactstrap'
import { motion,useAnimation } from "framer-motion"


const searchbox = () => {
    //Animation

    return (
        <>
            <div style={{ width: '80%', zIndex: 2 }}>
                <InputGroup size='lg' className='mb-3'>
                    <Input className='shadow-none border-0'
                        type='search'
                        placeholder='Wanted Search..' />
                    <Button  className='btn-dark shadow-none' style={{ color: '#f4d35e' }}>
                        <motion.i 
                        animate={{
                            scale:2,
                        }}
                        transition={{
                            duration:2 
                        }} 
                        className='fas fa-search mx-2'/>
                        search
                    </Button>

                </InputGroup>
            </div>
        </>

    )
}

export default searchbox