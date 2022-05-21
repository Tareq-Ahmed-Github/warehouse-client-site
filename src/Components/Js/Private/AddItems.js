import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const url = `items.json/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });
    };
    return (
        <div className='w-50  mx-auto border p-4 m-2 bg-dark text-white' >
            <h4 className='text-warning'>ADD ITEMS</h4>
            <form className='d-flex flex-column mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 w-75 rounded-3 mx-auto' value={user.displayName} placeholder='user' {...register("displayName", { required: true })} />
                <input className='mb-2 w-75 rounded-3 mx-auto' value={user.email} placeholder='user' {...register("email", { required: true })} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter Bike name' {...register("name", { required: true })} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter Short description' {...register("description")} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Photo URL' {...register("picture")} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter Supplier Name' {...register("supplier")} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter Price' type="number" {...register("FOBPrices")} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 w-75 rounded-3 mx-auto' placeholder='Enter MinOrder' type="number" {...register("MinOrder")} />
                <input className='mb-2 rounded-pill bg-warning fw-bold w-25 mx-auto' type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItems;