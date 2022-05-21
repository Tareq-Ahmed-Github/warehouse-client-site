import React from 'react';
import Product from '../Product';
import useProducts from './../UseProducts';
import './../../Css/Products.css';
const HomeProducts = () => {
    const [Products] = useProducts();
    const homeProducts = Products.slice(0, 6);

    return (
        <div id='homeproducts'>
            <h2 className='text-dark my-5 text-center'>INVENTORY</h2>
            <div className='products'>

                {
                    homeProducts?.map(homeProduct => <Product
                        key={homeProduct._id}
                        Product={homeProduct}
                    ></Product>)
                }
            </div>
        </div>
    );
};


export default HomeProducts;