import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/#home">Warehouse</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='me-2 text-decoration-none text-warning' to='/products'>Products</Link>
                        <Link className='me-2 text-decoration-none text-warning' to='/'>Home</Link>
                        <Link className='me-2 text-decoration-none text-warning' to='/blogs'>Blogs</Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Link className='me-2 text-decoration-none text-warning' to='/login'>Login</Link>
                        <Link className='me-2 text-decoration-none text-warning' to='/signup'>Signup</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;