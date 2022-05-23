import React from 'react';
import Product from '../Product';
import useProducts from './../UseProducts';
import './../../Css/Products.css';
const HomeProducts = () => {
    const [products] = useProducts();
    const homeProducts = products.slice(0, 6);

    return (
        <div className='bg-black pb-5'>
            <h2 className='text-warning py-5 mx-auto'>INVENTORY</h2>
            <div className='products w-75 mx-auto'>

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