import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-dark p-2'>
            <div className='d-flex  justify-content-around p-5'>
                <div className='d-flex flex-column'>
                    <Link to="/" className=' mx-1 hover-color text-warning fw-bold text-decoration-none'>HOME</Link>
                    <Link to="/blogs" className=' mx-1 hover-color text-warning fw-bold text-decoration-none'>BLOGS</Link>

                </div>
                <p className='text-warning text-center fs-5 my-auto'>Copyright © 2022 Tareq</p>
                <div className='d-flex flex-column'>

                    <Link to="/login" className='text-warning fw-bold mx-1 hover-color text-decoration-none '>
                        LOGIN
                    </Link>
                    <Link to="/register" className='text-warning fw-bold mx-1 hover-color hover-color text-decoration-none '>
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;