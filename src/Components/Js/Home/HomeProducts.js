import React from 'react';
import Product from '../Product';
// import useProducts from '../../../hooks/useProducts';
// import Product from '../../Products/Product/Product';
import useProducts from './../UseProducts';

const HomeProducts = () => {
    const [Products] = useProducts();
    const homeProducts = Products.slice(0, 6);

    return (
        <div >
            <h2 className='text-primary my-5 text-center'>INVENTORY</h2>
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