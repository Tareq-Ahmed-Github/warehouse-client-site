import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Product = ({ Product }) => {
    const { _id, name, picture, FOBPrices, MinOrder, description, quantity, supplier } = Product;
    const navigate = useNavigate();

    const navigateToProductDetail = _id => {
        navigate(`/Products/${_id}`);
    }
    return (
        <div className='container'>
            <CardGroup className='row w-100'>
                <Card className='col g-2'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body className='text-start'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h6> <span> Available: </span> {quantity}pics</h6>
                        <h6> <span> Stock: </span> {quantity === 0 ? 'sold' : 'available'}</h6>
                        <h6> <span>FOB PRICES:</span> {FOBPrices}</h6>
                        <h6> <span> MIN. ORDER:</span>  {MinOrder}<small>pics</small></h6>
                        <h6> <span> Supplier:</span>  {supplier}</h6>
                    </Card.Body>
                    <Button onClick={() => navigateToProductDetail(_id)} className="rounded-pill fw-bold my-3 mx-5 bg-dark">UPDATE</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Product;