import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Form className='w-25 mx-auto border mt-5 rounded'>
                <h2 className='text-bold mt-3'>Login</h2>
                <Form.Group className="mb-3 mx-5 mt-5" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-start mx-5" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className='mb-3' variant="danger rounded-pill px-5" type="submit">
                    Submit
                </Button><br />
                <div className=''>
                    <p className='text-bold'>Or</p>
                    <p className='text-muted'>Login with</p>
                    <Button className='mb-5 rounded-pill bg-light'><img className='w-25' src="https://i.ibb.co/4mn5h7R/download-removebg-preview.png" alt="" /></Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;