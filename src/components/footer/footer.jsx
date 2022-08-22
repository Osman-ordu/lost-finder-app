import React from 'react';
import './footer.scss'
import { motion } from "framer-motion"


const footer = () => {
    return (
        <>
            <div className="container mt-5 pt-5 pb-5 footer" style={{ color: '#faf0ca' }}>
                <div className="row">
                    <div className="col-lg-5 col-xs-12 about-company">
                        <p className="pr-5" style={{ color: '505581' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis 
                        </p>
                        <motion.i
                            className='fas fa-search mt-4 mx-4 text-center' 
                            animate={{
                                rotate: 360,}}
                            transition={{
                                duration: 3,
                                repeat: Infinity}}/> Try !
                    </div>
                    <div className="col-lg-3 col-xs-12 links">
                        <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                        <ul className="m-0 p-0">
                            <li> <a href="#">Lorem ipsum</a> </li>
                            <li> <a href="#">Nam mauris velit</a> </li>
                            <li> <a href="#">Etiam vitae mauris</a> </li>
                            <li> <a href="#">Fusce scelerisque</a> </li>
                            <li> <a href="#">Sed faucibus</a> </li>
                            <li> <a href="#">Mauris efficitur nulla</a> </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12 location">
                        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p className="mb-0"><i className="fa fa-phone mr-3"></i>(543) 648-5164</p>
                        <p>
                            <i className="fa fa-envelope-o mr-3"></i>
                            orduosmann@gmail.com
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col copyright">
                        <p className=""><small style={{ color: '505581' }}>© 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer