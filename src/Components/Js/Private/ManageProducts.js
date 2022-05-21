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
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    Products?.map(Product =>
                        <tbody key={Product._id}>
                            <tr>
                                <td className='text-center'>{Product.name.slice(0, 30)}</td>
                                <td className='text-center'><img className='table-img' src={Product.picture} alt="" /></td>
                                <td className='text-center'>{Product.quantity}</td>
                                <td className='text-center'><Button onClick={() => handleDelete(Product._id)} variant="outline-dark rounded-pill fw-bold">DELETE</Button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            <div className='text-center'>
                <Link to='/addProducts'><Button variant="outline-dark mb-5 rounded-pill fw-bold">ADD NEW COLLECTION</Button></Link>
            </div>
        </div>
    );
};

export default ManageProducts;