import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container hover>
                    <Navbar.Brand href="/home">BikeZone</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className='me-2 text-decoration-none text-warning' to='/'>Home</Link>
                        <Link className='me-2 text-decoration-none text-warning' to='/products'>Products</Link>
                        <Link className='me-2 text-decoration-none text-warning' to='/blogs'>Blogs</Link>
                        {
                            user ? <Link className='me-2 text-decoration-none text-warning' to='/manageitems'>Manage Items</Link> : <p></p>
                        }
                        {
                            user ? <Link className='me-2 text-decoration-none text-warning' to='/additems'>Add Items</Link>  : <p></p>
                        }
                        {
                            user ? <Link className='me-2 text-decoration-none text-warning' to='/myitems'>My Items</Link> : <p></p>

                        }

                    </Nav>
                    <Nav className='ms-auto'>
                        {
                            user ? <Link onClick={logout} className='me-2 text-decoration-none text-warning' to='/logout'>Log out</Link>
                                :
                                <Link className='me-2 text-decoration-none text-warning' to='/login'>Login</Link>
                        }
                        {
                            user ? <p></p> : <Link className='me-2 text-decoration-none text-warning' to='/signup'>Signup</Link>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;