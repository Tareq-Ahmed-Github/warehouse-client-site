import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Social = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }
    if (error) {
        return <div className='d-flex align-items-center justify-content-center mx-auto'><Spinner className='d-flex align-items-center justify-content-center' animation="grow" />
            <h4 className='fs-1 text-success' >OOPS {error.message}</h4>
        </div>
    }
    return (
        <div>
            <Button onClick={() => signInWithGoogle()} className='mb-5 rounded-pill bg-dark'><img className='w-25' src="https://i.ibb.co/4mn5h7R/download-removebg-preview.png" alt="" /></Button>
        </div>
    );
};

export default Social;