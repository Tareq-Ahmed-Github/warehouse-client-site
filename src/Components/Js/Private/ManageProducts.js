import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from './../UseProducts';

const ManageProducts = () => {
    const [Products, setProducts] = useProducts();
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `items.json/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = Products.filter(Product => Product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <Table striped hover className='m-5 w-75 mx-auto table-bordered border-dark'>
                <thead>
                    <tr className='text-center row bg-warning'>
                        <th className='col-3'>Name</th>
                        <th className='col-3'>Photo</th>
                        <th className='col-3'>Quantity</th>
                        <th className='col-3'>Delete</th>
                    </tr>
                </thead>
                {
                    Products?.map(Product =>
                        <tbody key={Product._id}>
                            <tr className='row fw-bold'>
                                <td className='text-center col-3'>{Product.name.slice(0, 30)}</td>
                                <td className='text-center col-3 w-25'><img className='w-100' src={Product.picture} alt="" /></td>
                                <td className='text-center col-3'>{Product.quantity}</td>
                                <td className='text-center col-3'><Button onClick={() => handleDelete(Product._id)} variant="outline-warning rounded-pill fw-bold">DELETE</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            <div className='text-center'>
                <Link to='/addProducts'><Button variant="outline-warning mb-5 rounded-pill fw-bold">ADD NEW COLLECTION</Button></Link>
            </div>
        </div>
    );
};

export default ManageProducts;